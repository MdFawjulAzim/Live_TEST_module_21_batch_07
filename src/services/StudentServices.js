const StudentModel = require("../models/StudentModel.js");

const CreateStudentService=async(req)=>{
    try{
        let reqBody = req.body;
        let Data = await StudentModel.create(reqBody);
        return {status: "success",message: "Create a student successfully", data: Data};
    }catch(e){
        return {status: "error", message:e.toString()}
    }
}

//SingleReadStudentService
const SingleReadStudentService = async(req)=>{
    try{
        let user_id = req.params.user_id;
        let result = await StudentModel.findOne({_id:user_id});
        return {status:"success", message: "Read the data of a single student successfully", data:result}
    }catch (e) {
        return { status: "fail", message: `Something went wrong: ${e.message}` };
    }
}

//SingleStudentDeleteService
const SingleStudentDeleteService = async(req)=>{
    try{
        let user_id = req.params.user_id;

        const user = await StudentModel.findByIdAndDelete(user_id);
        return {status:"success", message: "Delete a student based on a specific ID successfully"} 
    }catch (e) {
        return { status: "fail", message: `Something went wrong: ${e.message}` };
    }
}

//SingleStudentUpdateService
const SingleStudentUpdateService = async(req)=>{
    try{
        let user_id = req.params.user_id;
        let reqBody = req.body;

        await StudentModel.updateOne({_id:user_id},{$set:reqBody});
        return {status:"success", message: "Update a student based on a specific ID successfully"}

        
    }catch (e) {
        return { status: "fail", message: `Something went wrong: ${e.message}` };
    }
}


module.exports = {
    CreateStudentService,
    SingleReadStudentService,
    SingleStudentDeleteService,
    SingleStudentUpdateService

}