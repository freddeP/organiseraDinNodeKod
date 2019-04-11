// Importera mina controllers
const citat = require("./controllers/citat");

module.exports = function(app)
{
    //citat-routes
    app.get("/citat", citat.index);
    app.get("/citat/create", citat.create); // obs ordning på dessa routes är viktig
    app.get("/citat/:id", citat.show);
    app.post("/citat", citat.store);

}