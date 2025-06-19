require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3001;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`❌ Error connecting to MongoDB: ${err.message}`);
  });