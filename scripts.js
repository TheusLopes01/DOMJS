// getElementByID()

//console.log(document.getElementById('blog-title'))

//getElementByClassName()

//const element = document.getElementsByClassName('blog-title');
//console.log(element)

// getElementByTagName()
//const element = document.getElementsByTagName('h1');
//console.log(element)

// querySelector()
//const element = document.querySelector('.my-blog');
//console.log(element)

// querySelectorAll()

//const elements = document.querySelectorAll('#meu-blog')

//elements.forEach(el => console.log(el))

// qual usar?

// getElementById (element)
// getElementbyClassName (HTMLCollection)
// getElementsByTagName (HTMLCollection)
// querySelector (element)
// querySelectorAll (nodelist)

// manipulando conteúdo
// textContent
//const element = document.querySelector('h1')

//element.textContent += ", Olá devs!"

//console.log(element.textContent)

// manipulando conteúdo
// innerText
//const element = document.querySelector('h1')

//element.innerText = "Olá devs!"

// manipulando conteúdo
// innerHTML
//const element = document.querySelector('h1')

//element.innerHTML = "Olá devs! <small>!!!</small>"

// manipulando conteúdo
// value
//onst element = document.querySelector('input')

//element.value = "Valor que eu quiser"

//console.log(element.value)
//element.value = "outro valor"

// manipulando elementos
// atributos

//const header = document.querySelector('header')
//header.setAttribute('id', 'header')

//const headerID = document.querySelector('#header')

//console.log(headerID.getAttribute('class'))

//header.removeAttribute('id')

// alterando estilos

//const element = document.querySelector('body')

//element.style.backgroundColor = 'beige'
//console.log(element.style.backgroundColor)

// alterando estilos
// classList

//const element = document.querySelector('body')

//element.classList.add('active', 'green')
//console.log(element.classList)
//element.classList.remove('active')
//element.classList.toggle('active')

// navegando pelos elementos
// parentNode parentElement

//const body = document.querySelector('body')

//console.log(body.parentElement)

// Navegando pelos elementos
// childNodes children
//const el = document.querySelector('body')

//console.log(el.children)

// firstChild firstElementChild

// lastChild lastElementChild

// navegando pelos elementos
// nextSibling nextElementSibling

//const el = document.querySelector('header')
//console.log(el.nextSibling)

// previousSibling previousElementSibling

// criando e adicionando elementos

// createElement

// append prepend

//const div = document.createElement("div")
//div.innerText = "Olá devs!"

//const body = document.querySelector("body")

//body.append(div)
//body.prepend(div)

// adicionando elementos
// insertBefore

//const div = document.createElement("div")
//div.innerText = "Olá devs!"
//const body = document.querySelector("body")
//const script = body.querySelector("script")
//body.insertBefore(div, script)

// eventos

//function print() {
//console.log("print")
//}

//const input = document.querySelector("input")

//input.onkeydown = function () {
//console.log("rodei")
//}

//const h1 = document.querySelector('h1');

//h1.addEventListener('click', print)

//function print() {
//console.log("print")
//}

// argumento event

//const input = document.querySelector("input")

//input.onkeydown = function (event) {
  //console.log(event.currentTarget.value)
//}


