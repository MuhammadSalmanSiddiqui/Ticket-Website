import * as Yup from "yup";

const CrearcuentaInputs=[
   {label:'Nombre*', labelcolor:'#2F2D51', type:'text',name:'firstName'},
   {label:'Apellido*', labelcolor:'#2F2D51', type:'text',name:'lastName'},
   {label:'Correo*', labelcolor:'#2F2D51', type:'email',name:'email'},
   {label:'Teléfono*', labelcolor:'#2F2D51', type:'text',name:'phone'},
   {label:'Contraseña* ', labelcolor:'#2F2D51', type:'password',name:'password'},
   {label:'Confirma contraseña*', labelcolor:'#2F2D51', type:'password',name:'passwordConfirmation'}
];

const initialValues={
   firstName:'',
   lastName:'',
   email:'',
   phone:'',
   password:'',
   passwordConfirmation:''
};

const validationSchema = Yup.object({
   firstName: Yup.string().required('First Name Required'),
   lastName: Yup.string().required(' Last Name Required'),
   email: Yup.string().email('Invalid email format').required('Correo invalido'),
   phone: Yup.number()
   .required('Phone number Required!'),
   password: Yup.string().required('Password Required'),
   passwordConfirmation: Yup.string()
   .oneOf([Yup.ref('password'),null], 'Confirm Password must match')
   .required('las contraseñas no coinciden ')
});

export {CrearcuentaInputs,initialValues,validationSchema};