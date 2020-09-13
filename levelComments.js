const req = require('request')
const atob = require("atob");

function getLevelComments(levelID, page) {
  req.post('http://boomlings.com/database/getGJComments21.php', {form: {secret: "Wmfd2893gb7", levelID: levelID, page: page,}}, (err, res, body) => {
    let response = body.toString()
    response = response.split('~')

    let commentInfo = {
      comment: atob(response[1])
    }

    if (body == '-1') {
      console.log('Not found.')
    } else {
      // response.forEach((item, i) => {
      //   console.log(`${i}: ${item}`)
      // })
      console.log('No, not yet. Still work in progress.')
    }
  })
}

getLevelComments(128)
