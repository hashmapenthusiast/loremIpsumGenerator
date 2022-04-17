const button = document.querySelector('#lorem')

function makeLorem(paragraphs = 1){
    let newParagraph = document.createElement('p');
    for (let i = 0; i < 150; i++){
        newParagraph.textContent+= String.fromCharCode(Math.floor(Math.random()*26)+97)
    }
    document.body.appendChild(newParagraph)
}

button.addEventListener('click', makeLorem)