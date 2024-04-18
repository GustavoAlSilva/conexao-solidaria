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
    UF: Yup.string().required('UF é obrigatória'),
    nome: Yup.string().required('Nome é obrigatório')
});

const EstadoForm = () => (
    <div className="vh-100 d-flex">
        <Container>
            <Card className="custom-card-top-margin">
                <CardHeader className="text-center">Cadastro de Estado</CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{
                            UF: '',
                            nome: ''
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
                                    <Label for="UF">UF</Label>
                                    <Input
                                        tag={Field}
                                        name="UF"
                                        type="text"
                                        className="form-control"
                                        invalid={touched.UF && !!errors.UF}
                                        valid={touched.UF && !errors.UF}
                                    />
                                    <FormFeedback>{errors.UF}</FormFeedback>
                                    <FormText>Insira a UF do estado.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="nome">Nome</Label>
                                    <Input
                                        tag={Field}
                                        name="nome"
                                        type="text"
                                        className="form-control"
                                        invalid={touched.nome && !!errors.nome}
                                        valid={touched.nome && !errors.nome}
                                    />
                                    <FormFeedback>{errors.nome}</FormFeedback>
                                    <FormText>Insira o nome do estado.</FormText>
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

export default EstadoForm;
