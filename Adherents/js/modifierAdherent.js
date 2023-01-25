




//  const form = document.querySelector("#tbody");
//  form.addEventListener('click',e=>{
// //   if(e.target.tagName === "BUTTON"){
// //     let id = e.target.parentElement.getAttribute('id')
// //     console.log(id)
// //   }
// console.log(e)
    
//  })

const adherentId_url = window.location.search;
console.log(adherentId_url);
const cin = adherentId_url.slice(4)
const adherentId = adherentId_url.slice(18)
console.log(cin);
console.log(adherentId)

const url ="http://localhost:8080/adherents";
const form = document.querySelector("form");
const txtnom = document.querySelector("#nom");
const txtaddresse = document.querySelector("#addresse");
const txtcin = document.querySelector("#cin");
const txtdate = document.querySelector("#date");
fetch(`${url}/${cin}`).then(response => {return response.json()}).then(data =>{
    console.log(data);

    txtnom.value= data.nom;
    txtaddresse.value= data.addresse;
    txtcin.value= data.cin;
    txtdate.value= data.dateNaissance;
      
})
// la modification d'un adherent
form.addEventListener('submit',e =>{
	e.preventDefault();
	let nomValue = document.getElementById("nom").value;
	let addresseValue = document.getElementById("addresse").value;
	let cinValue = document.getElementById("cin").value;
	let dateNaissanceValue = document.getElementById("date").value;
    console.log(dateNaissanceValue)
	 const NewAdherent ={
		nom: nomValue,
		addresse: addresseValue,
		cin: cinValue,
		dateNaissance: dateNaissanceValue

	}
   
if(NewAdherent !=null){
fetch(`${url}/${cin}`,{
	method: "PUT",
	body: JSON.stringify(NewAdherent),
	headers: {
		"Content-Type":"application/json",

	},

}).then((response) => (response.json)).then((response)=> console.log(response));
window.location.assign("index.html");

}else{
	alert("update error !")
}
});





