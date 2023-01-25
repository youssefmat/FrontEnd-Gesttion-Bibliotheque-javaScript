
	
	//ajouter documents
	const form = document.querySelector("form");
    form.addEventListener('submit',e =>{
	   e.preventDefault();
	   let adherentId = document.getElementById("adherent").value;
	   console.log(adherentId)
	   let documentId = document.getElementById("document").value;
	   console.log(documentId)
	   let dateEmprunt = document.getElementById("dateEmprunt").value;
	   let dateRoteur  = document.getElementById("dateRoteur").value;
		const NewDocument ={
		
		   dateEmprunt: dateEmprunt,
		   dateRoteur: dateRoteur
   
	   }
   if(NewDocument !=null){
   fetch("http://localhost:8080/documents"`${/adherentId/documentId}`,{
	   method: "POST",
	   body: JSON.stringify(NewDocument),
	   headers: {
		   "Content-Type":"application/json",
   
	   },
   
   }).then((response) => (response.json)).then((response)=> console.log(response));
  // window.location.assign("index.html");
   
   }else{
	   alert("add error !")
   }
   });

