// Get the elements
const codeArea = document.getElementById("code-area");
const copyButton = document.getElementById("copy-button");
const lockButton = document.getElementById("lock-button");



const savedCode = localStorage.getItem("savedCode");
if (savedCode) {
  codeArea.innerText = savedCode;
}else{
codeArea.innerText = `function greet() {
    console.log("Hello, World!");
}`;
}


// Copy the code to the clipboard when the copy button is clicked
// let copyClicked = flase;
copyButton.addEventListener("click", () => {
    // copyClicked = true;
    const textToCopy = codeArea.innerText;
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    copyButton.innerHTML = 'Copied';
    setTimeout(function(){
        copyButton.innerHTML = 'Copy';
    },3000)
});



// Lock/unlock the code editor
let isLocked = false;
lockButton.addEventListener("click", () => {
    isLocked = !isLocked;
    codeArea.contentEditable = !isLocked;
    lockButton.textContent = isLocked ? "Unlock" : "Lock";
});





// Save the code (you can add functionality to save to a server or local storage)
const saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", () => {
    const codeToSave = codeArea.innerText;
    localStorage.setItem("savedCode", codeToSave);
    saveButton.innerHTML = 'saved';
    setTimeout(() => saveButton.innerHTML = 'save', 5000);
  });
