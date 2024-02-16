function getNumberFromText(elementID){
   const discountRate = parseFloat(document.getElementById(elementID).innerText);
    return discountRate;
}
function setInnerText(textID, newText){
    document.getElementById(textID).innerText = newText;
}