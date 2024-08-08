// import { NextFunction, Request, Response } from "express";
// import { getUserByIdService } from "../services/usersService";

// const auth = async (req: Request, res: Response, next: NextFunction) => {
//     const userIdHeader = req.headers['userid'];
//     const { id } = req.params;
//     if (!userIdHeader) {
//         return res.status(400).json({ message: "ERROR. Se requiere el ID del usuario en el encabezado." });
//     }
//     try {
//         const user = await getUserByIdService(parseInt(id));
//         if (user && user.id.toString() === userIdHeader) {
//             next();
//         } else {
//             res.status(401).json({ message: "ERROR. No estás autorizado" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: `Error en la autenticación: ${error}` });
//     }
// };

// export default auth;