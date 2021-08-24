import * as yup from 'yup'

const profileFormSchema = yup.object().shape({
    sellerName: yup
        .string()
        .trim()
        .required('Name is required'),
    username: yup   
        .string()
        .trim()
        .required(''),
    email: yup
        .string()
        .email()
        .required(),    
    phoneNumber: yup
        .string()
        .required(),
    address: yup
        .string()
        .required(),
    password: yup 
        .string()
        .required()
})




export default profileFormSchema
