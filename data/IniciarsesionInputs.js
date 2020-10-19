import * as Yup from "yup";

const IniciarseionInputs=[
   {label:'Correo*', labelcolor:'#fff', type:'email',name:'emailId'},
   {label:'Contraseña* ', labelcolor:'#fff', type:'password',name:'Password'},
];

const IniciarinitialValues={
   emailId:'',
   Password:'',
};

const IniciarvalidationSchema = Yup.object({
   emailId: Yup.string().email('Invalid email format').required('Correo invalido'),
   Password: Yup.string().required('Password Required')
});

export {IniciarseionInputs,IniciarinitialValues,IniciarvalidationSchema};