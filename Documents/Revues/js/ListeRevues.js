// recuperer id de livre à travers  url
const lrevue_url = window.location.search;
const revueId = lrevue_url.slice(4)

const list = document.querySelector("#tbody");
const url = "http://localhost:8080/revues";
const revue =fetch(`${url}`);
revue.then((getRevueAlls)=>{
	console.log(getRevueAlls);

	const revuesData = getRevueAlls.json();
	console.log(revuesData);
	revuesData.then((revues)=>{
      for(var i =0 ;revues.length; i++ ){
     console.log(revues[i]);
	 const html = `<tr>
					<td>${revues[i].titre}</td>
					<td>${revues[i].ref}</td>
					<td>${revues[i].annee}</td>
					<td>${revues[i].prix}</td>
					<td><a href="modifierRevue.html?id=${revues[i].documentId}" class="btn btn-success">Modifier</a></td>
					<td><a href="?id=${revues[i].documentId}" class="btn btn-danger">Supprimer</a></td></tr>`
					

	 list.innerHTML +=html;
	
	}
	 
	});


})

// supprimer adherents 
fetch(`${url}/${revueId}`,{
	method: "DELETE",
	body: null,
	headers: {
		"Content-Type":"application/json",

	},
   
}).then((response) => (response.json)).then((response)=> console.log(response));
