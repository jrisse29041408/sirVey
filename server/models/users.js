const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googelId: String
});

mongoose.model("users", userSchema);
