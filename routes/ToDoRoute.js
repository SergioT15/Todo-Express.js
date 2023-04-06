const { Router } = require("express");
const {
  getToDo,
  addToDo,
  updateToDo,
  deleteToDo,
  deleteAllToDo,
  completedAllToDo,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.post("/add", addToDo);
router.delete("/delete", deleteToDo);
router.delete("/deleteAll", deleteAllToDo);
router.patch("/completedAll", completedAllToDo);
router.patch("/:_id", updateToDo);

module.exports = router;
