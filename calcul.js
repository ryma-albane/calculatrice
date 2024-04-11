let output ="";

function clearoutput (){
    output="";
    updateoutput();
}

// function clearelm(output){
    
//     updateoutput();
// }
function appendNumber(number){
    output+=number;
    updateoutput();
}
function appendOperator(operaton){
    output+=operaton;
    updateoutput();

}

function calcule (){
    output=eval(output).toString();
    updateoutput();
}

function updateoutput(){
    document.getElementById("output").innerText=output;
}