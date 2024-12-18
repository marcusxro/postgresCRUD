import { UserModel } from "../postgres/postgres.js";

export const getAllEmp = async (req, res) => {
    try {
        const users = await UserModel.findAll();

        if(users.length > 0){
            res.status(200).send(users);
        } else {
            res.status(404).send("No user found");
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const postUser = async (req, res) => {
    try {
        const { fullname, personid } = req.query; 

        const personIdExists = await UserModel.findOne({where:{personid: personid}});

        if(personIdExists){
            res.status(409).send('Person ID already exists');
            return;
        } else {
            if (!fullname || !personid) {
                res.status(400).send('Invalid request');
                return;
              }
      
              const newUser = await UserModel.create({
                fullname,
                personid
              });
    
              res.status(201).send(newUser);
        }

      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}

export const updateUser = async (req, res) => {
    try{
        const userID = req.params.userID;
        console.log(req.query)
        const editedUser = UserModel.update({fullname: req.query.fullname}, {where: {personid: userID}});
        if(editedUser){
           return res.status(200).send('User updated successfully');
        } else {
            return res.status(404).send('User not found');
        }

    }
    catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req, res) => {
    try{
        const userID = req.params.userID;
        const personIdExists = await UserModel.findOne({where:{personid: userID}});

        if(personIdExists){
            const deletedUser = await UserModel.destroy({where: {personid: userID}});
            if(deletedUser){
                return res.status(200).send('User deleted successfully');
            } else {
                return res.status(404).send('User not found');
            }
        } else {
            return res.status(404).send('User not found');
        }
    }
    catch (error) {
        console.log(error);
    }
}