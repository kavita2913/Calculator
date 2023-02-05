let num = '';
let answer = ''

function add(value) {
    if (value == '*' || value == '/') {
        if (!num) {
            return;
        }
    }

    console.log(value);
    num = num + value;
    document.getElementById("input").value = num;
}
function ans() {
    answer = eval(num);
    document.getElementById("input").value = answer;
    answer = '';
    num = '';
}
function clr() {
    num = '';
    document.getElementById("input").value = "";
}
