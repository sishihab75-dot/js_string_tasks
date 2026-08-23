const string = "saydulislamshihab";

let str = 0;
let newstr ="";
for(let i=0;i<string.length;i++){

    if(string[i] == "a" || string[i] == "s"){
        str++;
    }
    else{
        newstr = newstr + string[i];
    }
}
console.log(str);
console.log(newstr);
