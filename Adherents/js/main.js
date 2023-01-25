const list = document.querySelector("#tbody");
//const id = document.querySelector("#id");
//const noma = document.querySelector("#nom");
//const addresse = document.querySelector("#address");
//const cina = document.querySelector("#cin");
//const dateNaissance = document.querySelector("#date")



//fetch("http://localhost:8080/adherents/G12345")
//.then(reponse => reponse.json())
//.then(reponse2 => console.table(reponse2));

const adherent =fetch("http://localhost:8080/adherents");
adherent.then((Res)=>{
	console.log(Res);

	const adherentData = Res.json();
	console.log(adherentData);
	adherentData.then((adh)=>{
      for(var i =0 ;adh.length; i++ ){
    //  console.log(adh[i]);
	//  const adherentid = adh[i].adherentId;
	//  const nom =adh[i].nom;
	//  const address =adh[i].addresse;
	//  const cin =adh[i].cin;
	//  const dateN = adh[i].dateNaissance;
	 const html = `<tr>
					<td>${adh[i].nom}</td>
					<td>${adh[i].addresse}</td>
					<td>${adh[i].cin}</td>
					<td>${adh[i].dateNaissance}</td>
					<td><a href="?id=${adh[i].adherentId}" class="btn btn-success">Modifier</a></td>
					<td><a href="?id=${adh[i].adherentId}" class="btn btn-danger">Supprimer</a></td></tr>`
					

	 list.innerHTML +=html;
	
	}
	 
	});


})


/*function getAdherentsAlls(){
	adherent.then((Res)=>{
		
		const adherentData = Res.json();
		console.log(adherentData)
		adherentData.then((adh)=>{
			//console.log(adh[1]);
	for(var i =0 ; i<adh.lenght;i++){
		console.log(adh[i]);
		document.getElementsByTagName('table')[0].insertAdjacentHTML("beforeend","<tr><td>"+adh[i].nom+"</td><td>"+adh[i].addresse+"</td><td>"+adh[i].cin+"</td><td>"+adh[i].dateNaissance+"</td></tr>")
	}
})

	})
}
getAdherentsAlls();
*/
