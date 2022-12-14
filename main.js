/*var a,b;
a=[4,3,5,6,-2,-3,-4,10,20];
b=0;
for(i=0;i<a.length;i++){
    if(a[i]>0){
       b=b+a[i]
    }
   
}
console.log(b)*/
 
var a=parseInt(prompt("main array"));
var b=[]; 
var d=0;
for(var i=0;i<a;i++){
    b[i]=parseInt(prompt("sub array"));
}
    document.write(b+"<br>")

for(var j=0;j<a; j++){
    if(b[j]>0){
       d=d+b[j]
    }
    
}
document.write(d)
  