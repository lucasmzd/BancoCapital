export const validateLogin =(input)=>{
    const errors={};
    const expresionRegularUsuario = /^[a-zA-Z0-9]{3,20}$/;
    const expresionRegularPassword = /^[a-zA-Z0-9]{5,20}$/;
    if (!expresionRegularUsuario.test(input.username)) {
        errors.username = true;
    }
    if (!expresionRegularPassword.test(input.password)) {
        errors.password = true;
    }
    
    return errors;
}