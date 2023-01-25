const selectAdherent = document.querySelector("#adherents");
const adherents =fetch("http://localhost:8080/adherents");
adherents.then((getAdherentAlls)=>{
	
	const adherentsData = getAdherentAlls.json();
	adherentsData.then((adherentList)=>{
      for(var i =0 ;adherentList.length; i++ ){
	 const htmlSelect = `
	                <option value="${adherentList[i].adherentId}">${adherentList[i].nom}</option>`
					

					selectAdherent.innerHTML +=htmlSelect;
	
	}
	 
	});


})

//liste des documents 	
const selectDocument = document.querySelector("#documents");
const documents =fetch("http://localhost:8080/documents");
documents.then((getDocumentAlls)=>{
const documentsData = getDocumentAlls.json();
 documentsData.then((documentList)=>{
  for(var i =0 ;documentList.length; i++ ){
	console.log(documentList)
    const htmlSelectdocument = `<option id="document" value="${documentList[i].documentId}">${documentList[i].titre}</option>`
				

	selectDocument.innerHTML +=htmlSelectdocument;

			}
	 
		});
	
	
	})