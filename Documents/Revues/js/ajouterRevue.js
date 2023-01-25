// ajouter revue
const form = document.querySelector("form");
form.addEventListener('submit',e =>{
	e.preventDefault();
	let txtTitre = document.getElementById("titre").value;
	let txtReference = document.getElementById("reference").value;
    let txtAnnee = document.getElementById("annee").value;
	let txtPrix = document.getElementById("prix").value;
	 const NewRevue ={
		titre: txtTitre,
		ref: txtReference,
        annee: txtAnnee,
		prix: txtPrix

	}
    console.log(NewRevue)
if(NewRevue !=null){
fetch("http://localhost:8080/revues",{
	method: "POST",
	body: JSON.stringify(NewRevue),
	headers: {
		"Content-Type":"application/json",

	},

}).then((response) => (response.json)).then((response)=> console.log(response));
//window.location.assign("index.html");

}else{
	alert("add error !")
}
});