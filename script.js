const tesseract = require("node-tesseract-ocr")

const config = {
    lang: "tel+eng"
}


let uploadFile = document.getElementById("pic-text");

let displayText = document.getElementById("text-display");

let path = document.getElementById("custom-path")

displayText.innerText = "... Text appears here ... "


if(uploadFile){
    uploadFile.addEventListener('change',(event)=>
    {
        path.innerText = event.target.files[0].path;
        tesseract.recognize( event.target.files[0].path, config)
        .then(text => {
            displayText.innerText = text
        })
        .catch(error => {
            console.log(error.message)
        })

    })
}