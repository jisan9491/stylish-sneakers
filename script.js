var countItem = document.getElementById('count');

var notic = document.getElementById('notice');


var cnt = Number(countItem.innerText);

function increaseCount() {
    if(cnt === 10){
        notic.innerText = "You can't purchase more then 5 items";
        setTimeout(clearNotice, 3000);
        return;
    }
    cnt++;
   countItem.innerText = cnt;
   clearNotice();
}

function decreaseCount() {
    if(cnt === 1){
        notic.innerText = "Cart item can't be less then 1";
        setTimeout(clearNotice, 3000);
        return;
    

    }
    cnt--;
   countItem.innerText = cnt;
   clearNotice();

}


function clearNotice(){
    notic.innerText= "";
}


var addCart = document.getElementById('add');


function addToCart(){
    addCart.innerText = 'Added';
    return;

}


