// recuperer id de livre à travers  url
const livre_url = window.location.search;
console.log(livre_url);
const livreId = livre_url.slice(4)
console.log(livreId)

const list = document.querySelector("#tbody");
const url ="http://localhost:8080/livres";
const livre =fetch(`${url}`);
livre.then((getLivreAlls)=>{
	console.log(getLivreAlls);

	const livresData = getLivreAlls.json();
	console.log(livresData);
	livresData.then((livres)=>{
      for(var i =0 ;livres.length; i++ ){
     console.log(livres[i]);
	 const html = `<tr>
					<td>${livres[i].titre}</td>
					<td>${livres[i].auteur}</td>
					<td>${livres[i].nbPage}</td>
					<td>${livres[i].prix}</td>
					<td><a href="modifierLivre.html?id=${livres[i].documentId}" class="btn btn-success">Modifier</a></td>
					<td><a href="?id=${livres[i].documentId}" class="btn btn-danger">Supprimer</a></td></tr>`
					

	 list.innerHTML +=html;
	
	}
	 
	});


})


// supprimer adherents 
fetch(`${url}/${livreId}`,{
	method: "DELETE",
	body: null,
	headers: {
		"Content-Type":"application/json",

	},
   
}).then((response) => (response.json)).then((response)=> console.log(response));


