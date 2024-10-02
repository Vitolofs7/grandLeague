module.exports = app => {
    const teams = require("../controllers/grandLeague.controller.js");

    var router = require("express").Router();

    router.post("/", teams.create);

    router.get("/", teams.findAll);

    router.get("/:id", teams.findOne);
    
    router.put("/:id", teams.update);

    router.delete("/:id", teams.delete);

    app.use("/api/teams", router);
}