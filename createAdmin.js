import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "./model/User.js";


dotenv.config();


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected");
    createAdmin();
})
.catch((err)=>{
    console.log(err);
});


const createAdmin = async()=>{

    try{

        const existingAdmin = await User.findOne({
            email:"admin@toyverse.com"
        });


        if(existingAdmin){
            console.log("Admin already exists");
            process.exit();
        }


        const hashedPassword = await bcrypt.hash(
            "admin123",
            10
        );


        const admin = await User.create({

            name:"ToyVerse Admin",

            email:"admin@toyverse.com",

            password:hashedPassword,

            role:"admin"

        });


        console.log("Admin created successfully");
        console.log(admin);


        process.exit();


    }
    catch(error){

        console.log(error);
        process.exit();

    }

};