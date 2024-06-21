
const mongoose = require('mongoose');

const dbConn = async(username, password)=>{
    
    const URL = `mongodb+srv://${username}:${password}@blog-application.e7mgxxr.mongodb.net/?retryWrites=true&w=majority&appName=blog-application`
    try{
       await mongoose.connect(URL);
       console.log("DataBase Connected...... ");
    }
    catch(error){
        console.log("Error Occurred  in connecting Database " , error.message);
    }
}

module.exports = dbConn ;