const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleUserDeleteById,
  handleCreateUser,
} = require("../controllers/user");

router.route("/")
.get(handleGetAllUsers)
.post(handleCreateUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleUserDeleteById);

//Create New User
router.post("/", handleCreateUser);
//Return HTML
// router.get("/getUsers", async (req, res) => {
//   const allDBUsers = await UserModal.find({});
//   const html = `
//     <ul>
//       ${allDBUsers.map(
//         (user) =>
//           `<li>${user.firstName} ${user.lastName} with ${user.technology}</li>`
//       )}
//     </ul>
//   `;
//   res.send(html);
// });

module.exports = router;
