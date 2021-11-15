var num=5
if(num<0){
    console.log("error")
}
else if(num==0){
    console.log("factorial of 0 is 1")
}
else{
let f=1
for(let i=num;i>0;i--){
    f=f*i
}
console.log(f)
}