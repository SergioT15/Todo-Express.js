const ToDoModel = require("../models/ToDoModel");

const x = (filterItem)=>{
  if(filterItem==="Active") {return {completed: false}}
  if(filterItem==="Completed") {return {completed: true}}
  return {}

}
module.exports.getToDo = async (req, res) => {
  const page = req.params.page || 0;
  const itemPerPage = 5;

  const filterItem = req.query.filter;
  const filterValue = x(filterItem)

  const AllTodo = await ToDoModel.find(filterValue)
    .skip(page * itemPerPage)
    .limit(itemPerPage);

  const count = await ToDoModel.find(filterValue).countDocuments();
  const pagesLenght = Math.ceil(count/itemPerPage);

  res.send({ todos: AllTodo, count, pagesLenght });
};

module.exports.addToDo = async (req, res) => {
  const { text } = req.body.data;
  ToDoModel.create({ text }).then((data) => {
    console.log("Added Successfully");
    console.log("data>>>", data);
    res.send(data);
  });
};

module.exports.deleteToDo = async (req, res) => {
  try {
    const { _id } = req.body;
    const deletedTodo = await ToDoModel.findByIdAndDelete(_id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Unable to delete" });
    }
    res.json("Deleted Successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports.updateToDo = async (req, res) => {
  try {
    await ToDoModel.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    res.json("Updated Successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// completed
module.exports.deleteAllToDo = async (req, res) => {
  try {
    await ToDoModel.deleteMany({ completed: true }, { new: true });
    const todos = await ToDoModel.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports.completedAllToDo = async (req, res) => {
  try {
    const { completedAll } = req.body;
    await ToDoModel.updateMany({ completed: completedAll });
    const todos = await ToDoModel.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
