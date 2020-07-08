var settings = {
  "url": "https://api.ebird.org/v2/data/obs/US-CA/recent/ancmur",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "X-eBirdApiToken": "2j6gl320clfk"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
// console.log('test')
const app = document.getElementById('root')
const locations = document.createElement('div')
// h2.textContent = "test"
// app.appendChild(h2)


$.ajax(settings).done(function (response) {
	console.log(response);
	var loc1 = document.createElement('h2');
	var loc2 = document.createElement('h2');
	loc1.textContent = (response[0].locName);
	// loc2.textContent = (response[1].locName);
	locations.appendChild(loc1)
	// locations.appendChild(loc2)
    app.appendChild(locations);
});