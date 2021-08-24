import * as yup from 'yup'

const profileFormSchema = yup.object().shape({
    sellerName: yup
        .string()
        .trim()
        .required(),
    username: yup   
        .string()
        .trim()
        .required('Username is required')
        .min(2,'must be at least 2 characters'),
    email: yup
        .string()
        .email()
        .required('Email is required'),    
    phoneNumber: yup
        .string()
        .required('Phone Number is required'),
    address: yup
        .string()
        .required('Address is required'),
    password: yup 
        .string()
        .required('Password is required')
})




export default profileFormSchema
