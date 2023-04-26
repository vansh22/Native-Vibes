import User from "../model/User.js";
import Owner from "../model/owner-schema.js";
export const userSignUp = async (request, response) => {
  try {
    const exist= await User.findOne({username:request.body.username});
    if(exist){
        return response.status(401).json({message:'Username already exist'});
    }
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
export const userLogin = async(request,response)=>{
  try{
const username= request.body.username;
const password=request.body.password;
let user=await User.findOne({username:username, password:password});
if(user){
  return response.status(200).json({data:user})
}
else{
  return response.status(401).json('Invalid login')
}
  }
  catch(error){
      response.status(500).json('Error', error.message)
  }
}
export const ownerSignUp = async (request, response) => {
  try {
    const exist= await Owner.findOne({username:request.body.username});
    if(exist){
        return response.status(401).json({message:'Username already exist'});
    }
    const owner = request.body;
    const newOwner = new Owner(owner);
    await newOwner.save();
    response.status(200).json({ message: owner });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
export const ownerLogin = async(request,response)=>{
  try{
const username= request.body.username;
const password=request.body.password;
let owner=await Owner.findOne({username:username, password:password});
if(owner){
  return response.status(200).json({data:owner})
}
else{
  return response.status(401).json('Invalid login')
}
  }
  catch(error){
      response.status(500).json('Error', error.message)
  }
}
