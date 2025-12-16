import { certificate } from "./data.js";

const container = document.getElementById("certificate")

certificate.forEach(cer => {
    let n = 0

    let div_element = document.createElement("div")
    div_element.setAttribute("class", "certificate-img")
    
    let img_element = document.createElement("img")
    img_element.src = cer.pic_url
    img_element.addEventListener("click", () => {
        if (n == 0) {
            img_element.classList.contains("scale")
            container.querySelectorAll('.scale').forEach(el => el.classList.remove('scale'))
            if (!img_element.classList.contains("scale")) {
                img_element.classList.add('scale')
                h2_element.classList.add('scale')
            }
            n += 1
        } else if (n == 1) {
            container.querySelectorAll('.scale').forEach(el => el.classList.remove('scale'))
            n = 0
        }
    })

    let h2_element = document.createElement("h2")
    h2_element.innerHTML = cer.name

    div_element.appendChild(img_element)
    div_element.appendChild(h2_element)
    container.appendChild(div_element)
})