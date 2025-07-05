const Donation=require("../models/Donation");
exports.createDonation=async(req,res)=>{
    try{
        const{title,description,userId,category,coordinates}=req.body;
        const donation=await Donation.create({
            title,
            description,
            userId,
            category,
            location:{
                type:"Point",
                coordinates:coordinates
            }
        });
        res.status(201).json(donation);

    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};
exports.getDonations=async(req,res)=>{
    try{
        const donations=await Donation.find({userId:req.query.userId});
        re.status(200).json(donations);
    }
    catch(err){
       res.status(500).json({error:err.message});
    }
};