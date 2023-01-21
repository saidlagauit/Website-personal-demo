var now = new Date();
var startYear = "2017";
var text = "Copyright &copy; ";

if (startYear != '') {
    text = text + startYear + "-";
}

text = text + now.getFullYear() + ", Said Lagauit. All rights reserved.";

var copyrightnotice = document.getElementById('copyrightnotice');

copyrightnotice.innerHTML = text;