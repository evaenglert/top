// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redParag = document.createElement('p');
redParag.style.color = 'red';
redParag.textContent = 'Hey, I am red!';

content.appendChild(redParag);

const blueHeader = document.createElement('h3');
blueHeader.style.color = 'blue';
blueHeader.textContent = 'I am a blue h3!';


content.appendChild(blueHeader);

const divPart = document.createElement('div');
divPart.setAttribute('style', 'border: 1px solid black; background-color: pink');

content.appendChild(divPart);

const header = document.createElement('h1');
header.textContent = "I am in a div";

const paragraph = document.createElement('p');
paragraph.textContent = "ME TOO!";

divPart.appendChild(header);
divPart.appendChild(paragraph);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  })
})
