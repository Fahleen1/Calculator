/*JavaScript code*/
/*Display the result*/

function solve(val){
    var result = document.getElementById('result');
    result.value += val;
}

/*Calculate the result*/
function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

/*Clear the screen */
function clearInput(){
    var v = document.getElementById("result");
    v.value = "";
}