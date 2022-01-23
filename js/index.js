const billEntred = document.querySelectorAll(".money")[0];
const peopleEntred = document.querySelectorAll(".money")[1];
const tipA = document.querySelector('.result-items:nth-child(2)');
const total = document.querySelector('.result-items:nth-child(4)');
const error = document.querySelector('.error');
var string = "";
if(billEntred.value == "")
    string = "";
billEntred.addEventListener("keypress", (e) => {
    if(billEntred.value.length > 6)
        return;
    if(onlyNumberKey(e)){ 
        string += e.key;
    }
    
    
});
const custom = document.querySelector(".tips-item:last-child");
const rbTip = document.querySelectorAll('input[type="radio"]');
var tip = "100";

for(var i = 0 ; i < rbTip.length ; i++){
    let rbThis = rbTip[i];
    rbThis.addEventListener("click", () => {
        tip = rbThis.value;
        custom.value = "";
    });
}
 custom.addEventListener("click", ()=>{
    for(var i = 0 ; i < rbTip.length ; i++){
        rbTip[i].checked = false;
        tip = "";
        }
 });
 custom.addEventListener("keypress", (e) => {

    if(custom.value.length > 2)
        return;
    if(onlyNumberKey(e)){ 
        tip += e.key;
    }
    
    
});


    


var perPersonTotal;
var string2 = "";
peopleEntred.addEventListener("keypress", (e)=>{
    if(e.key== '0' && peopleEntred.value == ""){
        peopleEntred.style.border = "3px red solid";
        error.style.visibility = "visible";
    }
        else{
            peopleEntred.style.border = "3px hsl(172, 67%, 45%) solid";
            error.style.visibility = "hidden";
            string2 += e.key;
        
            perPersonTotal =  ((parseFloat(string)).toFixed(2) / parseInt(string2)).toFixed(2);
        
            tipA.innerHTML = "$" + (perPersonTotal * (parseInt(tip) / 100)).toFixed(2);

            total.innerHTML = "$" + perPersonTotal;
        }
})








function onlyNumberKey(evt) {
          
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}
function reset(){
    string = "";
    string2 = "";
    tip = "";
    billEntred.value = "";
    peopleEntred.value = "";
    custom.value = "";
    tipA.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
    for(var i = 0 ; i < rbTip.length ; i++){
        rbTip[i].checked = false;
        tip = "100";
        }
}