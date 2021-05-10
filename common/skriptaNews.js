$(document).ready(function(){

	//dinamicko ubacivanje elemenata
	
	var div1 = document.getElementById("pizasecret")
	var pTag = document.createElement("p")
	var tekstPTaga = document.createTextNode(" Did you know? Pizza is a German(ic) Word! The word pizza has a history of more than thousand years. It is first recorded in a Latin text from the southern Italian town of Gaeta in 10th century. Italy in that time was subject to the successive domination of Germanic-speaking peoples, the Goths and the Langobards. The term pizza is thought to derive from a Langobard word similar to 'bizzo' or 'pizzo', which means 'bite' and 'bit'. This word originally meant 'mouthful', then later 'piece of bread'. Nowadays the word pizza has assumed a further life of its own.")
	pTag.appendChild(tekstPTaga);
	div1.appendChild(pTag);
	pTag.setAttribute("id","dodatno")
	
	var dugme1 = document.createElement("input");
	dugme1.setAttribute("type","button");
	dugme1.setAttribute("id","dugme1");
	dugme1.setAttribute("value","Read More");
	div1.appendChild(dugme1);
	
	var ulTag = document.createElement("ul")
	var recept = ["10-12 cheese filled ravioli or your favorite","1/2 cup pesto","1/4 cup olive oil","1/2 cup shredded Parmesan cheese"]
	for(i in recept)
	{
		ulTag.innerHTML += "<li>" + recept[i] + "</li>";
		
	}
	var div2 = document.getElementById("bestravioli")
	div2.appendChild(ulTag)
	var olTag = document.createElement("ol")
	olTag.innerHTML = "<li> Bring about 3-4 quarts of water to a boil. Add ravioli and cook according to package directions, about 4-6 minutes. Remove from water with a slotted spoon. </li> ";
		olTag.innerHTML += "<li>While ravioli is cooking, heat pesto and olive in the microwave or on the cooktop. Spoon over cooked ravioli and sprinkle with shredded Parmesan cheese.</li>";
 div2.appendChild(olTag);
 
 var dugme2 = document.createElement("input");
	dugme2.setAttribute("type","button");
	dugme2.setAttribute("id","dugme2");
	dugme2.setAttribute("value","Show Recipe");
	div2.appendChild(dugme2);
 
 //show more/less
 
	$('#dodatno').hide();
	$('#dugme1').click(function(){
		if($('#dodatno').is(':visible'))
		{
			$('#dodatno').slideUp();
			$(this).val('Read More');
		}
		else
		{
			$('#dodatno').slideDown();
			$(this).val('Show Less');
		}
	})
	
	$('#bestravioli ul li').hide();
	$('#bestravioli ol li').hide();
	$('#dugme2').click(function(){
		if($('#bestravioli ul li').is(':visible'))
		{
			$('#bestravioli ul li').fadeOut();
			$('#bestravioli ol li').fadeOut();
			$(this).val('Show Recipe');
		}
		else
		{
			$('#bestravioli ul li').fadeIn();
			$('#bestravioli ol li').fadeIn();
			$(this).val('Hide Recipe');
		}
	})
 
 
 
 
 
})