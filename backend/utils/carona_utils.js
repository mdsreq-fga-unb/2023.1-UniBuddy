const User = require("../models/User")
const Carona = require('../models/Carona');
const Solicitacao = require('../models/Solicitacoes');

exports.getVagaCarona = async function(idCarona) {
    var passageiros = ["idPassageiro1", "idPassageiro2", "idPassageiro3", "idPassageiro4"];
    for (var i = 0; i < 4; i++) {
        var solicitacao = await Solicitacao.findOne({
            where: {idCarona: idCarona},
            attributes: [passageiros[i]]
        })
        if(solicitacao === null){
            return passageiros[i];
        }
    }
    return null
}