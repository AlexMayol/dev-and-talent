import express from 'express';
import bodyParser from 'body-parser'
import 'dotenv/config'
import { userRouter } from './infra/user/api'
import { clientRouter } from './infra/client/api/client.routes'

const app = express();
const port = 3000;

app.use(bodyParser.json())
// record a generic message and send it to Rollbar
app.get('/', (_, res) => {
    res.send('WIP API');
});

app.get('/json', (req, res) => {
    res.send({ name: 'Perico Palotes', occupation: ' Nini a tiempo completo' });
});

app.get('/query', (req, res) => {
    const { query } = req
    res.send(query);
});

app.use('/users', userRouter)
app.use('/clients', clientRouter)

app.listen(port, () => console.log(`Express is listening at http://localhost:${port}`));
