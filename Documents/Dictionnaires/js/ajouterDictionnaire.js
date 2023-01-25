
 // ajouter dictionnaire
const form = document.querySelector("form");
form.addEventListener('submit',e =>{
	e.preventDefault();
	let txtTitre = document.getElementById("titre").value;
	let txtLangue = document.getElementById("langue").value;
	let txtPrix = document.getElementById("prix").value;
	 const NewDictionnaire ={
		titre: txtTitre,
		langue: txtLangue,
		prix: txtPrix

	}
    console.log(NewDictionnaire)
if(NewDictionnaire !=null){
fetch("http://localhost:8080/dictionnaires",{
	method: "POST",
	body: JSON.stringify(NewDictionnaire),
	headers: {
		"Content-Type":"application/json",

	},

}).then((response) => (response.json)).then((response)=> console.log(response));
window.location.assign("index.html");

}else{
	alert("add error !")
}
});
