const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const helper = require('../helpers/github.js');
const Models = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  helper.getReposByUsername(req.body.term, (err, repos) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(repo)
      repos.map((repo) => {
        repoObj = {
          repoName: repo.name,
          owner: repo.owner.login,
          url: repo.html_url,
          size: repo.size
        }
        return Models.save(repoObj);
      })
    }
  })

})

app.get('/all', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
    Models.find((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

