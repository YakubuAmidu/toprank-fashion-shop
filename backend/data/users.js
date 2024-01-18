import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin user",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("User1234", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "johnDoe@gmail.com",
    password: bcrypt.hashSync("User1234", 10),
    isAdmin: false,
  },
  {
    name: "Samuel Doe",
    email: "samuelDoe@gmail.com",
    password: bcrypt.hashSync("User1234", 10),
    isAdmin: false,
  },
];

export default users;
