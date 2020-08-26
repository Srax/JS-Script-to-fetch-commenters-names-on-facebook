var commentCountElement = document.getElementsByClassName('_3bu3 _293g');
var loadMoreButton = document.getElementsByClassName(' _4sxc _42ft');

function getListOfNames() {
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


function loadAllComments() {
  setTimeout(function() {
    if (loadMoreButton != null && commentCountElement[0] != null) {
       console.log("Loading comments...");
        loadMoreButton[0].click();
      loadAllComments();
    } else {
        console.log("Finished loading comments...");
        setTimeout(function() {
            var nameArray = getListOfNames();
            saveToTxtFile(nameArray);
            console.log("FINISHED...")
            console.log("Total Names: " + nameArray.length);
        }, 250)

    }
  }, 250)
}

loadAllComments();