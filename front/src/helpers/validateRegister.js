export const validateRegister =(input)=>{
    const errors={};
    const expresionRegularUsuario = /^[a-zA-Z0-9]{3,12}$/;
    const expresionRegularPassword = /^[a-zA-Z0-9]{8,20}$/;
    const expresionRegularCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const expresionRegularNombre = /^[a-zA-ZÀ-ÿ\s]{3,30}$/;
    const expresionRegularDNI = /^[0-9]{8,9}$/;
    const expresionRegularDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

    if (!expresionRegularNombre.test(input.name)) {
         errors.name = 'El nombre es incorrecto';
    }
    if (!expresionRegularCorreo.test(input.email)) {
         errors.email = 'El email es incorrecto';
    }
    if (!expresionRegularDate.test(input.birthdate)) {
         errors.birthdate = 'La fecha es incorrecta';
    }
    if (input.nDni !== undefined && !expresionRegularDNI.test(input.nDni.toString())) {
         errors.nDni = 'El DNI es incorrecto';
    }
    if (!expresionRegularUsuario.test(input.username)) {
         errors.username = 'El usuario es incorrecto';
    }
    if (!expresionRegularPassword.test(input.password)) {
         errors.password = 'La contraseña es incorrecta';
    }
    
    return errors;
}