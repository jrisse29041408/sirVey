if (process.env.NODE_ENV === "prodution") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
// production connect mongodb+srv://jackrisse:osNGHEcpQQH9iJuz@users-quzvy.mongodb.net/test?retryWrites=true&w=majority
// prod clientID 314011386454-f9go8tht4q0lbce64bi3o8o888odmqul.apps.googleusercontent.com
// prod clientSecret WZ0v36cF3fk877L36E8pQ8kt
