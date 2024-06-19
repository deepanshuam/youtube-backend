import dotenv from "dotenv";
import connectDB from "./Db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8080,()=>{
        console.log(`Server is running on port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
console.log("MONGO db connection failed !!!",err);
})

/*
(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
    } catch (error) {
        console.log(error);
        throw err
        
    }
})
    */
