
import { Sequelize } from 'sequelize';
import { createUserSchema } from '../model/userSchema.js';
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('test', 'postgres', 'test', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
  });

  let UserModel = null;
  async function connection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UserModel  = await createUserSchema(sequelize);

        await sequelize.sync();

        console.log("All models were synchronized successfully");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  export {
        connection,
        UserModel
  }