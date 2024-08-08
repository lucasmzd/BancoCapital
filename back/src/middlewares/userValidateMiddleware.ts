import { NextFunction, Request, Response } from "express";
import UserDto from "../dto/UserDto";

const userValidate = (req: Request<{}, {}, UserDto>, res: Response, next: NextFunction) => {
  const { name, email, birthdate, nDni, username, password } = req.body;
  try {
    if (!name) throw new Error("Nombre es obligatorio");
    if (typeof name !== "string") throw new Error("Nombre debe ser string");
    if (name.length < 3)
      throw new Error("Nombre debe tener al menos 3 caracteres");
    if (name.length > 50)
      throw new Error("Nombre no puede tener más de 50 caracteres");

    if (!email) throw new Error("Email es obligatorio");
    if (typeof email !== "string") throw new Error("Email debe ser string");

    if (!birthdate) throw new Error("Fecha de nacimiento es obligatoria");
    if (typeof birthdate !== "string")
      throw new Error("Fecha de nacimiento debe ser string");
    const today = new Date();
    const birth = new Date(birthdate);
    const age = today.getFullYear() - birth.getFullYear();
    if (age < 18) throw new Error("Debe ser mayor de 18 años");

    if (!nDni) throw new Error("DNI es obligatorio");
    if (typeof nDni !== "number") throw new Error("DNI debe ser number");
    if (nDni.toString().length !== 8)
      throw new Error("DNI debe tener 8 digitos");
    if (nDni.toString().length > 8)
      throw new Error("DNI no puede tener mas de 8 digitos");

    if (!username) throw new Error("Username es obligatorio");
    if (typeof username !== "string")
      throw new Error("Username debe ser string");
    if (username.length < 3)
      throw new Error("Username debe tener al menos 3 caracteres");
    if (username.length > 25)
      throw new Error("Username no puede tener más de 25 caracteres");

    if (!password) throw new Error("Password es obligatorio");
    if (typeof password !== "string")
      throw new Error("Password debe ser string");
    if (password.length < 8)
      throw new Error("Password debe tener al menos 8 caracteres");
    if (password.length > 25)
      throw new Error("Password no puede tener más de 25 caracteres");
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
  }
  next();
};

export default userValidate;
