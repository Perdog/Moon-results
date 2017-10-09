// Scan parser

$('#parse').click(function() {
	var parsed = parse($('#scanned').val())
	$('#results').val(parsed);
});

var condensed = {};
var rows;

function parse(text) {
	condensed = {};
	rows = text.split('\n');
	
	var finalString = "";
	
	if (rows.length === 0) {
		return "Empty!";
	}
	
	var first = true;
	for (var i = 0; i < rows.length; i++) {
		var cells = rows[i].split('\t');
		
		
		if (cells[0] === "Moon")
			continue;
		else if (cells[0]) {
			if (finalString)
				finalString += "\n";
			finalString += cells[0] + "\t";
			first = true;
			continue;
		}
		else {
			if (!first)
				finalString += " & ";
			else
				first = false;
			finalString += cells[1] + "(" + Math.round(parseFloat(cells[2]) * 10000)/100 + "%)";
			continue;
		}
		
	}
	
	return finalString;
};

/*
35833	Fliet - Ticonderoga	Fortizar	0 m
35825	Fliet - Stop and Swap	Raitaru	1,092 km
35832	Fliet - William Henry Technical Outpost	Astrahus	1,108 km
35826	Fliet - Robotics Fabrication Factory	Azbel	2,118 km
*/
