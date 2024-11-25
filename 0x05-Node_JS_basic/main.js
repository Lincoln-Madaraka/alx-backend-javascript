import readDatabase from './full_server/utils.js';

readDatabase("database.csv")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
