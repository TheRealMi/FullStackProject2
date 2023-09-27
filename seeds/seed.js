// Write function to seed database here
const sequelize = require('../config/connection');
const { User, Pet, Behavior, Session } = require('../models');

const userData = require('./userData.json');
const petData = require('./petData.json');
const behaviorData = require('./behaviorData.json');
const sessionData = require('./sessionData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const pets = await Pet.bulkCreate(petData);

  const behaviors = await Behavior.bulkCreate(behaviorData);

  const sessions = await Session.bulkCreate(sessionData);

  process.exit(0);
};

seedDatabase();