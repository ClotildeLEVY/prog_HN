// exercice 1
function prenom() {
    // on récupère le prénom on le met dans l'élément avec id holder1
    // compléter le code ici
	var pre = document.querySelector("#prenom").value;
	document.getElementById("holder1").innerHTML = pre;
}

function nomdefamille() {
    // on récupère le nom on le met dans l'élément avec id holder1
    // compléter le code ici
	var nom = document.querySelector("#nomdefamille").value;
	document.getElementById("holder1").innerHTML = nom;
}

function nomcomplet() {
    // on concatène prénom et nom pour afficher le nom entier et on met le résultat dans l'élément avec id holder1
    // compléter le code ici
	var conca = document.querySelector("#prenom").value + " "+ document.querySelector("#nomdefamille").value;
	document.getElementById("holder1").innerHTML = conca;
}


// exercice 2
function segmentText() {
    // on récupère le texte de l'élément d'id texte, on le découpe et on le place dans l'élément avec id holder2
    // compléter le code ici
	var text = document.querySelector("#texte").value;

	let separateurs = new RegExp ("[ ,']"); 
	let myArray1 = text.split ( separateurs ) ;

	document.getElementById("holder2").innerHTML = myArray1;
}

function segmentText2() {
    // on récupère le texte de l'élément d'id texte et on le met en majuscule, on le découpe et on le place dans l'élément avec id holder2
    // compléter le code ici
	var text2 = document.querySelector("#texte").value.toUpperCase();
	let separateurs = new RegExp ("[ ,']"); 
	let myArray2 = text2.split ( separateurs );

	document.getElementById("holder2").innerHTML = myArray2;
}
