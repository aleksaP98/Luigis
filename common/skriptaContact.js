$(document).ready(function(){

	//forma
	
	var formaText = ["<div class='col-md-6'> <input id='firstname' class='mb-20' type='text' placeholder='First Name'>  </div>",
	"<div class='col-md-6'> <input id='lastname' class='mb-20' type='text' placeholder='Last Name'>  </div>",
	"<div class='col-md-6'><input id='password' class='mb-20' type='text' placeholder='Password'>  </div>",
	"<div class='col-md-6'><input id='confirmpassword' class='mb-20' type='text' placeholder='Confirm Password'>  </div>"]
	var divZaFormu = $('.row');
	
	for(i in formaText)
		$(formaText[i]).appendTo(divZaFormu);
	
	$('<div class="col-md-12"><input id="email" class="mb-20" type="text" placeholder="Email">  </div>').appendTo(divZaFormu);
	$('<div id="gender">Gender:Male Female Other</div>').appendTo(divZaFormu);
	$('<div id ="divzaradio"></div>').appendTo(divZaFormu);
	var formaRadio = ["<input type ='radio' class ='radiozaformu' name ='pol'/></br>",
	"<input type ='radio' class ='radiozaformu'name ='pol'/></br>",
	"<input type ='radio' class ='radiozaformu'name ='pol'/></br>"]
	
	for(i in formaRadio)
		$(formaRadio[i]).appendTo(divzaradio)
	
	$('<div id="terms">I would like to subscribe for the blog. I accept the terms and conditions</div>').appendTo(divZaFormu)
	$('<div class ="divzachbox"><input type = "checkbox" class = "chbox"/></div>').appendTo(divZaFormu);
	$('<input type = "checkbox" class = "chbox"/>').appendTo(".divzachbox");
	
	$(' <h6 id="reg" class="center-text mtb-30"><a  id="register" class="btn-primaryc plr-25"><b>Register</b></a></h6>').appendTo(divZaFormu)
	
	//regularni izrazi
	
	var ime = document.getElementById("firstname")
	var prezime = document.getElementById("lastname") 
	var sifra = document.getElementById("password")
	var potsifra = document.getElementById("confirmpassword")
	var email = document.getElementById("email")
	var register = document.getElementById("register")
	var pol = document.getElementsByName("pol")
	var chboxovi = document.getElementsByClassName("chbox")
	
	var postoji = false;
	var cekiran = false;

	
	var regIme = /^[A-Z][a-z]{2,11}$/
	var regPrezime = /^[A-Z][a-z]{2,11}(\s[A-Z][a-z]{2,11})*/
	var regSifra = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
	var regEmail = /^[\w]+[\.\w\d]*\@[\w]+([\.][\w]+)+$/

	
	register.addEventListener("click",function(){
			var greske = [];
		
		if(!regIme.test(ime.value)) 
				greske.push("First name is not in good format")
		

		
		if(!regPrezime.test(prezime.value))		
				greske.push("Last name is not in good format")
		

		if(!regSifra.test(sifra.value)){
						greske.push("Password is not in good format")
		}
	
		if(sifra.value !=potsifra.value){
				greske.push("password does not match")
		}
	
		
		if(!regEmail.test(email.value)){
				greske.push("Email is not in good format")
		}

		for(var i=0;i<pol.length;i++)
			if(pol[i].checked){
				cekiran = true 
				break;
				}
			
		if(!cekiran){
				greske.push("You must select a gender")
		}
	
		if(!chboxovi[1].checked){
			
			greske.push("You must agree to the terms and conditions")
		}
	
		if(greske.length){
			if(!postoji){
				$('<span id ="zagreske"></span>').appendTo(divZaFormu);
				var spanZaGreske = document.getElementById("zagreske")
				postoji = true;
				for(i in greske){
					
						spanZaGreske.innerHTML += greske[i] + "</br>";
				}
			}
			else{
				var spanZaGreske = document.getElementById("zagreske")
				spanZaGreske.innerHTML = "";
				for(i in greske){
						
						spanZaGreske.innerHTML += greske[i] + "</br>";
				}
			}
		}
		else
		{
			$('#zagreske').remove();
			alert("Successfully registered! ")
		}
	})
	
	
	

	
})
