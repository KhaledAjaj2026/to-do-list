let rowCounter = 0;
function addItem() {
    const item = document.getElementsByName("item")[0].value;
    const date = document.getElementsByName("date")[0].value;
    if (item && date) {
        rowCounter++;
        let notebook = document.getElementById("notebook-page");
        notebook.innerHTML += 
        `
        <div id="row-${rowCounter}">
            <div class="binder-hole"></div>
            <div class="list-item">
                <p class="list-item_p">${item}<span class="due">${date}</span><span class="delete" onclick="deleteRow(${rowCounter})">X</span></p>
            </div>
            <hr>
        </div>
        `;
        document.getElementsByName("item")[0].value = "";
        document.getElementsByName("date")[0].value = "";
    } else {
        alert("Input fields incomplete.");
    }
}
function deleteRow(e) {
    const divToDelete = document.getElementById(`row-${e}`);
    divToDelete.remove();
    rowCounter--;
}