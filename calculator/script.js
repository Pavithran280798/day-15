//create a div
let div = document.createElement('div');
div.setAttribute('class','container');
document.body.appendChild(div);


//create a table
let table = document.createElement('table');
table.setAttribute('id','div1');
table.setAttribute('class','table');
table.classList.add('class','table-bordered', 'border-dark','table-sm');


// add it to the body element
div.append(table);

//create a thead
let thead = document.createElement('thead');
table.append(thead);
//create a 1 row
let tr = document.createElement('tr');
thead.append(tr);

let th = document.createElement('th');
th.setAttribute('scope','col');
th.setAttribute('colspan','4');
tr.append(th);

let input = document.createElement('input');
th.append(input);
input.setAttribute('class','form-control');
input.setAttribute('type','text');
input.setAttribute('id','result');

//second row
let tr1 = document.createElement('tr');
thead.append(tr1);

let th2 = document.createElement('th');
th2.setAttribute('scope','col');
tr1.append(th2);
let button1 =document.createElement('button');
button1.setAttribute('id','clear');
button1.setAttribute('onclick','num("")');
button1.setAttribute('value','0]');
th2.append(button1);
button1.textContent="C";

let th3 = document.createElement('td');
tr1.append(th3);
let button2 =document.createElement('button');
button2.setAttribute('id','clear');
button2.setAttribute('onclick','num(" ")');
th3.append(button2);
button2.setAttribute('class','fa-solid fa-arrow-left');

let th4 = document.createElement('td');
tr1.append(th4);
let button3 =document.createElement('button');
button3.setAttribute('onclick','num(".")');
button3.setAttribute('value','.');
th4.append(button3);
button3.textContent=".";


let th5 = document.createElement('td');
tr1.append(th5);
let button4 =document.createElement('button');
button4.setAttribute('id','division');
button4.setAttribute('onclick','num("/")');
button4.setAttribute('value','/');
th5.append(button4);
button4.textContent="/";

//third row
let tr2 = document.createElement('tr');
thead.append(tr2);

let th6 = document.createElement('th');
th6.setAttribute('scope','col')
tr2.append(th6);
let button6 =document.createElement('button');
button6.setAttribute('onclick','num("7")');
button6.setAttribute('value','7');
th6.append(button6);
button6.textContent="7";

let th7 = document.createElement('td');
tr2.append(th7);
let button7 =document.createElement('button');
button7.setAttribute('onclick','num("8")');
button7.setAttribute('value','8');
th7.append(button7);
button7.textContent="8";

let th8 = document.createElement('td');
tr2.append(th8);
let button8 =document.createElement('button');
button8.setAttribute('onclick','num("9")');
button8.setAttribute('value','9');
th8.append(button8);
button8.textContent="9";

let th9 = document.createElement('td');
tr2.append(th9);
let button9 =document.createElement('button');
button9.setAttribute('id','multiplication');
button9.setAttribute('onclick','num("*")');
button9.setAttribute('value','*');
th9.append(button9);
button9.textContent="*";

//fourth row
let tr3 = document.createElement('tr');
thead.append(tr3);

let th10 = document.createElement('th');
th10.setAttribute('scope','col')
tr3.append(th10);
let button10 =document.createElement('button');
button10.setAttribute('onclick','num("4")');
button10.setAttribute('value','4');
th10.append(button10);
button10.textContent="4";

let th11 = document.createElement('td');
tr3.append(th11);
let button11 =document.createElement('button');
button11.setAttribute('onclick','num("5")');
button11.setAttribute('value','5');
th11.append(button11);
button11.textContent="5";

let th12 = document.createElement('td');
tr3.append(th12);
let button12 =document.createElement('button');
button12.setAttribute('onclick','num("6")');
button12.setAttribute('value','6');
th12.append(button12);
button12.textContent="6";

let th13 = document.createElement('td');
tr3.append(th13);
let button13 =document.createElement('button');
button13.setAttribute('id','sub');
button13.setAttribute('onclick','num("-")');
button13.setAttribute('value','-');
th13.append(button13);
button13.textContent="-";

//fifth row

let tr4 = document.createElement('tr');
thead.append(tr4);

let th14 = document.createElement('th');
th14.setAttribute('scope','col')
tr4.append(th14);
let button14 =document.createElement('button');
button14.setAttribute('onclick','num("1")');
button14.setAttribute('value','1');
th14.append(button14);
button14.textContent="1";

let th15 = document.createElement('td');
tr4.append(th15);
let button15 =document.createElement('button');
button15.setAttribute('onclick','num("2")');
button15.setAttribute('value','2');
th15.append(button15);
button15.textContent="2";

let th16 = document.createElement('td');
tr4.append(th16);
let button16 =document.createElement('button');
button16.setAttribute('onclick','num("3")');
button16.setAttribute('value','3');
th16.append(button16);
button16.textContent="3";

let th17 = document.createElement('td');
tr4.append(th17);
let button17 =document.createElement('button');
button17.setAttribute('id','add');
button17.setAttribute('onclick','num("+")');
button17.setAttribute('value','+');
th17.append(button17);
button17.textContent="+";

//sixth row
let tr5 = document.createElement('tr');
thead.append(tr5);

let th18 = document.createElement('th');
th18.setAttribute('scope','col')
tr5.append(th18);
let button18 =document.createElement('button');
button18.setAttribute('onclick','num("0")');
button18.setAttribute('value','0');
th18.append(button18);
button18.textContent="0";

let th19 = document.createElement('td');
tr5.append(th19);
let button19 =document.createElement('button');
button19.setAttribute('onclick','num("00")');
button19.setAttribute('value','00');
th19.append(button19);
button19.textContent="00";

let th20 = document.createElement('td');
th20.setAttribute('colspan','2');
tr5.append(th20);
let button20 =document.createElement('button');
button20.setAttribute('id','equal');
button20.setAttribute('onclick','solve()');
button20.setAttribute('value','');
th20.append(button20);
button20.textContent="=";


function num(val) 
{ 
document.getElementById("result").value+=val 
}  
function solve() 
{ 
let x = document.getElementById("result").value 
let y = eval(x) 
document.getElementById("result").value = y 
} 
function clear() 
{ 
document.getElementById("clear").value-=val 
} 
function AC()
{
document.getElementById("clear").value= ""
}