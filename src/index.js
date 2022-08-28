
import './main.css'
const moment = require('moment');

const localDate = document.getElementById('localDate');
const localTime = document.getElementById('localTime');
const utcDate = document.getElementById('utcDate');
const utc = document.getElementById('utc');
const utcTime = document.getElementById('utcTime');

const updateTime = () => {
   localDate.innerHTML = moment().format("ddd, MMM D YYYY");
   utcDate.innerHTML = moment.utc().add(1, 'hours').format("ddd, MMM D YYYY");
   localTime.innerHTML = moment().format("HH:mm:ss")
   utcTime.innerHTML = moment.utc().add(1, 'hours').format('HH:mm:ss');
};
setInterval(updateTime, 1000);
