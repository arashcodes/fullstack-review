const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true});

// Schema design
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoName: String,
  owner: String,
  url: String,
  stars: Number
});

// Model
let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;