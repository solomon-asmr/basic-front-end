function maxDigitt(x){
    if(x < 10){        
        return x;
    }
    let lastdigit = x % 10;
    x = (x - lastdigit) / 10;
    let maxdigitofall = maxDigitt(x);
    if(lastdigit > maxdigitofall){
        return lastdigit;
    }
    return maxdigitofall;

}
function anotherOne(){
    let n1 = document.getElementById("num1").value;
    document.getElementById("maxd").value = maxDigitt(n1);
}
function sumOfDigits(y){
    if(y < 10){        
        return y;
    }
    let lastdigit = y % 10;
    y = (y - lastdigit) / 10;    
    return sumOfDigits(y) + lastdigit;
}
function sumdig(){
    let num=document.getElementById("num2").value;
    document.getElementById("sdig").value = sumOfDigits(num);
}
function reversNums(x,y=0){
    if (x < 10) return y * 10 + x;
    let lastNum = x%10;
    let digitNum = (x - lastNum)/10;
    let totNum  = reversNums(digitNum, y * 10 + lastNum)
    return totNum
}
function reverseDigit(){
    let n2=document.getElementById("num3").value;
    document.getElementById("rdig").value = reversNums(n2);
    
}
function powerOfNum(x,y){
    if(x==0 ){
        if(y==0)
            return -1;
        return 0;
    }
    if(y==0){
        return 1;
    }
    return x*powerOfNum(x,y-1);
}
function expo(){
    let n3=document.getElementById("num4").value;
    let n4=document.getElementById("num5").value;
    document.getElementById("Rpower").value = powerOfNum(n3,n4);
}
