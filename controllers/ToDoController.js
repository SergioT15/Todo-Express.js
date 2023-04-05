const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const AllTodo = await ToDoModel.find({});
  res.send(AllTodo);
};

module.exports.addToDo = async (req, res) => {
  const { text } = req.body.data;
  ToDoModel.create({ text }).then((data) => {
    console.log("Added Successfully");
    console.log(data);
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
    const { text } = req.body;

    const updatedTodo = await ToDoModel.findByIdAndUpdate(
      req.params._id,
      { text },
      {
        new: true,
      }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports.completedToDo = async (req, res) => {
  try {
    const { completed } = req.body;
    console.log(req.params._id);
    const updatedTodo = await ToDoModel.findByIdAndUpdate(
      req.params._id,
      { completed },
      {
        new: true,
      }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
