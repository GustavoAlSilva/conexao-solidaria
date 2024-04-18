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
    ID_PESSOA: Yup.number().required('ID da pessoa é obrigatório'),
    quantidade_dependentes: Yup.number().required('Quantidade de dependentes é obrigatória')
});

const SolicitanteForm = () => (
    <div className="vh-100 d-flex">
        <Container>
            <Card className="custom-card-top-margin">
                <CardHeader className="text-center">Cadastro de Solicitante</CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{
                            ID_PESSOA: '',
                            quantidade_dependentes: ''
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
                                    <Label for="ID_PESSOA">ID da Pessoa</Label>
                                    <Input
                                        tag={Field}
                                        name="ID_PESSOA"
                                        type="number"
                                        className="form-control"
                                        invalid={touched.ID_PESSOA && !!errors.ID_PESSOA}
                                        valid={touched.ID_PESSOA && !errors.ID_PESSOA}
                                    />
                                    <FormFeedback>{errors.ID_PESSOA}</FormFeedback>
                                    <FormText>Insira o ID da pessoa relacionada ao solicitante.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="quantidade_dependentes">Quantidade de Dependentes</Label>
                                    <Input
                                        tag={Field}
                                        name="quantidade_dependentes"
                                        type="number"
                                        className="form-control"
                                        invalid={touched.quantidade_dependentes && !!errors.quantidade_dependentes}
                                        valid={touched.quantidade_dependentes && !errors.quantidade_dependentes}
                                    />
                                    <FormFeedback>{errors.quantidade_dependentes}</FormFeedback>
                                    <FormText>Insira a quantidade de dependentes do solicitante.</FormText>
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

export default SolicitanteForm;
