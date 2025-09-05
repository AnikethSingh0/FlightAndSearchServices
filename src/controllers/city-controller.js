const  {cityservice} = require('../services/index')

const create = async(req,res)=>{
    try{
        const city=await cityservice.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "Successfully created a city",
            err:{}
    })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Unsuccessfully creation of city",
            error:err
        })
    }
    
}
const destroy = async(req,res)=>{
    try{
        const city= await cityservice.deleteCity(req.params.id);
        return res.status(201).json({
            data : city,
            success : true,
            message : "Successfully deletion of a city",
            err:{}
    })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Unsuccessfully deletion of city",
            error:err
        })
    }
}
const get = async(req,res)=>{
    try{
        const city= await cityservice.getCity(req.params.id);
        return res.status(201).json({
            data : city,
            success : true,
            message : "Successfully get of a city",
            err:{}
    })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Unsuccessfully get of city",
            error:err
        })
    }
}
const update =async(req,res)=>{
     try{
        const city= await cityservice.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "Successfully update of a city",
            err:{}
    })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Unsuccessfully upadte of city",
            error:err
        })
    }
}
module.exports={
    create,
    destroy,
    get,
    update
}