


//         // nom: "youssef MA",
// 		// addresse: "kasba N65",
// 		// cin: "GX123",
// 		// dateNaissance:"1996-08-20"

 const form = document.querySelector("form");
 // ajouter adherents
form.addEventListener('submit',e =>{
	e.preventDefault();
	let nom = document.getElementById("nom").value;
	let addresse = document.getElementById("addresse").value;
	let cin = document.getElementById("cin").value;
	let dateNaissance = document.getElementById("date").value;
	 const NewAdherent ={
		nom: nom,
		addresse: addresse,
		cin:cin,
		dateNaissance:dateNaissance

	}
if(NewAdherent !=null){
fetch("http://localhost:8080/adherents",{
	method: "POST",
	body: JSON.stringify(NewAdherent),
	headers: {
		"Content-Type":"application/json",

	},

}).then((response) => (response.json)).then((response)=> console.log(response));
window.location.assign("index.html");

}else{
	alert("add error !")
}
});

//window.location.href ="index.html";
//alert('add successfully');
//window.location.assing("index.html");


// promise01.then(async(reponse) =>{
// 	try {
// 		console.log(reponse);
// 		const contenu =await reponse.json();
// 		console.log(contenu);
		
// 	} catch (error) {
// 		console.log(error);
// 	}
// });