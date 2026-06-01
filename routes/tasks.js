const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all tasks
router.get("/", (req, res) => {
    db.query("SELECT * FROM tasks", (err, results) => {
        res.json(results);
    });
});

// ADD task
router.post("/", (req, res) => {
    const { title } = req.body;
    db.query("INSERT INTO tasks (title) VALUES (?)", [title], (err) => {
        res.json({ message: "Task added" });
    });
});

// DELETE task
router.delete("/:id", (req, res) => {
    db.query("DELETE FROM tasks WHERE id = ?", [req.params.id], () => {
        res.json({ message: "Task deleted" });
    });
});

module.exports = router;