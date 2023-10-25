const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose')

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.DB)
.then()
.catch((err) => console.log(err))

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
