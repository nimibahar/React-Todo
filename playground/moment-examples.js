var moment = require('moment');

console.log(moment().format());


var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1468320347;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format());


console.log('current moment', currentMoment.format('MMM D, YY @ H:mm a'));

console.log('current moment', currentMoment.format('MMMM Do, YYYY @ HH:mm A'));
