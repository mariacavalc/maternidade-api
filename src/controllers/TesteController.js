const database = require('../database/connection');

class TesteController {
    novoTeste(req, res) {
        const { nome } = req.body;
        database.insert({ nome }).table("Teste").then(data => {
            console.log(data);
            res.json({ message: "Teste cadastrado com sucesso!" });
        }).catch(error => {
            console.log(error);
        });
    }
}

module.exports = new TesteController();