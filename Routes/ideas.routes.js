//create Required routes
const ideas_controller =require("../Controllers/ideas.controller.js")
module.exports = (app) => {
    app.get("/ideaApp/api/v1/ideas",ideas_controller.getAllIdeas);
    app.get("/ideaApp/api/v1/ideas/:id",ideas_controller.getIdeaById);
    app.post("/ideaApp/api/v1/ideas",ideas_controller.postIdea);
}