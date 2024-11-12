const express = require("express");
const Authent = require("../middleware/auth");
const employeeController = require("../Controller/Employee_controller");
const fileUploading = require("../Controller/fileupload");

const router = express.Router();

//employee
router.get("/api/employee", Authent, employeeController.getAllEmployee);
router.post("/api/employee", Authent, employeeController.createEmployee);
router.put("/api/employee/:id", Authent, employeeController.UpdateEmployee);
router.delete("/api/employee/:id", Authent, employeeController.deleteEmployee);

//fileuploads
router.post("/api/fileupload", fileUploading.EmployeeProfile);

//user
const user = require("../Controller/user_controller");
router.post("/api/register", user.CreateUser);
router.post("/api/login", user.UserLogin);
module.exports = router;
