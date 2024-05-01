import User from "../models/User";

class UserController{

  async store(req, res){

    const checkUserExists = await User.findOne({
      where: {email: req.body.email}
    })

    if(checkUserExists){
      return res.status(400).json({error: "Esse usuário já existe"});
    }

    const {id, name, email} = await User.create(req.body);

    return res.json({id, name, email});
  }
}

export default new UserController();