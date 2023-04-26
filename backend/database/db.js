// import mongoose from "mongoose";
// export const connection =async(username,password)=>{
//     const URL=`mongodb+srv://${username}:${password}@cluster0.lpwiemt.mongodb.net/?retryWrites=true&w=majority`;
//     try{
//         await mongoose.connect(URL,{
//          useunifiedTopology:true,
//          useNewURLParser: true
//         })
//         console.log("Database connected successfully");
//         }
//         catch(error){
//          console.log("Error while connecting with database" , error.message);
//         }
//     }
//      export default connection;

// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// // require = require('esm')(module);
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoURI = process.env.URI;

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));
};

export default connectToMongo;
