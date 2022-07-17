import React from 'react'
import { Button, Intent} from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import style from './styles.module.css'
import Question from './Question';

function QuizPageMain() {

    const [questionList,setquestionList]=React.useState([]);
    const[id,setId]=React.useState(0);
    const createQuestion=()=>{
        var key1=id;
        setId(id=>id+1);
        console.log("key1 "+key1)
        setquestionList((prev)=>[...prev,key1]);
    }
    const deleteQuestion=(key2)=>{
  
        const updateList=questionList.filter((value)=>{
         
            return(value!==key2)
          
           
        })
        console.log(updateList.length+"ulength")
        setquestionList(updateList);
    
    }
 
       
  return (
    <div className={style.mainDiv}>
     < Button onClick={createQuestion} intent={Intent.PRIMARY}>Add Questions</Button>
     <div className={style.questlist}>
     {
        questionList.map((value,id)=>{
           
            return (
             <div key={value} >
                
                {/* <Button onClick={()=>deleteQuestion(value)}></Button> */}
               <Question key1={value} deleteQuestion={deleteQuestion}id={id} />
                </div>
            )
          })
       
     }
     </div>
   
   
    </div>
  )
}

export default QuizPageMain