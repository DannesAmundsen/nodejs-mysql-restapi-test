const { pool } = require("../db/connection_db");

const getEmployee = async (req, res) => {
  const id = req.params.id;
  const [rows] = await pool.query(`SELECT * FROM employee WHERE id = ${id}`);

  if (rows.length <= 0) {
    return res.status(404).json({
      message: "Employee not found"
    })
  }
  res.send(rows[0]);
};

const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  const create = await pool.query(
    `INSERT INTO employee (name, salary) VALUES ("${name}", ${salary})`
  );
  res.send("Post success");
};

const updateEmployee = async (req, res) => {
  const { id, name, salary } = req.body;
  const update = await pool.query(
    `UPDATE employee SET name = "${name}", salary = ${salary} WHERE id = ${id}`
  );
  res.send("Put success");
};

const deleteEmployee = async (req, res) => {
  const { id } = req.body;
  const deleteStatement = await pool.query(
    `DELETE FROM employee WHERE id = ${id}`
  );
  res.send("Delete success");
};

module.exports = {
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
