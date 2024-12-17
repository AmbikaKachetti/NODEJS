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
function getMobiles(id) {
  return new Promise(function (success, reject) {
    if (id) {
      con.query(`SELECT * FROM mobiles WHERE id=?`, [id], (err, rows, cols) => {
        // con.query(`SELECT * FROM mobiles WHERE id=?`, [id], function(err, rows, cols){

        if (err) {
          //   console.error("Error executing query:", err.message);
          // reject(err);
          reject(500);
        } else {
          //   console.log("Rows:", rows);
          //   console.log("Columns Metadata:", cols);
          success(rows);
        }
      });
    } else {
      con.query(`SELECT * FROM mobiles`, (err, rows, cols) => {
        if (err) {
          //   console.error("Error executing query:", err.message);
          reject(500);
        } else {
          //   console.log("Rows:", rows);
          //   console.log("Columns Metadata:", cols);
          success(rows);
        }
      });
    }
  });
}

// Call the function
// getMobiles();

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
          // reject(err);
          reject(500);
        } else {
          // console.log(res);
          success(res);
        }
      }
    );
  });
}
// Call the function
// addMobile("Redmi", 10000, "4gb", "64gb");
// ! PUT

// UPDATE - to update product in table that is already existed
function updateMobile(n, p, r, s, id) {
  return new Promise(function (success, reject) {
    con.query(
      // `UPDATE mobiles(id, name, price, ram, storage) VALUES(?, ?, ?, ?, ?)`,
      `UPDATE mobiles SET name=?, price=?, ram=?, storage=? WHERE id=?`,
      [n, p, r, s, id],
      function (err, res) {
        if (err) {
          // console.log("Error occured while updating existing product");
          reject(500);
        } else {
          // console.log(res);
          success(res);
        }
      }
    );
  });
}
// Call the function
// updateMobile("Redmi", 10000, "4gb", "64gb", 29);
// ! DELETE

// DELETE - to delete product in table that is already existed
function deleteMobiles(id) {
  return new Promise(function (success, reject) {
    getMobiles(id).then((rows) => {
      if (rows.length > 0) {
        con.query(`DELETE FROM mobiles WHERE id=?`, [id], function (err, rows) {
          if (err) {
            //   console.log("Error occured while deleting existing product");
            reject(500);
          } else {
            //   console.log(res);
            success(rows);
          }
        });
      }
      else{
        reject(404);
        // 404 means with the given "id" there is no record available in our database
      }
    });
  });
}
// Call the function
// deleteMobiles(2);

// Close the connection after the operation
// con.end((err) => {
//   if (err) {
//     console.error("Error closing the connection:", err.message);
//   } else {
//     console.log("Database connection closed.");
//   }
// });

// exporting all function in this .js file, and making them available to every other .js file in this REST API with MYSQL season
module.exports = {
  addMobile,
  getMobiles,
  updateMobile,
  deleteMobiles,
};
