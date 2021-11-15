var num=15
var f=0
if(num>1){
for(let i=1;i<num;i++){
    if(num%i==0){
    break
    }
    else{
        f=1
    }
}
if(f==1){
    console.log("prime")
}
else{
    console.log("Not prime")
}
}
else{
    console.log("Invalid number")
}