let headLine = document.querySelector('#HeadLine');
// let headLine = document.getElementById('HeadLine');
headLine.style.color = 'red';
headLine.addEventListener('mouseover',function() {
    headLine.style.color = 'black';
});
headLine.addEventListener('mouseout',function() {
    headLine.style.color = 'red';
});
function heading(){
    headLine.style.color = 'green';
    headLine.style.fontSize = '2rem';
    // headLine.classList.add('#HeadLine');
}

function paragraph(){
    headLine.style.color = 'black';
    headLine.style.fontSize = '1rem';
}

/* Image PortFolio Section 

let portfolio = document.querySelectorAll('img');
portfolio.addEventListener('mouseover', hoverF);

function hoverF(){
    portfolio.style.width = '200px';
}
portfolio.addEventListener('mouseout', unhoverF);
function unhoverF(){
    portfolio.style.width = '250px';
    portfolio.innerHTML = 'heloo';
}
*/

let portfolio = document.querySelectorAll('img');

portfolio.forEach((img) => {
  img.addEventListener('mouseover', hoverF);
  img.addEventListener('mouseout', unhoverF);
});

function hoverF() {
  this.style.width = '240px';
}

function unhoverF() {
  this.style.width = '250px';
}
