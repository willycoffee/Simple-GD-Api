const req = require("request");
const btoa = require("btoa")

const server = require('./config.js')

function postProfileComment(username, accountID, comment) {
    req.post(server + 'uploadGJAccComment20.php', {form: {secret: 'Wmfd2893gb7', userName: username, accountID: accountID, comment: btoa(comment)}}, (err, res, body) => {
        if (body == '-1') {
            console.log('Your comment has been rejected.')
        } else {
            console.log('Your comment has been posted to the server.')
        }
    })
}

postProfileComment('willy', 5410, 'this comment was posted from my simple gd api')