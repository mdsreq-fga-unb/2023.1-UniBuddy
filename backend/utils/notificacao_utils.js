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

exports.marcarComoLida = async function (idDestinatario){
    try {
        await Notificacao.update(
          { status: true },
          { where: { idDestinatario: idDestinatario, status: false } }
        );
    
        console.log('Todas as notificações foram marcadas como lidas.');
    } catch (error) {
        console.error('Erro ao marcar notificações como lidas:', error);
        throw error;
    }
}