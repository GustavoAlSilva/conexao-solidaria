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
    id_solicitante: Yup.number().required('ID do solicitante é obrigatório'),
    id_alimento: Yup.number().required('ID do alimento é obrigatório'),
    id_condutor: Yup.number().required('ID do condutor é obrigatório'),
    id_estoque_alimento: Yup.number().required('ID do estoque de alimento é obrigatório'),
    peso: Yup.number().required('Peso é obrigatório')
});

const DoacaoAlimentoForm = () => (
    <div className="vh-100 d-flex">
        <Container>
            <Card className="custom-card-top-margin">
                <CardHeader className="text-center">Cadastro de Doação de Alimento</CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{
                            id_solicitante: '',
                            id_alimento: '',
                            id_condutor: '',
                            id_estoque_alimento: '',
                            peso: ''
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
                                    <Label for="id_solicitante">ID do Solicitante</Label>
                                    <Input
                                        tag={Field}
                                        name="id_solicitante"
                                        type="number"
                                        className="form-control"
                                        invalid={touched.id_solicitante && !!errors.id_solicitante}
                                        valid={touched.id_solicitante && !errors.id_solicitante}
                                    />
                                    <FormFeedback>{errors.id_solicitante}</FormFeedback>
                                    <FormText>Insira o ID do solicitante da doação.</FormText>
                                </FormGroup>
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
                                    <FormText>Insira o ID do alimento da doação.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="id_condutor">ID do Condutor</Label>
                                    <Input
                                        tag={Field}
                                        name="id_condutor"
                                        type="number"
                                        className="form-control"
                                        invalid={touched.id_condutor && !!errors.id_condutor}
                                        valid={touched.id_condutor && !errors.id_condutor}
                                    />
                                    <FormFeedback>{errors.id_condutor}</FormFeedback>
                                    <FormText>Insira o ID do condutor da doação.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="id_estoque_alimento">ID do Estoque de Alimento</Label>
                                    <Input
                                        tag={Field}
                                        name="id_estoque_alimento"
                                        type="number"
                                        className="form-control"
                                        invalid={touched.id_estoque_alimento && !!errors.id_estoque_alimento}
                                        valid={touched.id_estoque_alimento && !errors.id_estoque_alimento}
                                    />
                                    <FormFeedback>{errors.id_estoque_alimento}</FormFeedback>
                                    <FormText>Insira o ID do estoque de alimento da doação.</FormText>
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
                                    <FormText>Insira o peso da doação de alimento.</FormText>
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

export default DoacaoAlimentoForm;
