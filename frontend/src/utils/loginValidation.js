import * as yup from "yup"

export const loginValidationSchema = yup.object().shape({
    email: yup.string().required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatório'),
})