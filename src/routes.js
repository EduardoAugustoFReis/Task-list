import {Router} from "express";
import User from "./app/models/User";

const routes = Router();

routes.get("/teste", async (req, res) =>{
  
  const user = await User.create({
    name: "Eduardo",
    email: "eduardo@email.com",
    password_hash: "123"
  });

  res.json(user);
})

export default routes;