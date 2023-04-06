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
    const todos = await ToDoModel.find({});
    res.json(todos);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// module.exports.completedAllToDo = async (req, res) => {
//   try {
//     const todos = await ToDoModel.find();
//     const isCheckOne = todos.some((todo) => {
//       !todo.completed;
//     });
//     console.log(isCheckOne);
//     await ToDoModel.updateMany({ completed: isCheckOne }, { new: true });

//     const newTodo = await ToDoModel.find();
// console.log(22, newTodo);
//     res.json(newTodo);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

module.exports.completedAllToDo = async (req, res) => {
  try { 
    const todos = await ToDoModel.find();
    const isCheckOne = todos.some((todo) => {
      !todo.completed;
    });
    console.log(5555);
    const newTodos = todos.map((todo) => {
      return { ...todo, completed: isCheckOne };
    });
    // todos.forEach((item) => {
    //   item.completed = isCheckOne;
    // });

console.log(newTodos._doc);

    res.json(newTodos);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// module.exports.completedAllToDo= async (req, res) => {
//   try {
//     const { completedAll } = req.body;
//     await ToDoModel.updateMany(
//       {},
//       { completed: completedAll },
//       { new: true }
//     );
//     const todos = await ToDoModel.find({});
//     res.json(todos);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

// module.exports.completedAllToDo = async (req, res) => {
//   try {
//     const todos = await ToDoModel.find();
//     const isCheckOne = todos.some((todo) => {
//       !todo.completed;
//     });
//     await ToDoModel.updateMany({ completed: isCheckOne }, { new: true });

//     const newTodo = await ToDoModel.find();
// console.log(22, newTodo);
//     res.json(newTodo);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };