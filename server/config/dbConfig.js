const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const mongoURI = process.env.mongo_url;

if (!mongoURI) {
  console.error("❌ MongoDB URI is missing! Check your .env file.");
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB Connection Successful'))
  .catch(err => {
    console.error('❌ MongoDB Connection Failed:', err.message);
    process.exit(1);
  });