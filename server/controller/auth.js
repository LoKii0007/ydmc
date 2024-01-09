const User = require("../models/user.js")
const Staff = require("../models/staff.js")
const { validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const JWT_SECRET = "Bitch123"

// creating user  no login req
const createUser = async (req , res)=>{

    // finding errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    // checking if a user exists
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(409).json({ error: "a user already exisits with this email" });
      }


      //adding security
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        password: secpass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      res.status(200).json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
}

// loggging in
const login = async (req , res) => {
    // finding errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // checking if a user exists
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "invalid credentials" });
      }

      const passCompare = await bcrypt.compare(password, user.password);
      if (!passCompare) {
        return res.status(400).json({ error: "invalid credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.status(200).json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
}


//get logged user details
const getUser =async(req, res) =>{
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.json(user);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
      }
}


// staff authentication
const addStaff = async (req , res)=>{

  // finding errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  // checking if a user exists
  try {
    let staff = await Staff.findOne({ email: req.body.email });
    if (staff) {
      return res.status(409).json({ error: "a user already exisits with this email" });
    }


    //adding security
    const salt = await bcrypt.genSalt(10);
    const secpass = await bcrypt.hash(req.body.password, salt);

    staff = await Staff.create({
      name: req.body.name,
      password: secpass,
      email: req.body.email,
      phone : req.body.phone,
      gender : req.body.gender
    });

    const data = {
      user: {
        id: staff.id,
      },
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    res.status(200).json({ authToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
}

// staff loggging in
const staffLogin = async (req , res) => {
  // finding errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // checking if a user exists
  const { email, password } = req.body;

  try {
    let staff = await Staff.findOne({ email });
    if (!staff) {
      return res.status(400).json({ error: "invalid credentials" });
    }

    const passCompare = await bcrypt.compare(password, staff.password);
    if (!passCompare) {
      return res.status(400).json({ error: "invalid credentials" });
    }

    const data = {
      user: {
        id: staff.id,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    res.status(200).json({ authToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
}


module.exports = {createUser , login , getUser , addStaff , staffLogin};
