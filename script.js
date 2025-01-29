const addItemBtn = document.querySelector("#add-item-btn");
const addDealBtn = document.querySelector("#add-deal-btn");
const itemsParentBox = document.querySelector("#items-parent-box");
const totalDisplay = document.querySelector("#total-display");
const checkoutBtn = document.querySelector("#checkout-btn");
let total = 0.00;

function addItem(e) {
    
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.dataset.type ='item';
    
    const itemPrice = document.createElement('input');
    itemPrice.classList.add('price');
    itemPrice.setAttribute('type', 'number');
    itemPrice.setAttribute('placeholder', 'Price');
    
    const itemQuantity = document.createElement('input');
    itemQuantity.classList.add('quantity');
    itemQuantity.setAttribute('type', 'number');
    itemQuantity.setAttribute('placeholder', 'Quantity');

    const itemDelete = document.createElement('button');
    itemDelete.innerText = "❌";
    itemDelete.addEventListener('click', removeItem);
    
    const timesSpan = document.createElement('span');
    timesSpan.innerText = 'X';

    const forSpan = document.createElement('span');
    forSpan.innerText = 'for';

    if (e && e.target.dataset.type == 'deal') {
        const itemQuantity2 = document.createElement('input');
        itemQuantity2.classList.add('quantity2');
        itemQuantity2.setAttribute('type', 'number');
        itemQuantity2.setAttribute('placeholder', 'Quantity');

        newItem.appendChild(itemQuantity);
        newItem.appendChild(forSpan);
        newItem.appendChild(itemPrice);
        newItem.appendChild(timesSpan);
        newItem.appendChild(itemQuantity2);
        newItem.appendChild(itemDelete);
        newItem.dataset.type = 'deal';
        itemsParentBox.appendChild(newItem);
    } else {
        newItem.appendChild(itemPrice);
        newItem.appendChild(timesSpan);
        newItem.appendChild(itemQuantity);
        newItem.appendChild(itemDelete);
        itemsParentBox.appendChild(newItem);
    }
}

function removeItem(e) {
    itemsParentBox.removeChild(e.target.parentNode);
}

function checkout() {
    const allItems = document.querySelectorAll('.item');
    allItems.forEach(item => {
        if(item.dataset.type == 'item') {
            const p = item.querySelector('.price').value || 0;
            const q = item.querySelector('.quantity').value || 0;
            // console.log(q * p);
            total += q * p;
        } else {
            const p = item.querySelector('.price').value || 0;
            const q = item.querySelector('.quantity').value || 1;
            const f = item.querySelector('.quantity2').value || 1;


            total += (f/q) * p;
        }
    })

    totalDisplay.value = total;
}

addItemBtn.addEventListener('click', addItem);
addDealBtn.addEventListener('click', addItem);
checkoutBtn.addEventListener('click', checkout);
document.addEventListener('DOMContentLoaded', () => {
    addItem();
    checkout();
});