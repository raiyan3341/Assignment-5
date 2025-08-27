1.
getElementById is Selects one element by its unique id. Returns a single element.
getElementsByClassName is Selects all elements with a class. Returns a live HTMLCollection.
querySelector is Selects the first element that matches any CSS selector.
querySelectorAll is Selects all elements matching any CSS selector. Returns a static NodeList.

2.
const p = document.createElement("p");
p.textContent = "Hello World";
document.body.appendChild(p); 

3.
When an event happens on an element, it first runs on that element and then “bubbles up” to its parent, grandparent, all the way to the document.
Works like: Water bubbles rising from the bottom to the top.

document.getElementById("child").addEventListener("click", function() {
  alert("Child clicked!");
});

document.getElementById("parent").addEventListener("click", function() {
  alert("Parent clicked!");
});


4.
Instead of adding event listeners to many child elements, you add one listener to a parent and handle events for children using event bubbling.
Why useful:
Fewer event listeners better performance.
Works for dynamically added elements.
Cleaner, simpler code.

5.
preventDefault() : Stops the default browser action (like following a link, submitting a form)
stopPropagation() : Stops the event from bubbling up to parent elements
