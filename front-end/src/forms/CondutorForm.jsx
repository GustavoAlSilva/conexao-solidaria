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
    id_pessoa: Yup.number().required('ID da pessoa é obrigatório'),
    cnh: Yup.string().required('CNH é obrigatória')
});

const CondutorForm = () => (
    <div className="vh-100 d-flex">
        <Container>
            <Card className="custom-card-top-margin">
                <CardHeader className="text-center">Cadastro de Condutor</CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{
                            id_pessoa: '',
                            cnh: ''
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
                                    <Label for="id_pessoa">ID da Pessoa</Label>
                                    <Input
                                        tag={Field}
                                        name="id_pessoa"
                                        type="number"
                                        className="form-control"
                                        invalid={touched.id_pessoa && !!errors.id_pessoa}
                                        valid={touched.id_pessoa && !errors.id_pessoa}
                                    />
                                    <FormFeedback>{errors.id_pessoa}</FormFeedback>
                                    <FormText>Insira o ID da pessoa relacionada ao condutor.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="cnh">CNH</Label>
                                    <Input
                                        tag={Field}
                                        name="cnh"
                                        type="text"
                                        className="form-control"
                                        invalid={touched.cnh && !!errors.cnh}
                                        valid={touched.cnh && !errors.cnh}
                                    />
                                    <FormFeedback>{errors.cnh}</FormFeedback>
                                    <FormText>Insira o número da CNH do condutor.</FormText>
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

export default CondutorForm;
