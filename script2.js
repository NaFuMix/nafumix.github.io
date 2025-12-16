import { certificate } from "./data.js";

const container = document.getElementById("certificate")

certificate.forEach(cer => {

    let div_element = document.createElement("div")
    div_element.setAttribute("class", "certificate-img")

    let img_element = document.createElement("img")
    img_element.src = cer.pic_url
    // img_element.addEventListener("click", () => {
    //     img_element.setAttribute("class","")
    // })

    let h2_element = document.createElement("h2")
    h2_element.innerHTML = cer.name

    div_element.appendChild(img_element)
    div_element.appendChild(h2_element)
    container.appendChild(div_element)
})