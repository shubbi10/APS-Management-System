const mongoose = require('mongoose');

main().catch(err => console.log(err));

let connection;
async function main() {
  connection = await mongoose.connect('mongodb+srv://mahendarbisht:Dg7GCdR9kBkzY5AX@cluster03.dezhh9z.mongodb.net/test?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = { connection};