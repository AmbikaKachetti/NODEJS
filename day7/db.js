const mysql = require("mysql2");

// Load environment variables (use dotenv or a similar package in real projects)
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin@123",
  database: "TEST",
});

// Connect to the database
con.connect((err) => {
  if (err) {
    console.error("Connection failed:", err.message);
    return;
  }
  console.log("Connected to the database.");
});
// ! GET
function getMobiles() {
  return new Promise(function (success, reject) {
    con.query(`SELECT * FROM mobiles`, (err, rows, cols) => {
      if (err) {
        //   console.error("Error executing query:", err.message);
        reject(err);
      } else {
        //   console.log("Rows:", rows);
        //   console.log("Columns Metadata:", cols);
        success(rows);
      }
    });
  });
}

// Call the function
getMobiles();

// ! POST
// INSERT - to add product in table
function addMobile(n, p, r, s) {
  return new Promise(function (success, reject) {
    con.query(
      `INSERT INTO mobiles(name, price, ram, storage) VALUES(?, ?, ?, ?)`,
      [n, p, r, s],
      function (err, res) {
        if (err) {
          // console.log("Error occured while adding new product");
          reject(err);
        } else {
          // console.log(res);
          success(res);
        }
      }
    );
  });
}
addMobile("Redmi Note 9", 22000, "6gb", "64gb");

// ! PUT

// UPDATE - to update product in table that is already existed
function updateMobile(id, n, p, r, s) {
  return new Promise(function (success, reject) {
    con.query(
      `UPDATE mobiles(id, name, price, ram, storage) VALUES(?, ?, ?, ?, ?)`,
      [id, n, p, r, s],
      function (err, res) {
        if (err) {
          // console.log("Error occured while updating existing product");
          reject(err);
        } else {
          // console.log(res);
          success(res);
        }
      }
    );
  });
}
updateMobile(2, "Redmi Note 11", 20000, "8gb", "128gb");

// ! DELETE

// DELETE - to delete product in table that is already existed
function deleteMobiles(id) {
  return new Promise(function (success, reject) {
    con.query(`DELETE mobiles WHERE id=?`, [id], function (err, res) {
      if (err) {
        //   console.log("Error occured while deleting existing product");
        reject(err);
      } else {
        //   console.log(res);
        success(res);
      }
    });
  });
}
deleteMobiles(2);

// Close the connection after the operation
con.end((err) => {
  if (err) {
    console.error("Error closing the connection:", err.message);
  } else {
    console.log("Database connection closed.");
  }
});

// exporting all function in this .js file, and making them available to every other .js file in this REST API with MYSQL season
module.exports = {
  addMobile,
  getMobiles,
  updateMobile,
  deleteMobiles,
};
