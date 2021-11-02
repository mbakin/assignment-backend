const mongoose = require('mongoose');

const dbConnect = async () => {
  try{
    const connected = await mongoose.connect(process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    );
    console.log(`MongoDB Connected successfully`);
  }catch(error) {
    console.log(`Error occurred, ${error.message}`);
  }
}

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = { dbConnect, disconnectDB }

