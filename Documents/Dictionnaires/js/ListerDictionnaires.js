// recuperer id de dictionnaire à travers  url
const dictionnaire_url = window.location.search;
console.log(dictionnaire_url);
const dictionnaireId = dictionnaire_url.slice(4)
console.log(dictionnaireId)

const list = document.querySelector("#tbody");
const url = "http://localhost:8080/dictionnaires";
const dictionnaire =fetch(`${url}`);
dictionnaire.then((getDictionnaireAlls)=>{
	console.log(getDictionnaireAlls);

	const dictionnairesData = getDictionnaireAlls.json();
	console.log(dictionnairesData);
	dictionnairesData.then((dictionnaires)=>{
      for(var i =0 ;dictionnaires.length; i++ ){
     console.log(dictionnaires[i]);
	 const html = `<tr>
					<td>${dictionnaires[i].titre}</td>
					<td>${dictionnaires[i].langue}</td>
					<td>${dictionnaires[i].prix}</td>
					<td><a href= "modifierDictionnaire.html?id=${dictionnaires[i].documentId}" class="btn btn-success">Modifier</a></td>
					<td><a href="?id=${dictionnaires[i].documentId}" class="btn btn-danger">Supprimer</a></td></tr>`
					

	 list.innerHTML +=html;
	
	}
	 
	});
	
})


// supprimer adherents 
fetch(`${url}/${dictionnaireId}`,{
	method: "DELETE",
	body: null,
	headers: {
		"Content-Type":"application/json",

	},
   
}).then((response) => (response.json)).then((response)=> console.log(response));


