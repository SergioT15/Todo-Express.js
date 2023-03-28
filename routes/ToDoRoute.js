const { Router } = require("express");
const { getToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.post("/save", getToDo);

module.exports = router;
