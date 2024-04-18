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
    UF_estado: Yup.string().required('UF do estado é obrigatória'),
    nome: Yup.string().required('Nome da cidade é obrigatório')
});

const CidadeForm = () => (
    <div className="vh-100 d-flex">
        <Container>
            <Card className="custom-card-top-margin">
                <CardHeader className="text-center">Cadastro de Cidade</CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{
                            UF_estado: '',
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
                                    <Label for="UF_estado">UF do Estado</Label>
                                    <Input
                                        tag={Field}
                                        name="UF_estado"
                                        type="text"
                                        className="form-control"
                                        invalid={touched.UF_estado && !!errors.UF_estado}
                                        valid={touched.UF_estado && !errors.UF_estado}
                                    />
                                    <FormFeedback>{errors.UF_estado}</FormFeedback>
                                    <FormText>Insira a UF do estado ao qual a cidade pertence.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="nome">Nome da Cidade</Label>
                                    <Input
                                        tag={Field}
                                        name="nome"
                                        type="text"
                                        className="form-control"
                                        invalid={touched.nome && !!errors.nome}
                                        valid={touched.nome && !errors.nome}
                                    />
                                    <FormFeedback>{errors.nome}</FormFeedback>
                                    <FormText>Insira o nome da cidade.</FormText>
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

export default CidadeForm;
