
import mongoose from "mongoose";




const Connection = async ()=>{
    const URL = `mongodb+srv://inshorts:inshorts123@cluster0.uji4bun.mongodb.net/?retryWrites=true&w=majority`
    try{
     await   mongoose.connect(URL,{useNewUrlParser: true});
     console.log('Database Connected Successfully');
    }
    catch(error){
        console.log("Error while connecting with database",error);
    }
}
export default Connection;