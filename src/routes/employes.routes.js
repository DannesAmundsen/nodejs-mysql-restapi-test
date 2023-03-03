const express = require("express");
const router = express.Router();
const {
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employees.controller");

router.use((req, res, next) => {
  next();
});

router.get("/employee/:id", getEmployee);

router.post("/employee", createEmployee);

router.put("/employee", updateEmployee);

router.delete("/employee", deleteEmployee);

module.exports = router;
