function exercice1() {
	//initialisation de la liste
	let tableau1 = [4, 22, "samedi", 25, "château"];
	//stockage du dernier élément dans une variable
	var last_item = tableau1.pop();
	tableau1.unshift(last_item);
	
	document.getElementById("exercice1Resultat").innerHTML = tableau1;
}

function exercice2() {
	var text = document.querySelector("#texteExercice2").value.toUpperCase();
	let separateurs = new RegExp ("[ ]"); 
	let myArray1 = text.split ( separateurs );

	document.getElementById("exercice2Resultat").innerHTML = myArray1;
	
}

function exercice3() {
	var text = document.querySelector("#texteExercice3").value;
	//Ici j'ai aussi ajouté la virgule le point l'apostrophe et les guillemets
	//(même si dans l'exercice nous ne devions mettre seulement l'espace)
	//sinon c'est comptabilisé comme un caractère et ça fausse le résultat
	//(j'aurais aussi pu ajouter d'autres symboles tels que les traits d'union, les points d'exlamation/interrogation etc).
	let separateurs = new RegExp ("[ ,.'\"]");
	let myArray2 = text.split (separateurs);
	
	var result = myArray2.filter(item => item.length >= 4);
	
	document.getElementById("exercice3Resultat").innerHTML = result;
}

function exercice4() {
	
	var text = document.querySelector("#texteExercice4").value;
	let separateurs = new RegExp ("[ ]"); 
	let myArray3 = text.split (separateurs);
	
	let tableau = "";	

function table(value) {
  tableau += value + "<br>";
}               
	myArray3.forEach(table);
	document.getElementById("exercice4Resultat").innerHTML = tableau.toString();
}
