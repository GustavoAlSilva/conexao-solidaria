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
    id_alimento: Yup.number().required('ID do alimento é obrigatório'),
    data_validade: Yup.date().required('Data de validade é obrigatória'),
    peso: Yup.number().required('Peso é obrigatório'),
    id_deposito: Yup.number().required('ID do depósito é obrigatório')
});

const EstoqueAlimentoForm = () => (
    <div className="vh-100 d-flex">
        <Container>
            <Card className="custom-card-top-margin">
                <CardHeader className="text-center">Cadastro de Estoque de Alimento</CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{
                            id_alimento: '',
                            data_validade: '',
                            peso: '',
                            id_deposito: ''
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
                                    <Label for="id_alimento">ID do Alimento</Label>
                                    <Input
                                        tag={Field}
                                        name="id_alimento"
                                        type="number"
                                        className="form-control"
                                        invalid={touched.id_alimento && !!errors.id_alimento}
                                        valid={touched.id_alimento && !errors.id_alimento}
                                    />
                                    <FormFeedback>{errors.id_alimento}</FormFeedback>
                                    <FormText>Insira o ID do alimento.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="data_validade">Data de Validade</Label>
                                    <Input
                                        tag={Field}
                                        name="data_validade"
                                        type="date"
                                        className="form-control"
                                        invalid={touched.data_validade && !!errors.data_validade}
                                        valid={touched.data_validade && !errors.data_validade}
                                    />
                                    <FormFeedback>{errors.data_validade}</FormFeedback>
                                    <FormText>Insira a data de validade do alimento.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="peso">Peso</Label>
                                    <Input
                                        tag={Field}
                                        name="peso"
                                        type="number"
                                        className="form-control"
                                        invalid={touched.peso && !!errors.peso}
                                        valid={touched.peso && !errors.peso}
                                    />
                                    <FormFeedback>{errors.peso}</FormFeedback>
                                    <FormText>Insira o peso do alimento.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="id_deposito">ID do Depósito</Label>
                                    <Input
                                        tag={Field}
                                        name="id_deposito"
                                        type="number"
                                        className="form-control"
                                        invalid={touched.id_deposito && !!errors.id_deposito}
                                        valid={touched.id_deposito && !errors.id_deposito}
                                    />
                                    <FormFeedback>{errors.id_deposito}</FormFeedback>
                                    <FormText>Insira o ID do depósito onde o alimento está armazenado.</FormText>
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

export default EstoqueAlimentoForm;
