import React, { useState } from "react";
import iconPerson from './images/icon-person.svg'
import iconDollar from './images/icon-dollar.svg'

function Calculator(){
   const [money, setMoney] = useState();
   const [tips, setTips] = useState(1);
    const [persons, setPersons] = useState(1);

    const peopleEntred = document.querySelectorAll(".money")[1];
    const error = document.querySelector('.error');

    const [tipAmount, setTipAmount] = useState("$0.00");
    const [total, setTotal] = useState("$0.00");


    
    function updateMoney(event){
       
        let value = event.target.value;
        if(value.length > 6)
            return;
        console.log(value);
        setMoney(value);
        setTipAmount("$" + (parseFloat(value / persons) * tips).toFixed(2) );
        setTotal("$" + (parseFloat(value / persons)).toFixed(2) );
    }
    function updatePerson(event){
        let value = event.target.value;
        if(value == 0){
            peopleEntred.style.border = "3px red solid";
            error.style.visibility = "visible";
        }
        else{
            peopleEntred.style.border = "3px hsl(172, 67%, 45%) solid";
            error.style.visibility = "hidden";
            console.log(value);
            setPersons(value);
            setTipAmount("$" + (parseFloat(money / value) * tips).toFixed(2) );
            setTotal("$" + (parseFloat(money / value)).toFixed(2) );

        }
        
    }
    function updateTips(event){
        let value = event.target.value;
        setTips(value / 100);
        if(event.t)
        setTipAmount("$" + (parseFloat(money / persons) * (value / 100)).toFixed(2) );
        setTotal("$" + (parseFloat(money / persons)).toFixed(2) );
    }
    function clearSelection(){
        const radioBtns = document.querySelectorAll("input[type=\"radio\"]");

        radioBtns.forEach(radioBtn => {
            if(radioBtn.checked === true)
                radioBtn.checked = false;
        });

    }
    function reset(){
        setMoney();
        setTips(1);
        setPersons(1);
        setTipAmount("$0.00");
        setTotal("$0.00");
        const radioBtns = document.querySelectorAll("input[type=\"radio\"]");

        radioBtns.forEach(radioBtn => {
            if(radioBtn.checked === true)
                radioBtn.checked = false;
        });

        document.querySelectorAll(".money")[0].value = "";
        document.querySelectorAll(".money")[1].value = "";
        document.querySelector(".tips-item:last-child").value = "";
    }

    return(
        <div className="tip-calc">
      <form action="#" className="form-splitter">
        <div className="bill">
        <label className="tit" for="bill">Bill</label>
        <br/>
        <img src={iconDollar} className="dollar-sign" alt="Dollar" />
        <input type="text" className="money" id="bill" onChange={updateMoney}/>
        
        <br/>
      </div>
      <div className="tip-percent">
        <label className="tit">Select Tip %</label>
        <div className="tips">
          
          <input type="radio" name="tiper" onChange={updateTips} value="5"  id="five" />
          <label className="tips-item" for="five">5%</label>
          <input type="radio" name="tiper" onChange={updateTips} value="10"  id="ten" />
          <label className="tips-item" for="ten">10%</label>
          <input type="radio" name="tiper" onChange={updateTips} value="15"  id="fifteen" />
          <label className="tips-item" for="fifteen">15%</label>
          <input type="radio" name="tiper" onChange={updateTips} value="25"  id="tweentyfive" />
          <label className="tips-item" for="tweentyfive">25%</label>
          <input type="radio" name="tiper" onChange={updateTips} value="50"  id="fifty" />
          <label className="tips-item" for="fifty">50%</label>
          <input type="radio" name="tiper" onChange={updateTips}  id="custom" />
          
            <input type="text" name="tiper" placeholder="Custom" className="tips-item" onClick={clearSelection} onChange={updateTips}/>
          
          
        </div>

      </div>
      <div className="number-persons">
          <label className="tit" for="person">Number of persons &nbsp;&nbsp;  <span class="error">can't be zero</span></label>
          <br />
          <img src={iconPerson} className="dollar-sign" alt="person" />
          
          <input type="text" id="person" className="money" onChange={updatePerson}/>
      </div>
      </form>     
    

  <div className="result">
    <p className="result-items">
      <span>Tip Amount</span>
      <br/>/person
    </p>
    <p className="result-items">{tipAmount}</p>
      <p className="result-items">

      <span>Total</span>
      <br/>/person
    </p>
    <p className="result-items price">{total}</p>
  <button className="button-reset" onClick={reset}>RESET</button>
</div>
    <script>
      
    </script>
</div>
    )
}

export default Calculator;