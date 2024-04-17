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

function validateCPF(cpf) {

    return cpf.length === 11;
}

const validationSchema = Yup.object({
    cpf: Yup.string()
        .test('valid-cpf', 'CPF inválido', value => validateCPF(value || ''))
        .required('CPF é obrigatório'),
    name: Yup.string()
        .required('Nome é obrigatório'),
    lastName: Yup.string()
        .required('Sobrenome é obrigatório'),
    dateOfBirth: Yup.date()
        .required('Data de nascimento é obrigatória')
        .max(new Date(), 'Data de nascimento não pode ser no futuro'),
    cityId: Yup.number()
        .integer('ID da cidade deve ser um número inteiro')
        .required('ID da cidade é obrigatório'),
    neighborhood: Yup.string()
        .required('Bairro é obrigatório'),
    cep: Yup.string()
        .matches(/^\d{5}-?\d{3}$/, 'CEP deve seguir o formato 00000-000')
        .required('CEP é obrigatório'),
    street: Yup.string()
        .required('Logradouro é obrigatório'),
    homeNumber: Yup.number()
        .integer('Número residencial deve ser um número')
        .required('Número residencial é obrigatório'),
    ddd: Yup.string()
        .matches(/^\d{2}$/, 'DDD deve ter 2 dígitos')
        .required('DDD é obrigatório'),
    phoneNumber: Yup.string()
        .matches(/^\d{8,9}$/, 'Telefone deve ter entre 8 e 9 dígitos')
        .required('Telefone é obrigatório')
});

const PessoaForm = () => (
    <div className="vh-100 d-flex">
        <Container>
            <Card className="custom-card-top-margin">
                <CardHeader className="text-center">Cadastro de Pessoa</CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{
                            cpf: '',
                            name: '',
                            lastName: '',
                            dateOfBirth: '',
                            cityId: '',
                            neighborhood: '',
                            cep: '',
                            street: '',
                            homeNumber: '',
                            ddd: '',
                            phoneNumber: ''
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
                                    <Label for="cpf">CPF</Label>
                                    <Input
                                        tag={Field}
                                        name="cpf"
                                        type="cpf"
                                        invalid={touched.cpf && !!errors.cpf}
                                        valid={touched.cpf && !errors.cpf}
                                    />
                                    <FormFeedback>{errors.cpf}</FormFeedback>
                                    <FormText>Insira o seu CPF.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">Nome</Label>
                                    <Input
                                        tag={Field}
                                        name="name"
                                        type="name"
                                        invalid={touched.name && !!errors.name}
                                        valid={touched.name && !errors.name}
                                    />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                    <FormText>Insira o seu nome.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastName">Sobrenome</Label>
                                    <Input
                                        tag={Field}
                                        name="lastName"
                                        type="lastName"
                                        invalid={touched.lastName && !!errors.lastName}
                                        valid={touched.lastName && !errors.lastName}
                                    />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                    <FormText>Insira o seu sobrenome.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="dateOfBirth">Data de Nascimento</Label>
                                    <Input
                                        tag={Field}
                                        name="dateOfBirth"
                                        type="dateOfBirth"
                                        invalid={touched.dateOfBirth && !!errors.dateOfBirth}
                                        valid={touched.dateOfBirth && !errors.dateOfBirth}
                                    />
                                    <FormFeedback>{errors.dateOfBirth}</FormFeedback>
                                    <FormText>Insira a sua data de nascimento.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="cityId">Cidade</Label>
                                    <Input
                                        tag={Field}
                                        name="cityId"
                                        type="cityId"
                                        invalid={touched.cityId && !!errors.cityId}
                                        valid={touched.cityId && !errors.cityId}
                                    />
                                    <FormFeedback>{errors.cityId}</FormFeedback>
                                    <FormText>Insira o ID da sua cidade.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="neighborhood">Bairro</Label>
                                    <Input
                                        tag={Field}
                                        name="neighborhood"
                                        type="neighborhood"
                                        invalid={touched.neighborhood && !!errors.neighborhood}
                                        valid={touched.neighborhood && !errors.neighborhood}
                                    />
                                    <FormFeedback>{errors.neighborhood}</FormFeedback>
                                    <FormText>Insira o nome do seu bairro.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="cep">CEP</Label>
                                    <Input
                                        tag={Field}
                                        name="cep"
                                        type="cep"
                                        invalid={touched.cep && !!errors.cep}
                                        valid={touched.cep && !errors.cep}
                                    />
                                    <FormFeedback>{errors.cep}</FormFeedback>
                                    <FormText>Insira o seu CEP.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="street">Logradouro</Label>
                                    <Input
                                        tag={Field}
                                        name="street"
                                        type="street"
                                        invalid={touched.street && !!errors.street}
                                        valid={touched.street && !errors.street}
                                    />
                                    <FormFeedback>{errors.street}</FormFeedback>
                                    <FormText>Insira o nome da sua rua.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="homeNumber">Número Residencial</Label>
                                    <Input
                                        tag={Field}
                                        name="homeNumber"
                                        type="homeNumber"
                                        invalid={touched.homeNumber && !!errors.homeNumber}
                                        valid={touched.homeNumber && !errors.homeNumber}
                                    />
                                    <FormFeedback>{errors.homeNumber}</FormFeedback>
                                    <FormText>Insira o número da sua casa.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="ddd">DDD</Label>
                                    <Input
                                        tag={Field}
                                        name="ddd"
                                        type="ddd"
                                        invalid={touched.ddd && !!errors.ddd}
                                        valid={touched.ddd && !errors.ddd}
                                    />
                                    <FormFeedback>{errors.ddd}</FormFeedback>
                                    <FormText>Insira o DDD do seu número de telefone.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phoneNumber">Telefone</Label>
                                    <Input
                                        tag={Field}
                                        name="phoneNumber"
                                        type="phoneNumber"
                                        invalid={touched.phoneNumber && !!errors.phoneNumber}
                                        valid={touched.phoneNumber && !errors.phoneNumber}
                                    />
                                    <FormFeedback>{errors.phoneNumber}</FormFeedback>
                                    <FormText>Insira o seu número de telefone.</FormText>
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

export default PessoaForm;
