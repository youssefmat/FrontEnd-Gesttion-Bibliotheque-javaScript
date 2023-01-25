// ajouter livre
const form = document.querySelector("form");
form.addEventListener('submit',e =>{
	e.preventDefault();
	let txtTitre = document.getElementById("titre").value;
	let txtAuteur = document.getElementById("auteur").value;
    let txtNbrPage = document.getElementById("nbPage").value;
	let txtPrix = document.getElementById("prix").value;
	 const NewLivre ={
		titre: txtTitre,
		auteur: txtAuteur,
        nbPage: txtNbrPage,
		prix: txtPrix

	}
    console.log(NewLivre)
if(NewLivre !=null){
fetch("http://localhost:8080/livres",{
	method: "POST",
	body: JSON.stringify(NewLivre),
	headers: {
		"Content-Type":"application/json",

	},

}).then((response) => (response.json)).then((response)=> console.log(response));
window.location.assign("index.html");

}else{
	alert("add error !")
}
});