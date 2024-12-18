import express from 'express';
const router = express.Router();
import { getAllEmp, postUser, updateUser, deleteUser } from '../controller/userController.js';

router.get('/getAll', getAllEmp);

router.post('/postUser', postUser)
router.put('/updateUser/:userID', updateUser)
router.delete('/deleteUser/:userID', deleteUser)

export default router;