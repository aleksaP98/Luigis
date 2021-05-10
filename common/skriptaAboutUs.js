


$(document).ready(function(){
 
	
 
 
	//dinamicko ubacivanje slika
	
	var nizSlika = ["images/slajder1.png","images/slajder2.jpg","images/slajder3.jpg","images/slajder4.jpg","images/slajder5.jpg","images/slajder6.jpg"]
	var divZaSlike = document.getElementById("divzaslike")
	for (i in nizSlika)
	{
		if(i == 0)
		divZaSlike.innerHTML += "<img src = '" + nizSlika[i] + "' class = 'aktivna' id ='"+ i +"'/>";
		else divZaSlike.innerHTML += "<img src = '" + nizSlika[i] + "'id ='"+ i +"'/>"
	}
	
	//ubacivanje tastera 
	
	var dugmici = document.getElementById("dugmici")
	var dugmePrev = document.createElement("a")
	var dugmeNext = document.createElement("a")
	dugmePrev.setAttribute("class","prev")
	dugmeNext.setAttribute("class","next")
	dugmePrev.innerHTML = "&#10094;"
	dugmeNext.innerHTML = "&#10095;"
	dugmici.appendChild(dugmeNext);
	dugmici.appendChild(dugmePrev);
	
	$(".prev").click(function(){
		var trenutna = $(".aktivna")
		var sledeca = trenutna.prev("img").length ? trenutna.prev() : trenutna.parent().children(':last')
		trenutna.fadeOut().removeClass("aktivna")
		sledeca.fadeIn().addClass("aktivna")
	})
	
	$(".next").click(function(){
	
		
		var trenutna = $(".aktivna")
		var sledeca = trenutna.next("img").length ? trenutna.next() : trenutna.parent().children(':first')
		trenutna.fadeOut().removeClass("aktivna")
		sledeca.fadeIn().addClass("aktivna")
		
	})
	
	
	//ubacivanje tackica 
	
	
	for(i in nizSlika)
	{
		
		$('<span class="dot" ></span> ').appendTo('#tackice');
		
	}
	var tackiceNiz = $(".dot")
	var slikeNiz = $("#divzaslike img")
	tackiceNiz.click(function(){
		var indexTackice = tackiceNiz.index(this)
		for (i in tackiceNiz){
			if(i == indexTackice)
			{
				var trenutna = $(".aktivna");
				var sledeca = $("#"+i+"");
				
				if(trenutna.val() != sledeca.value)
				{	
					trenutna.fadeOut().removeClass("aktivna");
					sledeca.fadeIn().addClass("aktivna")
					
					
					break;
				}
				else break;
			}	
			
		}		
		
			
	})
	
		
	
	slajder()
	
	
		
	
 

	function slajder()
	{
		
	
		var trenutna = $(".aktivna")
	
		var sledeca = trenutna.next().length ? trenutna.next() : trenutna.parent().children(':first')
	
		trenutna.fadeOut().removeClass("aktivna")
		sledeca.fadeIn().addClass("aktivna");
		
		
		setTimeout(slajder,5000);
		
	}
	

	
	//dinamicki brojevi
	
	
	
	

	
	var pastaChefs = document.getElementById("pastachefs");
	var salads = document.getElementById("saladsperday")
	var seaFoodDishes = document.getElementById("seafooddish")
	var pizzaPerDay = document.getElementById("pizaperday")
	var datum = new Date();
	var dan = datum.getDay();
	
	
	
	switch(dan){
	case 0: pizaperday.innerHTML = "365"
			seaFoodDishes.innerHTML = "76"
			salads.innerHTML = "23"
			pastaChefs.innerHTML = "3"
			break;
	case 1: pizaperday.innerHTML = "276"
			seaFoodDishes.innerHTML = "47"
			salads.innerHTML = "51"
			pastaChefs.innerHTML = "2"
			break;
	case 2: pizaperday.innerHTML = "259"
			seaFoodDishes.innerHTML = "43"
			salads.innerHTML = "35"
			pastaChefs.innerHTML = "4"
			break;
	case 3: pizaperday.innerHTML = "439"
			seaFoodDishes.innerHTML = "32"
			salads.innerHTML = "11"
			pastaChefs.innerHTML = "1"
			break;
	case 4: pizaperday.innerHTML = "382"
			seaFoodDishes.innerHTML = "74"
			salads.innerHTML = "29"
			pastaChefs.innerHTML = "5"
			break;
	case 5: pizaperday.innerHTML = "543"
			seaFoodDishes.innerHTML = "16"
			salads.innerHTML = "43"
			pastaChefs.innerHTML = "3"
			break;
	case 6: pizaperday.innerHTML = "265"
			seaFoodDishes.innerHTML = "56"
			salads.innerHTML = "88"
			pastaChefs.innerHTML = "2"
			break;
	}
		
		
		
		
		
})
		
		
		
		
		
		