const {CreateStudentService,SingleReadStudentService,SingleStudentDeleteService,SingleStudentUpdateService} = require('../services/StudentServices.js');

//CreateStudent 
exports.CreateStudent = async(req,res)=>{
    let result = await CreateStudentService(req) ;
    return res.status(200).json(result);
}

//SingleReadStudent
exports.SingleReadStudent = async(req,res)=>{
    let result = await SingleReadStudentService(req);
    return res.status(200).json(result);
}

//SingleUserDelete
exports.SingleStudentDelete = async(req,res)=>{
    let result = await SingleStudentDeleteService(req);
    return res.status(200).json(result);
}

//SingleStudentUpdate
exports.SingleStudentUpdate = async(req,res)=>{
    let result = await SingleStudentUpdateService(req);
    return res.status(200).json(result);
}

