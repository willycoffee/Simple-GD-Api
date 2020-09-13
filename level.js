const req = require("request");
const atob = require("atob");

function getLevel(level) {
  req.post("http://boomlings.com/database/getGJLevels21.php", {form: {secret: "Wmfd2893gb7", str: level, type: 0
}}, (err, res, body) => {
  body = body.split(':')

  let length = ['Tiny', 'Short', 'Medium', 'Long', 'XL']
  let difficulty = { 0: 'Unrated', 10: 'Easy', 20: 'Normal', 30: 'Hard', 40: 'Harder', 50: 'Insane', 60: 'Demon'}

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

getLevel(42584142)
