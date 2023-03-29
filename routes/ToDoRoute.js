const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
  completedToDo,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.put("/update", updateToDo);
router.delete("/delete", deleteToDo);
router.put("/completed", completedToDo);

module.exports = router;
