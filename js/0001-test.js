export const test = () => {
    
    const a = document.createElement('a');
    a.href = 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line';
    a.textContent = 'my last not resolved chellenge';
    a.style.display = 'block';
    a.style.paddingTop = '30px';

    const htmlBody = document.querySelector('body').appendChild(a);

};