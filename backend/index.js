const express = require("express");
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:8100"
}

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync().then(() => {
    console.log("database alredy synced");
})

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("database alredy synced");
// })

app.get("/", (req, res) => {
    res.json({ message: "Welcome to grandLeague application." });
});

require("./routes/team.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
