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

const validationSchema = Yup.object({
    nome: Yup.string().required('O nome é obrigatório'),
    id_pessoa: Yup.string().required('O ID da pessoa é obrigatório'),
    id_alimento: Yup.string().required('O ID do alimento é obrigatório'),
    descricao: Yup.string()
});

const CadastroDepositoForm = () => (
    <div className="vh-100 d-flex align-items-center justify-content-center">
        <Container>
            <Card>
                <CardHeader className="text-center">Cadastro de Depósito</CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{ nome: '', id_pessoa: '', id_alimento: '', descricao: '' }}
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
                                    <Label for="nome">Nome</Label>
                                    <Input
                                        tag={Field}
                                        name="nome"
                                        type="text"
                                        invalid={touched.nome && !!errors.nome}
                                        valid={touched.nome && !errors.nome}
                                    />
                                    <FormFeedback>{errors.nome}</FormFeedback>
                                    <FormText>Insira o nome do depósito.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="id_pessoa">ID da Pessoa</Label>
                                    <Input
                                        tag={Field}
                                        name="id_pessoa"
                                        type="text"
                                        invalid={touched.id_pessoa && !!errors.id_pessoa}
                                        valid={touched.id_pessoa && !errors.id_pessoa}
                                    />
                                    <FormFeedback>{errors.id_pessoa}</FormFeedback>
                                    <FormText>Insira o ID da pessoa relacionada ao depósito.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="id_alimento">ID do Alimento</Label>
                                    <Input
                                        tag={Field}
                                        name="id_alimento"
                                        type="text"
                                        invalid={touched.id_alimento && !!errors.id_alimento}
                                        valid={touched.id_alimento && !errors.id_alimento}
                                    />
                                    <FormFeedback>{errors.id_alimento}</FormFeedback>
                                    <FormText>Insira o ID do alimento relacionado ao depósito.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="descricao">Descrição</Label>
                                    <Input
                                        tag={Field}
                                        name="descricao"
                                        type="textarea"
                                        invalid={touched.descricao && !!errors.descricao}
                                        valid={touched.descricao && !errors.descricao}
                                    />
                                    <FormFeedback>{errors.descricao}</FormFeedback>
                                    <FormText>Insira uma descrição para o depósito.</FormText>
                                </FormGroup>
                                <Button type="submit" disabled={isValidating}>
                                    Cadastrar Depósito
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </CardBody>
            </Card>
        </Container>
    </div>
);

export default CadastroDepositoForm;
