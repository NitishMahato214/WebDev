let result=0;
let days=Number(prompt("Enter a number"))
if (!(days===String)){
    switch(days%7){
        case 0:
            result="FRIDAY";
            break;
        
        case 1:
            result="SATURDAY";
            break;
        case 2:
            result="SUNDAY";
            break;
        case 3:
            result="MONDAY";
            break;
        case 4:
            result="TUESDAY";
            break;
        
        case 5:
            result="WEDNESDAY";
            break;
        case 6:
            result="THURSDAY";
            break;
        
            
            
            
        
    }
    document.getElementById("display").innerHTML=`<h1>On ${days}th Day from today it is ${result}</h1>
    <h4>Note : - This Code automatically generates from calendar of 2025 </h4>
    <p>On the basis of above code you can find what day will be on nth day</p>`;

} else{
    document.getElementById("display").innerHTML=`<h2> only number input is acceptable</h2>`;
}