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
    foodId: Yup.number()
        .integer('ID do alimento deve ser um número inteiro')
        .required('ID do alimento é obrigatório'),
    expirationDate: Yup.date()
        .required('Data de validade é obrigatória')
        .min(new Date(), 'Data de validade não pode ser no passado'),
    weight: Yup.number()
        .required('Peso do alimento é obrigatório')
        .min(0.1, 'Peso deve ser maior que zero')
        .typeError('Peso deve ser um número'),
    conductorId: Yup.number()
        .integer('ID do condutor deve ser um número inteiro')
        .required('ID do condutor é obrigatório'),
    depositId: Yup.number()
        .integer('ID do depósito deve ser um número inteiro')
        .required('ID do depósito é obrigatório')
});

const ArrecadacaoAlimentoForm = () => (
    <div className="vh-100 d-flex">
        <Container>
            <Card className="custom-card-top-margin">
                <CardHeader className="text-center">Doar Alimento</CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{
                            foodId: '',
                            expirationDate: '',
                            weight: '',
                            conductorId: '',
                            depositId: ''
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
                                    <Label for="foodId">Alimento</Label>
                                    <Input
                                        tag={Field}
                                        name="foodId"
                                        type="foodId"
                                        invalid={touched.foodId && !!errors.foodId}
                                        valid={touched.foodId && !errors.foodId}
                                    />
                                    <FormFeedback>{errors.foodId}</FormFeedback>
                                    <FormText>Insira o ID do alimento.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="expirationDate">Data de Validade</Label>
                                    <Input
                                        tag={Field}
                                        name="expirationDate"
                                        type="expirationDate"
                                        invalid={touched.expirationDate && !!errors.expirationDate}
                                        valid={touched.expirationDate && !errors.expirationDate}
                                    />
                                    <FormFeedback>{errors.expirationDate}</FormFeedback>
                                    <FormText>Insira a data de validade.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="weight">Peso</Label>
                                    <Input
                                        tag={Field}
                                        name="weight"
                                        type="weight"
                                        invalid={touched.weight && !!errors.weight}
                                        valid={touched.weight && !errors.weight}
                                    />
                                    <FormFeedback>{errors.weight}</FormFeedback>
                                    <FormText>Insira o peso do alimento.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="conductorId">Condutor</Label>
                                    <Input
                                        tag={Field}
                                        name="conductorId"
                                        type="conductorId"
                                        invalid={touched.conductorId && !!errors.conductorId}
                                        valid={touched.conductorId && !errors.conductorId}
                                    />
                                    <FormFeedback>{errors.conductorId}</FormFeedback>
                                    <FormText>Insira o ID do condutor.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="depositId">Depósito</Label>
                                    <Input
                                        tag={Field}
                                        name="depositId"
                                        type="depositId"
                                        invalid={touched.depositId && !!errors.depositId}
                                        valid={touched.depositId && !errors.depositId}
                                    />
                                    <FormFeedback>{errors.depositId}</FormFeedback>
                                    <FormText>Insira o ID do depósito.</FormText>
                                </FormGroup>
                                <Button type="submit" disabled={isValidating}>
                                    Doar
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </CardBody>
            </Card>
        </Container>
    </div>
);

export default ArrecadacaoAlimentoForm;
