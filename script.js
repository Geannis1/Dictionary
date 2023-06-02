let words = [];
let i = 0;
let found = 0;

function save() {
    words[i] = document.getElementById("addInput").value;
    ++i;
    document.getElementById("addInput").value = '';
}

function search() {
    for(let j = 0; j <= words.length; ++j){
        if(words[j] === document.getElementById("searchInput").value) {
            found = 1;
            document.getElementById("searchInput").value = '';
            alert("Word found");
            break;
        }
    }
    if(found == 0){
        document.getElementById("searchInput").value = '';
        alert("Word not found");
    }
    found = 0;
}