/* ---- FUNCTIONALITY --------

1. WHEN ITEM IS ENTERED INTO TEXT INPUT FIELD,
   ITEM IS ADDED TO THE LIST.
2. WHEN ERASE BUTTON IS CLICKED, ALL ITEMS ARE
   REMOVED FROM LIST.
3. WHEN LIST ITEM IS CLICKED, A STRIKETHROUGH
   LINE IS PLACED THROUGH THE LIST ITEM.

*/

const eraseItems = document.querySelector('.eraser');
const input = document.getElementById('userInput');
const items = document.querySelector('.items');
const warning = document.querySelector('.warning');

let itemsArray = [];
let count = 0;
let maxItems = 24;

warning.textContent = `*There is a limit of ${maxItems} items`

// TODO - FUNCTION TO ADD ITEM TO LIST
input.addEventListener('keydown', (event) => {
    if(event.key == "Enter") {
        addItem();
    } else {
        console.log('Error');
    }
});


// TODO - FUNCTION TO ADD AND REMOVE STRIKETHROUGH FROM LIST ITEM
function addItem() {
    
    const item = document.createElement("h2");
    item.classList.add('testItem');

    if(userInput.value.length === 0) {
        alert('Please enter a grocery item');
    } else if(itemsArray.length + 1 >= 0 && itemsArray.length < maxItems -1) {
        count++;
        item.textContent = count + ". " + document.getElementById('userInput').value;
    } else {
        alert('Too many items');
    };


    item.addEventListener('click', () => {
        if(item.style.textDecoration != 'line-through') {
            item.style.textDecoration = 'line-through';
        } else {
            item.style.textDecoration = 'none';
        }
    });

    if(items.textContent === '') {
        itemsArray = [];
    } else if (itemsArray.length >= 0 && itemsArray.length < maxItems - 1) {
        itemsArray.push(userInput.value);
    } else {
        console.log('Too many items');
    };

    items.appendChild(item);    
    input.value = '';
};

// TODO - FUNCTION TO REMOVE ITEM FROM LIST
eraseItems.addEventListener('click', function() {
    items.textContent = "";
    itemsArray = [];
    count = 0;
});