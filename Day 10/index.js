// Task 1: Change text content on button click
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('text').textContent = 'The text has been changed!';
});

// Task 2: Toggle image visibility on double-click
document.getElementById('toggleImage').addEventListener('dblclick', function() {
    const image = document.getElementById('toggleImage');
    image.style.display = image.style.display === 'none' ? 'block' : 'none';
});

// Task 3: Change background color on mouseover
document.getElementById('hoverElement').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

// Task 4: Reset background color on mouseout
document.getElementById('hoverElement').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'lightblue';
});

// Task 5: Log key pressed to console on keydown
document.getElementById('inputField').addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

// Task 6: Display current value on keyup
document.getElementById('inputField').addEventListener('keyup', function() {
    document.getElementById('displayText').textContent = this.value;
});

// Task 7: Prevent form submission and log form data
document.getElementById('sampleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
});

// Task 8: Display selected value on change
document.getElementById('dropdown').addEventListener('change', function() {
    document.getElementById('selectedValue').textContent = `Selected: ${this.value}`;
});

// Task 9: Log text content of clicked list item
document.getElementById('itemList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('Clicked item:', event.target.textContent);
    }
});

// Task 10: Event delegation for dynamically added items
// Example of dynamically adding a new item
const newItem = document.createElement('li');
newItem.textContent = 'New Item';
document.getElementById('itemList').appendChild(newItem);
