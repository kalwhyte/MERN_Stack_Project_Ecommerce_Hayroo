const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://whyte:pa55w0rd@cluster0.q78gyqn.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
