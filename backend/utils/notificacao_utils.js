const Notificacao = require("../models/Notificacoes");

exports.criaNotificacao = async function (idDestinatario, conteudo) {
    try {
        const novaNotificacao = await Notificacao.create({
            idDestinatario: idDestinatario,
            conteudo: conteudo,
            status: false
        });

        return novaNotificacao;
    } catch (error) {
        console.error("Erro ao criar notificacao", error);
        throw error;
    }
}

exports.getNotificacoes = async function (idDestinatario){
    try {
        const notificacoes = await Notificacao.findAll({
            where: {idDestinatario: idDestinatario},
            order: [["createdAt", "DESC"]]
        });

        return notificacoes;
    } catch (error) {
        console.error("Erro ao buscar notificações", error);
        throw error;
    }
}