//grab keys and dotenv file
require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api')
var request = require('request');
var fs = require ('fs');

//access keys variables
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

//create node search variables
var nodeArgv = process.argv;
var command = process.argv[2];

//ask for a movie or a song
var input = "";

for (var i = 3, l = nodeArgv.length; i<l; i++){
    if (i>3 && i<l){
        input = input + "+" + nodeArgv[i];
    }else{
        input = input + nodeArgv[i];
    }
}

//switch cases for command line input
switch(command){
    case "my-tweets":
        showTweets();
    break;

    case "spotify-this-song":
    if(input){
        spotifySong(input);
    }else{
        spotifySong("I want it that way")
    }
    break;

    case "movie-this":
        if(input){
            omdbSearch(input);
        }else{
            omdbSearch("Mr.Nobody")
        }
    break;

    case "do-what-it-says":
    doSays();
    break;

    default : 
    console.log("{Please enter a valid command: my-tweets, spotify-this-song, movie-this, do-what-it-says}");
    break;
}