const UserModal = require("../models/user");

async function handleGetAllUsers(req,res) {
    await UserModal.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log("Error in getUsers", err));
}

async function handleGetUserById(req, res){
    const user = await UserModal.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found!" });
    return res.json(user);
}

async function handleUpdateUserById(req, res){
    await UserModal.findByIdAndUpdate(req.params.id, { lastName: "Prajapati" });
    return res.json({ status: "Success" });
}

async function handleUserDeleteById(req, res){
    await UserModal.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success" });
}

async function handleCreateUser(req, res){
    const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.age ||
    !body.technology
  ) {
    return res.status(400).json({ msg: "All fields are required!" });
  }

  const result = await UserModal.create({
    firstName: body.firstName,
    lastName: body.lastName,
    age: body.age,
    technology: body.technology,
  });
  console.log(result);
  return res.status(201).json({ msg: "Success!", id: result._id });
}
module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleUserDeleteById,
    handleCreateUser
}