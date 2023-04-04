const { Router } = require("express");
const {
  getToDo,
  addToDo,
  updateToDo,
  deleteToDo,
  completedToDo,
  filteredNameToDo,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.post("/add", addToDo);
router.patch("/update", updateToDo);
router.delete("/delete", deleteToDo);
router.patch("/completed", completedToDo);
router.patch("/filtered", filteredNameToDo);

module.exports = router;
