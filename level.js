const req = require("request");
const atob = require("atob");

function getLevel(level) {
  req.post("http://boomlings.com/database/getGJLevels21.php", {form: {secret: "Wmfd2893gb7", str: levelID, type: 0
}}, (err, res, body) => {
  body = body.split(':')

  const levelInfo = {
    levelID: body[1],
    levelName: body[3],
    levelDescription: atob(body[35]) || "(No description provided)",
    levelAuthor: body[54],
    levelDownloads: body[13],
    levelLikes: body[19]
    // levelDifficulty: difficulty[body[9]],
    // levelFeatured: body[29] || 0
  }

  if (body == '-1') {
    console.log('Not found.')
  } else {
    console.log(levelInfo)
  }
})
}

// function getLevel(levelID) {
//   req.post ("http://boomlings.com/database/downloadGJLevel22.php", { form: {secret: "Wmfd2893gb7",
//   levelID: levelID}}, (err, res, body) => {
//   let response = body.toString()
//   response = response.split(':')
//
//   // let orbs = [0, 0, 50, 75, 125, 175, 225, 275, 350, 425, 500]
//   let length = ['Tiny', 'Short', 'Medium', 'Long', 'XL']
//   let difficulty = { 0: 'Unrated', 10: 'Easy', 20: 'Normal', 30: 'Hard', 40: 'Harder', 50: 'Insane' }
//
//   const levelInfo = {
//     levelID: response[1],
//     levelName: response[3],
//     levelDescription: atob(response[5]) || "(No description provided)",
//     levelDownloads: response[17],
//     levelLikes: response[23],
//     levelUploaded: response[45],
//     levelUpdated: response[47],
//     levelDifficulty: difficulty[response[15]],
//     levelFeatured: response[29] || 0
//   }
//
//   if (body == '-1') {
//     console.log('Not found.')
//   } else {
//     console.log(levelInfo)
//   }
// })
// }

getLevelNew(42584142)
