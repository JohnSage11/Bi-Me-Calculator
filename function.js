//This function displays numbers on the display screen

function num(man){
         document.getElementById("displaybox").value += man;
}
num('1');
num('2');
num('3');
num('4');
num('5');
num('6');
num('7');
num('8');
num('9');
num('0');

//This function displays signs on the display screen
 function val(nan){
    document.getElementById('displaybox').value += nan;
 }
 val('+');
 val('-');
 val('*');
 val('/');
 val('**');
 val('.');
 val('* 3.1475');

 //This Clears ALL the screen
 function allClear(){
    document.getElementById('displaybox').value="";
 }
 allClear();

 //This clears the last digit only
 function del(){
    document.getElementById('displaybox').value=document.getElementById('displaybox').value.toString().slice(0,-1);
 }
 del();

 //This handles analysis and computing.

 function solution(){
    let x = document.getElementById('displaybox').value;
    if(!isNaN(x)){
        document.getElementById('displaybox').value = '0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0';
    }
    else{
    document.getElementById('displaybox').value = eval(x);
    }
 }
 solution();