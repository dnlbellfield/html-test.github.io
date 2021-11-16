const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}
/*
Select elements ( create or select html elements)

Add text to <p> element

Append <p> and a <ul> to the document.body

Create an event handler (target = <html>, onclick): 
  FIRST:
  create an <li> element
  capture text input from prompt, set its content to a Prompt
  append the <ul> element on the body with the <li> with text content from prompt
  
  THEN:
  After an <li> element has been appended to the <ul>
  ### create an edit like feature, when an li element is clicked, change
  its textContent property to the output of a new Prompt()
  Add an onclick event handler that takes in an 'e' event argument
  run "e.stopPropagation();" 
  




*/