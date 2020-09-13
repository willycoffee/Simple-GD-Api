const req = require('request')
const atob = require("atob");

function getLevelComments(levelID, page) {
  req.post('http://boomlings.com/database/getGJComments21.php', {form: {secret: "Wmfd2893gb7", levelID: levelID, page: page,}}, (err, res, body) => {
    let response = body.toString()
    comments = response.split('~')

    if (body == '-1') {
      console.log('Not found.')
    } else {
      // comments.forEach((x) => {
      //   console.log(x)
      // });
      console.log('No, not yet. Coming Soon.')
    }
  })
}

getLevelComments(128)
