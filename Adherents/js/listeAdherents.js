
const list = document.querySelector("#tbody");
const form = document.querySelector("form");
const adherentId_url = window.location.search;
console.log(adherentId_url);
const adherentId = adherentId_url.slice(4)
console.log(adherentId)
const url ="http://localhost:8080/adherents";

//var page =1
 const pagination = document.querySelector("#pagination");
 pagination.addEventListener('submit',e=>{
    e.preventDefault();
	let page = document.getElementById("#id").value;
         console.log(page)
    
    
 })
  

//   function getId(btn){ return btn.id }
page = 1
fetch(`${url}?page=${page}`).then(response => {return response.json()}).then(data =>{
    console.log(data);
    for(var i =0 ;data.length; i++ ){
         const html = `<tr>
                        <td>${data[i].nom}</td>
                        <td>${data[i].addresse}</td>
                        <td>${data[i].cin}</td>
                        <td>${data[i].dateNaissance}</td>
                        <td><a href="modifierAdherent.html?id=${data[i].cin}" class="btn btn-success">Modifier</a></td>
                        <td><a href="?id=${data[i].adherentId}"  class="btn btn-danger ">Supprimer</a></td></tr>`
         list.innerHTML +=html;
    }
})

// recherche d'un adherent par CIN
//let cinValue = document.getElementById("#search").value;
form.addEventListener('submit',e=>{
    e.preventDefault();
    
	let CIN = form.search.value;
    if(CIN !== null){
        console.log(CIN);
    fetch(`${url}/${CIN}`).then(response => {return response.json()}).then(data =>{
        console.log(data);
        
             const html = `<tr>
                            <td>${data.nom}</td>
                            <td>${data.addresse}</td>
                            <td>${data.cin}</td>
                            <td>${data.dateNaissance}</td>
                            <td><a href="modifierAdherent.html?id=${data.cin}" class="btn btn-success">Modifier</a></td>
                            <td><a href="?id=${data.adherentId}"  class="btn btn-danger ">Supprimer</a></td></tr>`
                            
        
             list.innerHTML +=html;
            
    })

}else{
    console.log('le champt vide !')
}
    
 })
//console.log(cinValue);



// supprimer adherents 

fetch(`${url}/${adherentId}`,{
	method: "DELETE",
	body: null,
	headers: {
		"Content-Type":"application/json",

	},
   
}).then((response) => (response.json)).then((response)=> console.log(response));



