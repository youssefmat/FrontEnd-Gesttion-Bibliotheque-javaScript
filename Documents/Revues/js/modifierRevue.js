const revue_url = window.location.search;
console.log(revue_url);
const revueId = revue_url.slice(4)
console.log(revueId)

const url ="http://localhost:8080/revues";
const form = document.querySelector("form");
const txtTitre = document.querySelector("#titre");
const txtReference = document.querySelector("#reference");
const txtAnnee= document.querySelector("#annee");
const txtPrix = document.querySelector("#prix");
fetch(`${url}/${revueId}`).then(response => {return response.json()}).then(data =>{
    console.log(data);

    txtTitre.value= data.titre;
    txtReference.value= data.ref;
    txtAnnee.value= data.annee;
    txtPrix.value= data.prix;
      
})
// la modification d'un adherent
form.addEventListener('submit',e =>{
	e.preventDefault();
	let titrValue = document.getElementById("titre").value;
	let referenceValue = document.getElementById("reference").value;
    let anneeValue = Number(document.getElementById("annee").value);
	let prixValue = document.getElementById("prix").value;
	 const NewRevue ={
		titre: titrValue,
		ref: referenceValue,
        annee: anneeValue,
		prix: prixValue

	}
   
if(NewRevue !=null){
fetch(`${url}/${revueId}`,{
	method: "PUT",
	body: JSON.stringify(NewRevue),
	headers: {
		"Content-Type":"application/json",

	},

}).then((response) => (response.json)).then((response)=> console.log(response));
window.location.assign("index.html");

}else{
	alert("update error !")
}
});
