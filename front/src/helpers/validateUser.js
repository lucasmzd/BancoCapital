const emailRegex = /\S+@\S+\.\S+/;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const passwordRegex = /^(?=.*[a-zA-z])(?=.*\d)(?=.*[!@$!%*&#&]).*$/;

const validateUser = ({
    name,
    username,
    password,
    confirmPassword,
    email,
    birthdate,
    nDni
}) => {
    const errors = {};

    //Validacion de name:
    if(!name) errors.name = 'El nombre es obligatorio.'
     else {
        if (name.length < 3) errors.name = 'El nombre debe tener al menos 3 caracteres.';
        if (name.length > 50) errors.name = 'El nombre no puede tener más de 50 caracteres.';
     }

    //Validacion de mail:
    if(!email) errors.email = 'El email es obligatorio.'
     else {
        if (!emailRegex.test(email)) errors.email = 'El email no es válido.';
     }

     //Validacion de birthdate:
     if(!birthdate) errors.birthdate = 'La fecha de nacimiento es obligatoria.'
     else {
        if (!dateRegex.test(birthdate)) errors.birthdate = 'La fecha de nacimiento debe estar en formato dd-mm-aaaa.';
        const today =new Date();
        today.setHours(0,0,0,0);
        const birthdateDate = new Date(birthdate);
        const ageDif =
            new Date (today.getTime() - birthdateDate.getTime());
        const age = ageDif.getUTCFullYear() - 1970;
        if (age < 18) errors.birthdate = 'Debe ser mayor de 18 años.';
     }

     //Validacion de nDni:
     if(!nDni) errors.nDni = 'El número de DNI es obligatorio.'
     else {
        if(isNaN(Number(nDni))) errors.nDni = "El número de DNI debe ser un número.";
        if(Number(nDni) < 0) errors.nDni = "El número de DNI no puede ser negativo.";
     }

     //Validacion de username:
     if(!username) errors.username = 'El nombre de usuario es obligatorio.'
     else {
        if (username.length < 3) errors.username = 'El nombre de usuario debe tener al menos 3 caracteres.';
        if (username.length > 16) errors.username = 'El nombre de usuario no puede tener más de 16 caracteres.';
     }

    //Validacion de password:
    if(!password) errors.password = 'La contraseña es obligatoria.'
    else {
        if (!passwordRegex.test(password)) errors.password = 'La contraseña debe tener al menos una letra, un número y un caracter especial (!@$!%*&#&).';
        if (password.length < 8) errors.password = 'La contraseña debe tener al menos 8 caracteres.';
        if (password.length > 16) errors.password = 'La contraseña no puede tener más de 16 caracteres.';
    }

    //Validacion de confirmPassword:
    if(password !== confirmPassword) errors.confirmPassword = 'La contraseña no coincide.';

    return errors;
}

export default validateUser;