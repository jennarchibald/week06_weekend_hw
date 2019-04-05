# Weekend Homework Recap: DOM

1. What is the return value of `document.createElement`? And what does it accept as an argument?

'createElement' accepts a string as an argument and returns an element of that type - e.g. 'h1' returns a h1 element

2. What is the return value of `document.querySelector`? And what does is accept as an argument?

'querySelector' takes a string to identify an element in the document as an argument. this could be a html element type, a class or an id. it returns the first element it finds which matches the identifier

3. What is the return value `document.querySelectorAll`?

'querySelectorAll' takes a string to identify elements in the document as an argument. it returns all elements which match the identifer.

4. What is the difference between using `textContent` and `appendChild`?

'textContent' allows you to set or alter the text displayed by an element
'appendChild' allows you to add an element as a child of the targeted element

5. What is the event we handle to access the values of a form, and how do we access the values?

the 'submit' event. we can access the values using event.target.( name of the input ).value
