import express from 'express';
const app = express();
const PORT = 3000;
import { connection } from './postgres/postgres.js';
import cors from 'cors';


import routes from './view/routes.js';


app.use(routes);
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World!');
});


connection()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
