const User = require("../models/User");

exports.getNomeUsuario = async function(id_usuario) {
    try {
        const nome = await User.findOne({
            where: {id: id_usuario},
            attributes: ['nomeCompleto']
        });

        console.log(nome.nomeCompleto);
        return nome.nomeCompleto;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.getTelefone = async function(id_usuario) {
    try {
        const telefone = await User.findOne({
            where: {id: id_usuario},
            attributes: ['telefone']
        });

        console.log(telefone.telefone);
        return telefone.telefone;
    } catch (error) {
        console.error(error);
        throw error;
    }
}