const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});

// Schema design
let repoSchema = new Schema({
  // TODO: your schema here!
  repoName: {type: String, unique: true, required: true},
  owner: String,
  url: String,
  size: Number
});

// Model
let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Repo.create(repo)
}

let find = (callback) => {
  Repo.find({}, (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(null, data);
    }
  })
}

module.exports.save = save;
module.exports.find = find;