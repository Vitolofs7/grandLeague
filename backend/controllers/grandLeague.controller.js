const db = require("../models");
const Team = db.team;

exports.create = (req, res) => { 
    const team = {
        teamName: req.body.teamName, 
        coach: req.body.coach, 
        category: req.body.category,
        numberOfPlayers: req.body.numberOfPlayers 
    };
    Team.create(team)
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message: "Error creating the team",
                error: error.message
            });
        });
};

exports.findAll = (req, res) => { 
    Team.findAll()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message: "Error obtaining teams",
                error: error.message
            });
        });
};

exports.findOne = (req, res) => { 
    const id = req.params.id;

    Team.findByPk(id) 
        .then((data) => {
            if (!data) {
                return res.status(404).send({ message: "Team not found" });
            }
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message: "Error obtaining the team",
                error: error.message
            });
        });
};

exports.update = (req, res) => { 
    const id = req.params.id;

    Team.update(
        {
            teamName: req.body.teamName,
            coach: req.body.coach,
            category: req.body.category,
            numberOfPlayers: req.body.numberOfPlayers
        },
        { where: { id: id } }
    )
    .then((num) => {
        console.log(num)
        if (num == 1) {
            Team.findByPk(id).then(data => {
                res.send(data);
            })
            // res.send({ message: "Team updated correctly." });
        } else {
            res.send({ message: `Could not update the team with id=${id}. The team was not found or the request body is empty.` });
        }
    })
    .catch((error) => {
        res.status(500).send({
            message: "Error updating the team",
            error: error.message
        });
    });
};

exports.delete = (req, res) => { 
    const id = req.params.id;

    Team.destroy({ where: { id: id } })
        .then(() => {
            res.send({ message: "Team deleted" });
        })
        .catch((error) => {
            res.status(500).send({
                message: "Error deleting the team",
                error: error.message
            });
        });
};
