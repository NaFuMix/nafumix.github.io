import { certificate } from "./data.js";

const container = document.getElementById("certificate")

certificate.forEach(cer => {
    var n = 0
    let div_element = document.createElement("div")
    div_element.setAttribute("class", "certificate-img")

    let img_element = document.createElement("img")
    img_element.src = cer.pic_url
    img_element.addEventListener("click", function() {
        n += 1
        if(n == 1){
            img_element.style.scale = 1.5
        }else if( n == 2){
            img_element.style.scale = 1.0
            n = 0
        }
    })

    let h2_element = document.createElement("h2")
    h2_element.innerHTML = cer.name

    div_element.appendChild(img_element)
    div_element.appendChild(h2_element)
    container.appendChild(div_element)
})