import React, { useState } from 'react'
import data from "./Data";
function Ques() {
    const [quest , changeQuest] = useState(data[0]);
    const [total] = useState([]);
    const [count , setcount] = useState(1);
    var array = quest.option;
    const changeQues = ()=>{
        try {
            var answer = document.querySelector(`input[name="Kanha"]:checked`);
                if(answer.value === quest.correct){
                   total.push(1)    // console.log(total);
                }
            if(count < data.length){
                document.querySelector(`input[name="Kanha"]:checked`).checked = false;
                changeQuest(data[count]);
                setcount(count+1);
                console.log("counts :"+count);
            }else{
                document.querySelector(".ques").innerHTML = `
                    <div style="color:white; box-shadow:0px 0px 2px white; padding:20px 10px; text-align:center; "> 
                        <h3 className="marks"> Your marks is : ${total.length}/${data.length}</h3>
                        <p style="font-size:15px;"> This quiz is Created By Kanhaiya lal Verma  for practice purpose 
                        </p>
                    </div>
                `
            }   
        } catch (error) {
            alert(error +"Please Filled option ");
        }       
    }
    return (
        <>
            <div className="ques b-shadow">
               <div className='heading b-shadow'>
                    <span>{count}/{data.length}</span>
                    <span>Quiz</span>
               </div>
              <h3 className="quesName">{count}. {quest.ques}</h3>
              <div className="ques-box">
              {array.map((item,index)=>
                <div className="option b-shadow">
                  <input type="radio" className="ques" id = {item}  name= "Kanha"  key={index} value = {item} />
                  <p>{item}</p>
                </div>
              )}
              </div>
              <button type="button" className="next b-shadow" onClick ={changeQues}>Next</button>
            </div>  
        </>
    )
}

export default Ques;
