// import mongoose from 'mongoose';
// const userSchema = new mongoose.Schema({
//     firstname:{
//         type:String,
//         required:true,
//         trim: true,
//         min:5,
//         max:20
//     },
//     lastname:{
//         type:String,
//         required:true,
//         trim: true,
//         min:5,
//         max:20
//     },
//     username:{
//         type:String,
//         required:true,
//         trim: true,
//         unique:true,
//         index:true,
//         lowercase:true
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         unique:true

//     },
//     password:{
//         type:String ,
//         required:true
//     },
//     phone:{
//         type:String,
//         required:true
//     }
// });
// const user=mongoose.model('user',userSchema);
// export default user;
import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("user", UserSchema);
export default User;