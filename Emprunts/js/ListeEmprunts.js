const list = document.querySelector("#tbody");
const emprunt =fetch("http://localhost:8080/emprunts");
emprunt.then((getEmpruntAlls)=>{
	console.log(getEmpruntAlls);

	const empruntsData = getEmpruntAlls.json();
	console.log(empruntsData);
	empruntsData.then((emprunts)=>{
      for(var i =0 ;emprunts.length; i++ ){
	 const html = `<tr>
					<td>${emprunts[i].nom}</td>
					<td>${emprunts[i].titre}</td>
					<td>${emprunts[i].dateEmprunt}</td>
					<td>${emprunts[i].dateRetour}</td>
					<td><a href="?id=${emprunts[i].empruntId}" class="btn btn-success">Modifier</a></td>
					<td><a href="?id=${emprunts[i].empruntId}" class="btn btn-danger">Supprimer</a></td></tr>`
					

	 list.innerHTML +=html;
	
	}
	 
	});


})
//





