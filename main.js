window.onload = function() {
    const nodo = document.head;
    const fragment = document.createDocumentFragment();
    const nodoP = document.createElement("script");
    const attr = document.createAttribute("src");
    attr.value = "traerData.js";
    nodoP.setAttributeNode(attr);
    fragment.appendChild(nodoP);
    nodo.appendChild(fragment);
    
    // console.clear();
    // const element = document.querySelectorAll(`div[class="mani"]`);
    // const element = document.getElementsByClassName(`mani`);
    // console.log(element);

    const element = document.querySelectorAll(`p`);
    
    let focuseditable;
    validar: 
    for(let data of element){
        if(data.getAttribute('tabindex')==4){
            data.setAttribute("contenteditable","true");
            if(localStorage.getItem("Datos")){
                document.body.append(localStorage.getItem("Datos"));
                console.log(localStorage.getItem("Datos"));
            }
            focuseditable = data;
            break validar;
        }
    }
    focuseditable.addEventListener("blur", function(){
        const node = document.createElement("h1");
        const texto = document.createTextNode(this.innerText)
        const framen = document.createDocumentFragment();
        node.appendChild(texto);
        framen.appendChild(node);
        localStorage.setItem("Datos", framen);

    });
};