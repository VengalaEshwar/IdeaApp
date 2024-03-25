//write the logic to create the controllerr for the ide resources

const ideas =require('../Models/ideas.models.js');

/**
 * 
 * create the controller for fetching the ideas
 * get localhost:4455/ideaApp/api/v1/ideas
 * 
 * return list of all idea
 */

exports.getAllIdeas = (req,res)=> {
    //Read all the ideas
    //Return the ideas
    res.status(200).send(ideas);
}
exports.getIdeaById = (req,res)=> {
    //Read all the ideas
    //Return the ideas
    let i=req.params.id;
    if(ideas[i])
    {res.status(200).send(ideas[i]);}
    else 
    {res.status(404).send({ err : "No data found"});}
}
exports.postIdea=(req,res) =>{
    let obj =req.body;
}