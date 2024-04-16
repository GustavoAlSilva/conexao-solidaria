import express from 'express';
import bodyParser from 'body-parser';
import estadoRoutes from './routes/estadoRoutes';
import cidadeRoutes from './routes/cidadeRoutes';
import pessoaRoutes from './routes/pessoaRoutes';
import solicitanteRoutes from './routes/solicitanteRoutes';
import condutorRoutes from './routes/condutorRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/estado', estadoRoutes);
app.use('/cidade', cidadeRoutes);
app.use('/pessoa', pessoaRoutes);
app.use('/solicitante', solicitanteRoutes);
app.use('/condutor', condutorRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
