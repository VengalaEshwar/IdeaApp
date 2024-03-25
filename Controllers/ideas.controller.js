//write the logic to create the controllerr for the ide resources

const ideas = require('../Models/ideas.models.js');

/**
 * 
 * create the controller for fetching the ideas
 * get localhost:4455/ideaApp/api/v1/ideas
 * 
 * return list of all idea
 */

exports.getAllIdeas = (req, res) => {
    //Read all the ideas
    //Return the ideas
    res.status(200).send(ideas);
}
exports.getIdeaById = (req, res) => {
    //Read all the ideas
    //Return the ideas
    let i = req.params.id;
    if (ideas[i]) { res.status(200).send(ideas[i]); }
    else { res.status(404).send({ err: "No data found" }); }
}
let id = 4;
exports.postIdea = (req, res) => {
    let obj = req.body;
    id++;
    obj["id"] = id;
    ideas[id] = obj;
    res.send(ideas[id]);
}

exports.putIdea = (req, res) => {
    let obj = req.body;
    let id=req.params.id;
    if (ideas[id]) {
        ideas[id] = obj;
        res.send(ideas[id]);
    }else{
        res.status(404).send({err : "Error not a valid data"});
    }
}
exports.deleteIdea = (req, res) => {
    let id=req.params.id;
    if (ideas[id]) {
        delete ideas[id];
        res.status(200).send("deletation successful ");
    }else{
        res.status(404).send({err : "Idea is doesn't exist"});
    }
}