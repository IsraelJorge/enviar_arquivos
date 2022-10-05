const buttonAdd = document.querySelector(".button-add")
const formFile = document.querySelector("#formFile")


buttonAdd.addEventListener("click", () => {
    const selectExame = document.querySelector("#select-exames")
    const table = document.querySelector("table")
    
    
    if (selectExame.selectedIndex === 0 || formFile.value === "") {
        const containerAlert = document.querySelector(".container-alert")

        containerAlert.innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Selecione</strong> um tipo de arquivo.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `
        return
    }


    let selectedExame = selectExame.options[selectExame.selectedIndex].text

    const tr = document.createElement("tr")
    const typeFile = document.createElement("td")
    const preview = document.createElement("td")
    const containerPdf = document.createElement("embed")
    
    //tipo do arquivo selecionado
    typeFile.innerHTML = selectedExame

    //preview Pdf
    const pdfFile = formFile.files[0]
    let pdfFileURL = URL.createObjectURL(pdfFile) + "#toolbar=1"    
    containerPdf.setAttribute('src', pdfFileURL)
    containerPdf.setAttribute("type", "application/pdf")
    
    preview.appendChild(containerPdf)
    
    tr.appendChild(typeFile)
    tr.appendChild(preview)
    
    
    deleteRow(table, tr)
    
    table.appendChild(tr)

    //limpar os campos
    selectExame.selectedIndex = 0
    formFile.value = ""

       
})


const deleteRow = (table, tr) => {
    const buttonDel = document.createElement("td")
    const iconTrash = document.createElement("i")
    iconTrash.classList.add("fa-solid")
    iconTrash.classList.add("fa-trash-can")
    iconTrash.classList.add("icon-trash") 
    
    iconTrash.onclick = function () {
        table.removeChild(tr) 
    }

    buttonDel.appendChild(iconTrash)
    tr.appendChild(buttonDel)
}

