const express = require("express");
const router = express.Router();
const User = require("../modals/user");

const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

//  installing json web token
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/FetchUser");

const JWT_SECRET = "ecommerce99";

router.post(
  "/adduser",
  [
    body("name", "name should be atleast 3 characters long").isLength({
      min: 3,
    }),
    body("email", "please enter right email").isEmail(),
    body("password", "at least 8 characters long").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // using try catch to show error if any error occour
    try {
      // check whether the user with this email exists already
      //   now we are using findone method to check that if the email is alredy exists in the database
      //

      let user1 = await User.findOne({ email: req.body.email });
      if (user1) {
        return res
          .status(400)
          .json({ error: "sorry this is already available" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashpassword = await bcrypt.hash(req.body.password, salt);

      let newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashpassword,
        role: "user",
      });

      // creating a auth token

      const data = {
        user: {
          id: newUser.id,
        },
      };

      const token = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);
// const adminUser = User.create({
//     name : 'joban',
//     email: 'jossansaab99@gmail.com',
//     password: "jossansaab99" ,
//     role: 'admin', // Set the role as 'admin' for this user
//   });

router.post("/userdetails", fetchuser, async (req, res) => {
  try {
    const user = User.findById({ user: req.user.id });
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});
router.post(
  "/login",
  [
    body("email", "please enter right email").isEmail(),
    body("password", "password cannot be blanked").exists(),
  ],
  async (req, res) => {
    // if there are errors return bad requests
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ error: "please try to login 1 with corrrect credentials " });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      console.log(passwordCompare);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({
            success,
            error: "please try to login with corrrect credentials ",
          });
      }
      success = true;

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      // console.log(authtoken);
      // res.json(user);

      res.json({ success, authtoken, user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

module.exports = router;
