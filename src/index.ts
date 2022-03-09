import express from 'express';
import bodyParser from 'body-parser'
import 'dotenv/config'
import { clientRouter } from './infra/api/client.routes'
import "reflect-metadata";
import { createConnection } from "typeorm";


const connection = createConnection().then(res => { }).catch(error => console.log(error));

const app = express();
const port = 3000;

app.use(bodyParser.json())
// record a generic message and send it to Rollbar
app.get('/', (_, res) => {
    res.send('WIP API');
});

app.get('/json', (_, res) => {
    res.send({ name: 'Perico Palotes', occupation: ' Nini a tiempo completo' });
});

app.get('/query', (req, res) => {
    const { query } = req
    res.send(query);
});
app.get('/profile', (_, res) => {
    res.redirect('/json');
});

app.use('/clients', clientRouter)

app.listen(port, () => console.log(`Express is listening at http://localhost:${port}`));
