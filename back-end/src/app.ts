import express from 'express';
import bodyParser from 'body-parser';
import estadoRoutes from './routes/estadoRoutes';
import cidadeRoutes from './routes/cidadeRoutes';
import pessoaRoutes from './routes/pessoaRoutes';
import solicitanteRoutes from './routes/solicitanteRoutes';
import condutorRoutes from './routes/condutorRoutes';
import depositoRoutes from './routes/depositoRoutes';
import alimentoRoutes from './routes/alimentoRoutes';
import arrecadacaoAlimentoRoutes from './routes/arrecadacaoAlimentoRoutes';
import estoqueAlimentoRoutes from './routes/estoqueAlimentoRoutes';
import doacaoAlimentoRoutes from './routes/doacaoAlimentoRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/estado', estadoRoutes);
app.use('/cidade', cidadeRoutes);
app.use('/pessoa', pessoaRoutes);
app.use('/solicitante', solicitanteRoutes);
app.use('/condutor', condutorRoutes);
app.use('/deposito', depositoRoutes);
app.use('/alimento', alimentoRoutes);
app.use('/arrecadacaoAlimento', arrecadacaoAlimentoRoutes);
app.use('/estoqueAlimento', estoqueAlimentoRoutes);
app.use('/doacaoAlimento', doacaoAlimentoRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
