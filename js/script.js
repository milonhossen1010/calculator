let array = [];

//Value get from DOM
let calculate = (val) => {
    array.push(val);

    //Total value empty 
    document.getElementById('current-value').innerHTML = 0;

    

    //Array last value get
    let last = array[array.length-1];
    let last2 = array[array.length-2];
     
    if(last == '+' && last2 == '+' || last == '-' && last2 == '-' || last == '*' && last2 == '*' || last == '/' && last2 == '/' ){
        array.pop();
    }else{
        //live value show
    document.getElementById('previous').innerHTML = array.join('');
    }

}


//back function
function back(){
    array.pop();
    document.getElementById('previous').innerHTML = array.join('');
    document.getElementById('current-value').innerHTML = 0;
}

//All clear function
let all_clear = () => {
    array.length=0;
    document.getElementById('previous').innerHTML = array.join('');
    document.getElementById('current-value').innerHTML = 0;

}


//Total Calculator
let total = () => {
    

    //Array to string convert
    let string = array.join('');

    //String to int
    let int = eval(string);
    
    //total value print
    document.getElementById('current-value').innerHTML = int;

    
    array.length=0;
    

   console.log(array);

}

