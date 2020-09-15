# Simple-GD-Api
A simple Geometry Dash API I made in Node.js.

## Info
I made this api in 1 whole day. You can get infomation about levels, users, and songs.

If you make any improvements or add any new functions to the api, gladly make a pull request.<br/>
If you notice any issues, gladly report it in the Issues tab in this repository.<br/>
If you wanna make a suggestion, make it as a issue. (btw if you were wondering, making a suggestion as a issue in the repository doesnt make it a issue.)

## How to use
You can look in the javascript files (except levelComments.js cause it's stil work in progress)<br/>
You can get it by either cloning it with [git](https://git-scm.com/) or downloading it as a ZIP file.<br/>
<br/>
If you wanna change the server, go to the config.js file and change "http://boomlings.com/database/" to your gdps server.

## Documention
You can take a look at the documention on the [wiki](https://github.com/willycoffee/Simple-GD-Api/wiki).

## Example
A example for a level
```javascript
getLevel(128)
```

A example for a user
```javascript
getUser(71)
```

A example for a song
```javascript
getSong(467339)
```

## Credits
Me - for making the api in the first place xd.<br/>
[FamryAmri](https://github.com/FamryAmri) - teaching me how to request data from a server with the 'request' npm module and giving me the documention for the endpoints.<br/>
[GDColon](https://github.com/GDColon) - his GDBrowser helped with half the api.<br/>
[SMJSGaming](https://github.com/SMJSGaming) - for the really helpful [documention](https://github.com/SMJSGaming/GDDocs).


the beginning of the api and the first thing i tried was getting some info on the first gauntlet.


![Beginning of the api](https://i.imgur.com/3EMX5UO.png)
