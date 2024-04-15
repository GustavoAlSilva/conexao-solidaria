import express from 'express';
import bodyParser from 'body-parser';
import estadoRoutes from './routes/estadoRoutes';
import cidadeRoutes from './routes/cidadeRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/estado', estadoRoutes);
app.use('/cidade', cidadeRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
