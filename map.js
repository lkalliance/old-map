var places = [

["Seattle","North",102,50],
["Park City","South",280,302],
["Sacramento","South",46,310],
["Yosemite","South",80,334],
["Grand Canyon","South",245,430],
["Las Vegas","South",172,418],
["Bryce Canyon","South",247,385],
["Zion","South",230,390],
["Craters of the Moon","North",260,195],
["Dinosaur National Monument","South",325,312],
["Devil's Tower","North",444,200],
["Yellowstone","North",318,178],
["Arches","South",312,360],
["Mt. Rushmore, Crazy Horse","North",470,222],
["Mt. St. Helens","North",92,80],
["Mt. Hood","North",98,112],
["Ceour d'Alene","North",210,75],
["Theodore Roosevelt","North",480,132],
["Jackson Hole","North",312,215]

];






function init() {
	var map = document.getElementById("map");
	for (var i=0; i<places.length; i++) {
		var newPin = document.createElement("div");
		newPin.className = "pushpin " + places[i][1];
		newPin.id = places[i][0];
		newPin.style.left = places[i][2] + "px";
		newPin.style.top = places[i][3] + "px";
		var newLabel = document.createElement("em");
		var newText = document.createTextNode(places[i][0]);
		newLabel.appendChild(newText);
		newPin.appendChild(newLabel);
		map.appendChild(newPin);
	}


}