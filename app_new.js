function getListOfNames() {
    let foundElements = document.querySelectorAll('*[class^="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi lrazzd5p oo9gr5id"]');
    let arrOfNames = [];
    if(foundElements != null) {
        for(let i = 0; i < foundElements.length; i++) {
			if(arrOfNames.indexOf(foundElements[i].innerText.toString()) !== -1){}
        	else {arrOfNames.push(foundElements[i].innerText.toString());}
        }
    }
    	return arrOfNames;
}

function saveToTxtFile(arr) {
    try {
        console.log("Creating File...")
        var textDoc = document.createElement('a');
        textDoc.href = 'data:attachment/text,' + encodeURI(arr.join('\n'));
        textDoc.target = '_blank';
        textDoc.download = 'Konkurrence_Deltagere.txt';
        textDoc.click();        
    } catch (error) {
        console.log(error);
    }
 }


 var nameArray = getListOfNames();
 saveToTxtFile(nameArray);
 console.log("Finished... \nName Count: " + nameArray.length);