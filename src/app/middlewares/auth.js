import jwt from "jsonwebtoken";
import {promisify} from "util";
import authConfig from "../../config/auth";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(401).json({error: "Token não existe."});
  }

  const [, token] = authHeader.split(" ");
  
  try {
   // decoded possui o id do usuário logado pelo token na parte do payload    
   const decoded = await promisify(jwt.verify)(token, authConfig.secret);

   // criando uma variável dentro do req que recebe o id do usuário logado 
   req.userId = decoded.id; 

  return next();

  }catch (error) {
    return res.status(401).json({error: "Token inválido."});
  }

}