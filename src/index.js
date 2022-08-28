
import '../main.css'
const moment = require('moment');

const localDate = document.getElementById('localDate');
const localTimeZone = document.getElementById('localTimeZone');
const localTime = document.getElementById('localTime');

let now = moment();
localDate.innerHTML = now.format("ddd, MMM D YYYY");
localTime.innerHTML = now.format("h:mm:ss a");
