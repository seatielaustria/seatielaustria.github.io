var moment = require('moment')

const curr_year = moment().format('YYYY')

var copyright = document.getElementById("copyright")
copyright.innerHTML = `Copyright &copy; SexyGirl ${curr_year}`