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

router.get("/:page", getToDo);
router.post("/", addToDo);
router.delete("/", deleteToDo);
router.delete("/All", deleteAllToDo);
router.patch("/completedAll", completedAllToDo);
router.patch("/:_id", updateToDo);

module.exports = router;
// :page/:itemPerPage