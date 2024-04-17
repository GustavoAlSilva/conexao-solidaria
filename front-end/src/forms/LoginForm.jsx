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
    email: Yup.string()
        .email('E-mail inválido')
        .required('O e-mail é obrigatório'),
    password: Yup.string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('A senha é obrigatória')
});

const LoginForm = () => (
    <div className="vh-100 d-flex align-items-center justify-content-center">
        <Container>
            <Card>
                <CardHeader className="text-center">Login</CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{ email: '', password: '' }}
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
                                    <Label for="email">E-Mail</Label>
                                    <Input
                                        tag={Field}
                                        name="email"
                                        type="email"
                                        invalid={touched.email && !!errors.email}
                                        valid={touched.email && !errors.email}
                                    />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                    <FormText>Insira o seu endereço de e-mail.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Senha</Label>
                                    <Input
                                        tag={Field}
                                        name="password"
                                        type="password"
                                        invalid={touched.password && !!errors.password}
                                        valid={touched.password && !errors.password}
                                    />
                                    <FormFeedback>{errors.password}</FormFeedback>
                                    <FormText>Insira a sua senha.</FormText>
                                </FormGroup>
                                <Button type="submit" disabled={isValidating}>
                                    Login
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </CardBody>
            </Card>
        </Container>
    </div>
);

export default LoginForm;
