const auth = require('../middleware/auth');
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const notifiUtils = require('../utils/notificacao_utils');
const caronaUtils = require('../utils/carona_utils');

const User = require("../models/User");
const Carona = require('../models/Carona');
const Solicitacao = require('../models/Solicitacoes');
const Notificacoes = require('../models/Notificacoes');

router.use(express.json());

router.post("/registro", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);

        const novo_usuario = {
            nomeCompleto: req.body.nomeCompleto,
            email: req.body.email,
            telefone: req.body.telefone,
            senha: await bcrypt.hash(req.body.senha, salt)
        };

        const email = await User.findOne({where: {email: novo_usuario.email}});

        if(email === null){
            await User.create(novo_usuario);
            res.status(201).json(novo_usuario);
        } else {
            res.status(400).json({ error: 'Usuário já existe' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Erro ao registrar usuário.' });
    }
})

router.put("/editar", auth, async (req, res) => {
  try {
    const userId = req.usuario.id;
    const { nomeCompleto, email, telefone, senha } = req.body;

    const user = await User.findByPk(userId);

    if (user.id != userId) {
      return res.status(404).json({ message: "Você não tem permissão." });
    }

    user.nomeCompleto = nomeCompleto;
    user.email = email;
    user.telefone = telefone;
    if (senha) {
      const salt = await bcrypt.genSalt(10);
      const hashedSenha = await bcrypt.hash(senha, salt);
      user.senha = hashedSenha;
    }

    await user.save();

    res.status(200).json({ message: "Usuário atualizado com sucesso.", user });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar usuário.", error });
  }
});


router.delete("/deletar", auth, async (req, res) => {
  try {
    const userId = req.usuario.id;
    const usuario = await User.findByPk(userId);
    const idCaronas = await Carona.findAll({ where: { id_usuario: userId }, attributes: ["id"] });
    const notificacoes = await Notificacoes.findAll({ where: { idDestinatario: userId } });

    for (let carona of idCaronas) {
      const id = carona.id;
      const passageiros = await caronaUtils.getIdPassageiro(id);
      const caronaObj = await Carona.findByPk(id);
      const solicitacao = await Solicitacao.findOne({ where: { idCarona: id } });
      for (let passageiro of passageiros) {
        const notificacao = await notifiUtils.criaNotificacao(
          passageiro,
          "A carona que você solicitou foi deletada pelo motorista."
        );
      }
      await caronaObj.destroy();
      await solicitacao.destroy();
    }

    for (let notificacao of notificacoes) {
      await notificacao.destroy();
    }

    await usuario.destroy();
    res.status(200).json({ message: "Usuário deletado." });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar usuário.", error });
  }
});


router.post("/login", async (req, res) => {
    const usuario = await User.findOne({
      attributes: ["id", "nomeCompleto", "email", "senha"],
      where: {
        email: req.body.email
      }
    });
  
    if (usuario === null) {
      res.status(400).json({ error: 'Usuário não encontrado' });
    } else {
      if (!(await bcrypt.compare(req.body.senha, usuario.senha))) {
        res.status(400).json({ error: 'Senha incorreta' });
      } else {
        const token = jwt.sign({ id: usuario.id }, "shhh");
        const { senha, ...usuarioSemSenha } = usuario;
        return res.json({
          erro: false,
          message: "Login realizado com sucesso!",
          token
        });
      }
    }
  })
  

router.post("/logout", async (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true,
    }).status(200).json({message: "Logout efetuado"});
})

router.get("/perfil", auth, async (req, res) => {
  try {
    const userId = req.usuario.id;

    const usuario = await User.findOne({
      attributes: ["nomeCompleto", "email", "telefone"],
      where: { id: userId },
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.status(200).json({ usuario });
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar perfil do usuário", error });
  }
});

router.get("/perfil/:id", async (req, res) => {
  try {
    const usuario = await User.findOne({
      attributes: ["nomeCompleto", "email", "telefone"],
      where: { id: req.params.id },
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.status(200).json({ usuario });
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar perfil do usuário", error });
  }
})

router.get("/caronas", auth, async (req, res) => {
  try {
    const caronas = await Carona.findAll({
        where: {id_usuario: req.usuario.id},
        order: [["createdAt", "DESC"]]
    });

    if(caronas.length === 0){
      res.status(200).json({message: "Usuário ainda não possui caronas criadas."});
    } else {
      res.status(200).json(caronas);
    }

  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar caronas do usuário", error });
  }
});

router.get("/caronas/:id", async (req, res) => {
  try {
    const caronas = await Carona.findAll({
        where: {id_usuario: req.params.id},
        order: [["createdAt", "DESC"]]
    });

    if(caronas.length === 0){
      res.status(200).json({message: "Usuário ainda não possui caronas criadas."});
    } else {
      res.status(200).json(caronas);
    }

  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar caronas do usuário", error });
  }
});


module.exports = router;