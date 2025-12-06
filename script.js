import { datas } from "./data.js";

const project = document.getElementById("project")

datas.forEach(data => {
    let div_flex_row = document.createElement("div")
    div_flex_row.setAttribute("class", "flex-row")

    let div_element = document.createElement("div")
    div_element.setAttribute("class", "text-container")

    let h1_element = document.createElement("h1")
    h1_element.innerHTML = data.header

    let p_element = document.createElement("p")
    p_element.innerHTML = data.text

    let img_element = document.createElement("img")
    img_element.src = data.img_url

    let button_element = document.createElement("button")
    button_element.innerHTML = "Link"
    button_element.setAttribute("class", "button")
    button_element.addEventListener("click", function () {
        window.open(data.link, "_blank")
    })

    let hr_element = document.createElement("hr")
    

    div_element.appendChild(h1_element)
    div_element.appendChild(p_element)
    div_element.appendChild(button_element)

    div_flex_row.appendChild(div_element)
    div_flex_row.appendChild(img_element)
    project.appendChild(div_flex_row)
    project.appendChild(hr_element)
})


