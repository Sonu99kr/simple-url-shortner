const mongoose = require("mongoose");
mongoose.set("strictQuery", true)

async function connectToMongoDb(){
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI,{
        });
        console.log("MongoDb connected!");
    }
    catch (error){
        console.log("Database connection Error", error);
        process.exit(1);
    }
}

module.exports = {
    connectToMongoDb,
}