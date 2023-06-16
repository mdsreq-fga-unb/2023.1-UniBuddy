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