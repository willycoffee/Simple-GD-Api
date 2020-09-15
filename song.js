const req = require("request");

const server = require('./config.js')

function getSong(songID) {
  req.post (server + "getGJSongInfo.php", { form: { secret: "Wmfd2893gb7",
    songID: songID,}}, (err, res, body) => {
    let response = body.toString()
    response = response.split("~|~")

    let songInfo = {
      songID: response[1],
      songName: response[3],
      songAuthor: response[7],
      songSize: response[9] + 'MB',
      songURL: decodeURIComponent(response[13])
    }

    if (body == '-1') {
      console.log('Not found.')
    } else {
      console.log(songInfo)
    }
  })
}

getSong(467339)
