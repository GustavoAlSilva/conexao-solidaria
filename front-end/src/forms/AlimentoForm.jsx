import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
    FormGroup,
    Label,
    Input,
    FormFeedback,
    FormText,
    Container,
    Button,
    Card,
    CardHeader,
    CardBody
} from 'reactstrap';
import '../App.css';

const validationSchema = Yup.object({
    nome: Yup.string().required('Nome do alimento é obrigatório'),
    descricao: Yup.string().required('Descrição do alimento é obrigatória')
});

const AlimentoForm = () => (
    <div className="vh-100 d-flex">
        <Container>
            <Card className="custom-card-top-margin">
                <CardHeader className="text-center">Cadastro de Alimento</CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{
                            nome: '',
                            descricao: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ errors, touched, isValidating }) => (
                            <Form>
                                <FormGroup>
                                    <Label for="nome">Nome do Alimento</Label>
                                    <Input
                                        tag={Field}
                                        name="nome"
                                        type="text"
                                        className="form-control"
                                        invalid={touched.nome && !!errors.nome}
                                        valid={touched.nome && !errors.nome}
                                    />
                                    <FormFeedback>{errors.nome}</FormFeedback>
                                    <FormText>Insira o nome do alimento.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="descricao">Descrição do Alimento</Label>
                                    <Input
                                        tag={Field}
                                        name="descricao"
                                        type="text"
                                        className="form-control"
                                        invalid={touched.descricao && !!errors.descricao}
                                        valid={touched.descricao && !errors.descricao}
                                    />
                                    <FormFeedback>{errors.descricao}</FormFeedback>
                                    <FormText>Insira a descrição do alimento.</FormText>
                                </FormGroup>
                                <Button type="submit" disabled={isValidating}>
                                    Cadastrar
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </CardBody>
            </Card>
        </Container>
    </div>
);

export default AlimentoForm;
