const req = require("request");

function getUser(userID) {
  req.post ("http://boomlings.com/database/getGJUserInfo20.php", { form: { secret: "Wmfd2893gb7",
    targetAccountID: userID,}}, (err, res, body) => {
    let response = body.toString()
    response = response.split(':')

    let userInfo = {
      userName: response[1],
      userID: response[3],
      userAccID: response[49],
      userStars: response[13],
      userDiamonds: response[15],
      userGoldCoins: response[23],
      userCoins: response[7],
      userDemons: response[17],
      userCP: response[19],
      userYT: response[27] || 'None',
      userTwitter: response[53] || 'None',
      userTwitch: response[55] || 'None'
    }

    if (body == '-1') {
      console.log('Not found.')
    } else {
      console.log(userInfo)
    }
  })
}

getUser(71)
