var time = moment();
console.log(time);

function getHour() {
    var hour = moment().hour();
    return hour;
}

var dailyHour = getHour();
console.log(dailyHour);