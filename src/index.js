
import './main.css'
const moment = require('moment');

const localDate = document.getElementById('localDate');
const localTimeZone = document.getElementById('localTimeZone');
const localTime = document.getElementById('localTime');

const now = moment();
localDate.innerHTML = now.format("ddd, MMM D YYYY");
const updateTime = () => {
   localTime.innerHTML = moment().format("HH:mm:ss")
};
setInterval(updateTime, 1000);
