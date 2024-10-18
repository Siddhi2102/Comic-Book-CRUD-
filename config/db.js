const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://agrawalsiddhi2102:AtfFGmW01kDOABLD@cluster0.wdtmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);

  }
};

module.exports = connectDB;
