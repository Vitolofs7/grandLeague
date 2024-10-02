module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define("team", {
    teamName: {
      type: Sequelize.STRING,
    },
    coach: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    numberOfPlayers: {
      type: Sequelize.INTEGER, 
      validate: {
        min: 1
      }
    }
  });

  return Team;
};
