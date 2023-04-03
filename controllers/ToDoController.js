const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  console.log(req.query);
  const AllTodo = await ToDoModel.find({});
  const CompletedTodo = await ToDoModel.find({ completed: "true" }).exec();
  const ActiveTodo = await ToDoModel.find({ completed: "false" }).exec();
  res.send(AllTodo);
};

module.exports.addToDo = async (req, res) => {
  const { text } = req.body;
  ToDoModel.create({ text }).then((data) => {
    console.log("Added Successfully");
    console.log(data);
    res.send(data);
  });
};

module.exports.filteredNameToDo = async (req, res) => {
  const { _id, filter } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { filter })
    .then(() => res.send(filter))
    .then(() => res.send("Filtered Successfully"))
    .catch((err) => console.log(err));
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Successfully"))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully"))
    .catch((err) => console.log(err));
};

module.exports.completedToDo = async (req, res) => {
  const { _id, completed } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { completed })
    .then(() => res.send("Completed Successfully"))
    .catch((err) => console.log(err));
};
