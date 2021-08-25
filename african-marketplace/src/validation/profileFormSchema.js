import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const profileFormSchema = yup.object().shape({
    
    sellerName: yup
        .string()
        .trim()
        .required('Name is required'),
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
        .matches(phoneRegExp, 'Must be a valid phone number')
        .required('Phone Number is required')
        .max(10, 'Must be a valid phone number'),
    address: yup
        .string()
        .required('Address is required'),
    password: yup 
        .string()
        .required('Password is required')
})




export default profileFormSchema
