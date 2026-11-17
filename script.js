const editor = document.getElementById("editor");

document.getElementById("bgColor").addEventListener("input", function() {
    editor.style.backgroundColor = this.value;
});

document.getElementById("textColor").addEventListener("input", function() {
    editor.style.color = this.value;
});

document.getElementById("fontFamily").addEventListener("change", function() {
    editor.style.fontFamily = this.value;
});

document.getElementById("fontSize").addEventListener("input", function() {
    editor.style.fontSize = this.value + "px";
});

function formatText(command) {
    editor.focus();
    document.execCommand(command, false, null);
}

function clearText() {
    editor.innerHTML = "";
}

function resetEditor() {
    document.getElementById("bgColor").value = "#ffffff";
    document.getElementById("textColor").value = "#222222";
    document.getElementById("fontFamily").value = "Arial";
    document.getElementById("fontSize").value = 18;

    editor.style.backgroundColor = "#ffffff";
    editor.style.color = "#222222";
    editor.style.fontFamily = "Arial";
    editor.style.fontSize = "18px";
}