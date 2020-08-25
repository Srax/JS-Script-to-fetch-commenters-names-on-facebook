 function saveCommentersNamesToArray() {
    let foundElements = document.querySelectorAll('*[class^="_6qw4"]');
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
  var textDoc = document.createElement('a');
  textDoc.href = 'data:attachment/text,' + encodeURI(arr.join('\n'));
  textDoc.target = '_blank';
  textDoc.download = 'Konkurrence_Deltagere.txt';
  textDoc.click();
 }

var nameArray = saveCommentersNamesToArray();
saveToTxtFile(nameArray);

console.log("Total Names: " + nameArray.length);