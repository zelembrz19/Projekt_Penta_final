(function() {
    var $section = $('#focal');
    var $panzoom = $section.find('.panzoom').panzoom();
    $panzoom.parent().on('mousewheel.focal', function( e ) {
        e.preventDefault();
        var delta = e.delta || e.originalEvent.wheelDelta;
        var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
        $panzoom.panzoom('zoom', zoomOut, {
            animate: true,
            focal: e
        });
    });
})();


function Sektori(id_sektora) {
  var sektori = ["sektor1L-8","sektor1D-8","sektor2L-6","sektor2D-1","sektor3L-6","sektor3D-3","sektor4L-8","sektor4D-2","sektor6L-6","sektor6D-0","sektor7L-0","sektor7D-7","sektor8L-4","sektor8D-5","sektor9L-2","sektor9D-1","sektor10L-0","sektor10D-8"];
  var x = document.getElementById(id_sektora);
  var i;
  var temp;
  
  for(i = 0; i<sektori.length; i++){
	  if(x != sektori[i]){
		  
		temp = document.getElementById(sektori[i]);
		temp.style.display = "block";
	  }
  }
    x.style.display = "none";
}


function Sjedala(id_sjedala){
	var x = document.getElementById(id_sjedala);
	var z = document.getElementsByClassName("seats");
	var i;
	var s = [];
	var i;
	var j = 0;
	var cijenaUkupno = 0;
	var maxSjedala = 0;
	var karta=0;
	var temp = 0;
	
	for(i=0; i < z.length; i++){
		if(z[i].style.fill == "rgb(230, 230, 0)"){
				temp++;
			}
	}

	
	if(x.style.fill == "rgb(230, 230, 0)"){
		
		x.style="fill:#0000ff";
			document.getElementById("rezSektor1").innerHTML = "-";
			document.getElementById("rezSektor2").innerHTML = "-";
			document.getElementById("rezSektor3").innerHTML = "-";
			document.getElementById("rezSektor4").innerHTML = "-";
			document.getElementById("rezSektor5").innerHTML = "-";
			document.getElementById("rezRed1").innerHTML = "-";
			document.getElementById("rezRed2").innerHTML = "-";
			document.getElementById("rezRed3").innerHTML = "-";
			document.getElementById("rezRed4").innerHTML = "-";
			document.getElementById("rezRed5").innerHTML = "-";
			document.getElementById("rezSjedalo1").innerHTML = "-";
			document.getElementById("rezSjedalo2").innerHTML = "-";
			document.getElementById("rezSjedalo3").innerHTML = "-";
			document.getElementById("rezSjedalo4").innerHTML = "-";
			document.getElementById("rezSjedalo5").innerHTML = "-";
			document.getElementById("rezCijena1").innerHTML = "-";
			document.getElementById("rezCijena2").innerHTML = "-";
			document.getElementById("rezCijena3").innerHTML = "-";
			document.getElementById("rezCijena4").innerHTML = "-";
			document.getElementById("rezCijena5").innerHTML = "-";
			document.getElementById("rezCijenaUkupno").innerHTML = "-";
	}
	else if (x.style.fill == "rgb(0, 0, 255)") {
		if(temp < 5){
		x.style="fill:#e6e600";
		}
	}
		else{ 
			return;
		}
	for(i=0; i<z.length; i++){
			if(z[i].style.fill == "rgb(230, 230, 0)"){
				s[j] = z[i];
				j++;
			}
	}
	
	$.getJSON("prostorCijene2D.json", function(json) {
			for(i=0; i<s.length; i++){
				for (j=0; j<160 ; j++){
					if(s[i].id == json[j].Id){
						karta = parseInt(json[j].SellingPrice);
						cijenaUkupno += karta;
						maxSjedala++;
						document.getElementById("rezSektor" + maxSjedala).innerHTML = "2D";
						document.getElementById("rezRed" + maxSjedala).innerHTML = json[j].Coordinate.RowName;
						document.getElementById("rezSjedalo" + maxSjedala).innerHTML = json[j].Seat;
						document.getElementById("rezCijena" + maxSjedala).innerHTML = karta + " €";
						document.getElementById("rezCijenaUkupno").innerHTML = cijenaUkupno  + " €";
						
					}
				}
			}
	});
	
}

function Ucitavanje(){
	var x;
	var i;
	var j;
	
		x = document.getElementsByClassName("seats");

		$.getJSON("prostorCijene2D.json", function(json) {
	
			for(i=0; i<x.length; i++){
				for (j=0; j<160 ; j++){
					if(x[i].id == json[j].Id){
						if(json[j].PlaceStatus.Title == "Zauzet"){
							x[i].style="fill:#000000";
					}if(json[j].PlaceStatus.Title == "Pretplatnik"){
							x[i].style="fill:#00cccc";
					}if(json[j].PlaceStatus.Title == "Blokiran"){
							x[i].style="fill:#ff0000";
					}if(json[j].PlaceStatus.Title == "Rezerviran"){
							x[i].style="fill:#008000";
					}
					}
				}
		
	}
	});	
}

function Rezervacija(){
	var x = document.getElementsByClassName("seats");
	var i;
	
	for(i = 0; i < x.length; i++){
		if(x[i].style.fill == "rgb(230, 230, 0)"){
			x[i].style="fill:#008000";
				document.getElementById("rezSektor1").innerHTML = "-";
			document.getElementById("rezSektor2").innerHTML = "-";
			document.getElementById("rezSektor3").innerHTML = "-";
			document.getElementById("rezSektor4").innerHTML = "-";
			document.getElementById("rezSektor5").innerHTML = "-";
			document.getElementById("rezRed1").innerHTML = "-";
			document.getElementById("rezRed2").innerHTML = "-";
			document.getElementById("rezRed3").innerHTML = "-";
			document.getElementById("rezRed4").innerHTML = "-";
			document.getElementById("rezRed5").innerHTML = "-";
			document.getElementById("rezSjedalo1").innerHTML = "-";
			document.getElementById("rezSjedalo2").innerHTML = "-";
			document.getElementById("rezSjedalo3").innerHTML = "-";
			document.getElementById("rezSjedalo4").innerHTML = "-";
			document.getElementById("rezSjedalo5").innerHTML = "-";
			document.getElementById("rezCijena1").innerHTML = "-";
			document.getElementById("rezCijena2").innerHTML = "-";
			document.getElementById("rezCijena3").innerHTML = "-";
			document.getElementById("rezCijena4").innerHTML = "-";
			document.getElementById("rezCijena5").innerHTML = "-";
			document.getElementById("rezCijenaUkupno").innerHTML = "-";
		}
	}
}

