const dictionnaire_url = window.location.search;
console.log(dictionnaire_url);
const dictionnaireId = dictionnaire_url.slice(4)
console.log(dictionnaireId)

const url ="http://localhost:8080/dictionnaires";
const form = document.querySelector("form");
const txtTitre = document.querySelector("#titre");
const txtLangue = document.querySelector("#langue");
const txtPrix = document.querySelector("#prix");
fetch(`${url}/${dictionnaireId}`).then(response => {return response.json()}).then(data =>{
    console.log(data);

    txtTitre.value= data.titre;
    txtLangue.value= data.langue;
    txtPrix.value= data.prix;
      
})
// la modification d'un adherent
form.addEventListener('submit',e =>{
	e.preventDefault();
	let titrValue = document.getElementById("titre").value;
	let langueValue = document.getElementById("langue").value;
	let prixValue = document.getElementById("prix").value;
	 const NewDictionnaire ={
		titre: titrValue,
		langue: langueValue,
		prix: prixValue

	}
   
if(NewDictionnaire !=null){
fetch(`${url}/${dictionnaireId}`,{
	method: "PUT",
	body: JSON.stringify(NewDictionnaire),
	headers: {
		"Content-Type":"application/json",

	},

}).then((response) => (response.json)).then((response)=> console.log(response));
window.location.assign("index.html");

}else{
	alert("update error !")
}
});
