const ContentCopy = document.getElementById('copyElm')

function CopyElement() {
    const ContentCopy = document.getElementById('copyElm')
    console.log(ContentCopy)

    const content = ContentCopy.textContent

    const Textarea = document.createElement('textarea')
    Textarea.value = content

    document.body.appendChild(Textarea)
    Textarea.select()
    document.execCommand('copy')

    document.body.removeChild(Textarea)
    
    const elementAccept = document.querySelector('.element')
    elementAccept.style.display = 'block';
    setTimeout(() => {
        elementAccept.classList.add('element--visible') 
    }, 10);
}

ContentCopy.addEventListener('click', CopyElement)

