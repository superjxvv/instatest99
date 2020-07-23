const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  pic: {
    type: String,
    default:
      "https://res.cloudinary.com/superjxvv/image/upload/v1595079737/IMG-20140810-WA0005_nnjxxk.jpg"
  },
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "User" }]
})

mongoose.model("User", userSchema)
