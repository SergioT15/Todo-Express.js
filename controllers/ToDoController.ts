const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const page = req.params.page || 0;
  const itemPerPage = 5;
  // const page = parseInt(req.params.page);
  // const itemPerPage = parseInt(req.params.limit);
  // console.log(page * itemPerPage, page, itemPerPage);
  const count = await ToDoModel.find().countDocuments();
  const AllTodo = await ToDoModel.find()
    .skip(page * itemPerPage)
    .limit(itemPerPage);

  res.send({ todos: AllTodo, count });
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

// module.exports.paginateToDo = async (req, res) => {
//   try {
//     const page = req.body.p || 0;
//     const itemPerPage = 5;
//     await ToDoModel.skip(page * itemPerPage).limit(itemPerPage);
//     console.log(page);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };
