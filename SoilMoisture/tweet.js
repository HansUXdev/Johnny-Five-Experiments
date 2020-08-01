// Node requires
var twitter = require('twitter');

var twitterHandle = '@tesselproject';
// The status to tweet
var status = 'Hello ' + twitterHandle + '. This is your #Tessel 2 speaking.';

// These OAuth credentials are for the dummy @TesselTweet account
// Paste in your own OAuth details if you want to tweet from your own account
var twit = new twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// Make a tweet!
twit.post('statuses/update', {status: status}, function(error, tweet, response){
  if (error) {
    console.log('error sending tweet:', error);
  } else {
    console.log('Successfully tweeted! Tweet text:', tweet.text);
  }
});