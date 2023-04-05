const { Router } = require("express");
const {
  getToDo,
  addToDo,
  updateToDo,
  deleteToDo,
  completedToDo,

} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.post("/add", addToDo);
router.patch("/:_id", updateToDo);
router.delete("/delete", deleteToDo);
router.patch("/:_id", completedToDo);


module.exports = router;
