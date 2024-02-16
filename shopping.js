
let discountRate = getNumberFromText('discount-rate');

function getNameAndPriceByID(elemetnID){
    document.getElementById(elemetnID).addEventListener('click', function(){
    const itemName= document.getElementById(elemetnID).childNodes[3].childNodes[1].innerText;
    console.log(itemName);
    let itemContainer = document.getElementById('order-list')
    let addNewItem = document.createElement('li');
    addNewItem.textContent = itemName;
    itemContainer.appendChild(addNewItem);

    let totalPrice = parseFloat(document.getElementById('total-price').innerText);
    const itemPrice= parseFloat(document.getElementById(elemetnID).childNodes[3].childNodes[3].childNodes[1].innerText);
    let newTotalPrice = totalPrice + itemPrice;
    document.getElementById('total-price').innerText = newTotalPrice.toFixed(2);
    console.log(newTotalPrice);
    // let totalPrice = document.getElementById('total-price');
    var totalDiscount = ((newTotalPrice * discountRate)/100).toFixed(2);
    console.log(totalDiscount);
    setInnerText('discount', totalDiscount);
    var afterDiscount = (newTotalPrice - totalDiscount).toFixed(2);
    console.log(afterDiscount);
    setInnerText('discounted-price', afterDiscount) 
})}


getNameAndPriceByID('spoons');
getNameAndPriceByID('chopping-board');
getNameAndPriceByID('cooker');
getNameAndPriceByID('cap');
getNameAndPriceByID('jersey');
getNameAndPriceByID('shoes');
getNameAndPriceByID('chair');
getNameAndPriceByID('single-sofa');
getNameAndPriceByID('sofa');



