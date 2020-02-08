

var n="";
var op="";



function nine(){
n=n+document.getElementById("9").innerHTML;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);


}


function seven(){

n=n+document.getElementById("7").innerHTML;
document.getElementById("field").innerHTML=n;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);




}

function eight(){

n=n+document.getElementById("8").innerHTML;
document.getElementById("field").innerHTML=n;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);



}

function six(){

n=n+document.getElementById("6").innerHTML;
document.getElementById("field").innerHTML=n;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);


}

function five(){
n=n+document.getElementById("5").innerHTML;
document.getElementById("field").innerHTML=n;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);


}

function four(){
n=n+document.getElementById("4").innerHTML;
document.getElementById("field").innerHTML=n;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);




}

function three(){
n=n+document.getElementById("3").innerHTML;
document.getElementById("field").innerHTML=n;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);




}
function two(){
n=n+document.getElementById("2").innerHTML;
document.getElementById("field").innerHTML=n;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);


}


function one(){
n=n+document.getElementById("1").innerHTML;
document.getElementById("field").innerHTML=n;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);

}


function zero(){
n=n+document.getElementById("0").innerHTML;
document.getElementById("field").innerHTML=n;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);


}

function plus(){
n=n+document.getElementById("+").innerHTML;
op=document.getElementById("+").innerHTML;
document.getElementById("field").innerHTML=n;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);



}

function minus(){
n=n+document.getElementById("-").innerHTML;
op=document.getElementById("-").innerHTML;
document.getElementById("field").innerHTML=n;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);


}
function multiply(){
n=n+document.getElementById("*").innerHTML;
op=document.getElementById("*").innerHTML;
document.getElementById("field").innerHTML=n;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);


}
function divide(){
n=n+document.getElementById("/").innerHTML;
op=document.getElementById("/").innerHTML;
document.getElementById("field").innerHTML=n;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);


}

function answer(){

n=n.toString();
l=n.length;



if(n[l-1]==op){

document.getElementById("field").style.color="red";
document.getElementById("field").innerHTML="SYNTAX ERROR";
n="0";
}
else{


if(op!=""){


var a=n.split(op);


var n1=Number(a[0]);
var n2=Number(a[1]);
var res=0;



if(op=='+')
res=n1+n2;
if(op=='-')
res=n1-n2;
if(op=='X')
res=n1*n2;
if(op=='/'){
if(n2==0){
document.getElementById("field").style.color="red";
document.getElementById("field").innerHTML="MATH ERROR";
n="0";
return;
}
else
res=n1/n2;
}
}
else{
var l=n.length;
var s=n;
if(l<26)
res=n;
else
res=s.slice(l-25,l);


}

document.getElementById("field").innerHTML=res;
n=res.toString();
}

}

function clr(){


document.location.reload(true);
}




function point(){
n=n+document.getElementById(".").innerHTML;
document.getElementById("field").innerHTML=n;
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);



}

function back(){

l=n.length;
if(l<=1)
clr();


n=n.slice(0,l-1);
var l=n.length;
var s=n;
if(l<26)
document.getElementById("field").innerHTML=n;
else
document.getElementById("field").innerHTML=s.slice(l-25,l);


}



function percent(){

if(n!=""){
var a=Number(n);
document.getElementById("field").innerHTML=a/100;
a=a/100;
n=a.toString();
}
else{
document.getElementById("field").style.color="red";
document.getElementById("field").innerHTML="SYNTAX ERROR";

}


}

function root(){


if(n!=""){
if(n>=0){
var a=Number(n);
document.getElementById("field").innerHTML=Math.sqrt(a);
a=Math.sqrt(a);
n=a.toString();
}
else{
document.getElementById("field").style.color="red";
document.getElementById("field").innerHTML="MATH ERROR";
n="0";


}
}
else{
document.getElementById("field").style.color="red";
document.getElementById("field").innerHTML="SYNTAX ERROR";

}

}