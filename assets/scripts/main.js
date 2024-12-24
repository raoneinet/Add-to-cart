//Array cart onde armazena itens para comprar
let cart = [ ]

//Elemento html input
let inputItem = document.getElementById("add-to-cart")

//Elemento html button
let addBtn = document.getElementById("add-button")

//Adicionar evento de clicque em button
addBtn.addEventListener("click",()=>{
    let inputValue = inputItem.value
    
    //Verifica se input está vazio
    if(inputValue != ""){
        cart.push(inputValue)
    }else{
        alert("Por favor, insira um item no campo.")
        
        return
    }

    clearInput()
    showItems()
})

//Renderizar items na tela
function showItems(){
    let result = document.querySelector(".result")
    let ul = document.createElement("ul")
    ul.setAttribute("class", "ul-items")
    let li = document.createElement("li")
    li.setAttribute("class", "items-to-buy")


    //mapeia array
    cart.forEach((item, index)=>{
        li.textContent = item
    
        ul.appendChild(li)
    })

    //faz Append de elementos
    result.append(ul)
}

//Limpar input
function clearInput(){
    inputItem.value = ""
}