const livre_url = window.location.search;
console.log(livre_url);
const livreId = livre_url.slice(4)
console.log(livreId)

const url ="http://localhost:8080/livres";
const form = document.querySelector("form");
const txtTitre = document.querySelector("#titre");
const txtAuteur = document.querySelector("#auteur");
const txtNbrPage = document.querySelector("#nbPage");
const txtPrix = document.querySelector("#prix");
fetch(`${url}/${livreId}`).then(response => {return response.json()}).then(data =>{
    console.log(data);

    txtTitre.value= data.titre;
    txtAuteur.value= data.auteur;
    txtNbrPage.value= data.nbPage;
    txtPrix.value= data.prix;
      
})
// la modification d'un adherent
form.addEventListener('submit',e =>{
	e.preventDefault();
	let titrValue = document.getElementById("titre").value;
	let auteurValue = document.getElementById("auteur").value;
    let NbrePageValue = Number(document.getElementById("nbPage").value);
	let prixValue = document.getElementById("prix").value;
	 const NewLivre ={
		titre: titrValue,
		auteur: auteurValue,
        nbPage: NbrePageValue,
		prix: prixValue

	}
   
if(NewLivre !=null){
fetch(`${url}/${livreId}`,{
	method: "PUT",
	body: JSON.stringify(NewLivre),
	headers: {
		"Content-Type":"application/json",

	},

}).then((response) => (response.json)).then((response)=> console.log(response));
window.location.assign("index.html");

}else{
	alert("update error !")
}
});
