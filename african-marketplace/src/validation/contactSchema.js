import * as yup from 'yup'

const contactSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required(),
    email: yup
        .string()
        .trim()
        .required(),
    comment: yup
        .string()
        .trim()
        .required()
})

export default contactSchema