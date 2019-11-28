let changeButtonTxt= document.getElementById("changeTxt")
let viewShoppingCart= document.getElementById("viewShoppingCart");
let selectMoreItems=document.getElementById("selectShoppingCart");
let showingSelectMoreItemsElement = false;

selectMoreItems.style.display = "none";
viewShoppingCart.style.display = "block";
function changeView() {
    if (showingSelectMoreItemsElement === true) {
        selectMoreItems.style.disply="none";
        viewShoppingCart.style.display = "block";
        showingSelectMoreItemsElement = false;
    }else{
      changeButtonTxt.innerHTML="Select more items"
      selectMoreItems.style.display = "block"
      viewShoppingCart.style.display = "none"
      showingSelectMoreItemsElement = true
    }
}