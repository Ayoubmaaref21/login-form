import { ChangeEvent, useState,FormEvent } from "react"
import './login.css'

export default function LoginAccount(){
 const [FirstNameInput,setFirstNameInput]=useState('')
 const [LastNameInput,setLastNameInput]=useState('')
 const [FirstNameError,setFirstNameError]=useState('')
 const [LastNameError,setLastNameError]=useState('')
 const[PasswordError,setPasswordError]=useState('')
 const[PasswordInput,setPasswordInput]=useState('')
 const[PasswordConfirmInput,setPasswordConfirmInput]=useState('')
 const[PasswordConfirmError,setPasswordConfirmError]=useState('')
 const handleInputConfirmPassword=(event:ChangeEvent <HTMLInputElement>)=>{
    setPasswordConfirmInput(event.target.value)}
 const handleInputPassword=(event:ChangeEvent <HTMLInputElement>)=>{
     setPasswordInput(event.target.value)
 }

 const handleInputFirstName=(event:ChangeEvent <HTMLInputElement>)=>{
     setFirstNameInput(event.target.value)
     }
 const  handleInputLasttName=(event:ChangeEvent <HTMLInputElement>)=>{
      setLastNameInput(event.target.value)
    }
    const handleConfirmPasswordError=(event:FormEvent <HTMLFormElement>)=>{
        if(PasswordInput!== PasswordConfirmInput){
            setPasswordConfirmError('the confirmation is false')
            event.preventDefault()
        } else setPasswordConfirmError('')
            
    }
    const handlePasswordError=(event:FormEvent <HTMLFormElement>)=>{
        const test2=PasswordInput.split('')
        let numdigit=0
        for(let i=0;i < test2.length;i++){
            if(!isNaN(Number(test2[i]))  ){
                numdigit=numdigit+1
                } } 
        
       if(PasswordInput.length > 20 || PasswordInput.length < 5 ){
            setPasswordError('the password must contain max 20 character and min 5 character')
            event.preventDefault()
        }
        else  {  if(numdigit>= 3){ setPasswordError('') }
                    else{ setPasswordError('password must contain at least 3 digit')
                        event.preventDefault()
                        } }     
               
    }  
const handleFirstNameError=(event:FormEvent <HTMLFormElement>)=>{
    const test=FirstNameInput.split('')
   if(FirstNameInput.length > 8 || FirstNameInput.length<3 ){
        setFirstNameError('this champ must contain max 8 character and min 3 character')
        event.preventDefault()
    }
    else  {
                 for(let i=0;i < test.length;i++){
                        if(!isNaN(Number(test[i]))  ){
                            setFirstNameError('this champ can not contain  number')
                            event.preventDefault()
                            i=test.length
                       }
                         else  setFirstNameError('')
} }
}           
const handleLastNameError=(event:FormEvent <HTMLFormElement>)=>{
    const test1=LastNameInput.split('')
   if(LastNameInput.length > 8 || LastNameInput.length<3 ){
        setLastNameError('this champ must contain max 8 character and min 3 character')
        event.preventDefault()
    }
    else  {
                 for(let i=0;i < test1.length;i++){
                        if(!isNaN(Number(test1[i]))  ){
                            setLastNameError('this champ can not contain  number')
                            event.preventDefault()
                            i=test1.length
                       }
                         else  setLastNameError('')
} }
}  

const [Checkbox,setCheckbox]=useState(false)
const [CheckboxError,setCheckboxError]=useState('')
const handleCheckBox=(event:ChangeEvent<HTMLInputElement>)=>{
    setCheckbox(event.target.checked)
}
const handleCheckBoxError=(event:FormEvent<HTMLFormElement>)=>{
    if(!Checkbox){
       setCheckboxError('you must accept terms')
       event.preventDefault()
    }
}

     function handleSubmit(event:FormEvent <HTMLFormElement>){
        handleFirstNameError(event);
        handleLastNameError(event);
        handlePasswordError(event);
        handleConfirmPasswordError(event);
      handleCheckBoxError(event);
    }             


return(
    <div className="form-container">
    <form className="my-form" onSubmit={(event)=>{handleSubmit(event)}}> 
        <p className="title">fil the form below to create an account </p>
        <label className="first-name">First name *
            <input type="text" onChange={handleInputFirstName} required/>
            <p>{FirstNameError}</p>
        </label>
        <label className="last-name" >Last name *
            <input type="text" required  onChange={handleInputLasttName}/>
            <p>{LastNameError}</p>
        </label>
        
        <label className="email" >Email *
            <input type="email" required/>
            </label>
        
        <label className="password">Password *
             <input type="password" onChange={handleInputPassword}  required />
            <p>{PasswordError}</p>
        </label>
       
        <label className="confirm-password">Confirm  password *
            <input type="password" required onChange={handleInputConfirmPassword} />
            <p>{PasswordConfirmError}</p>
        </label>
        
       <p className="avertissement"> We want you to know exactty hou our service works and why we reed your details.Please confirm that you reed,understand and accept the terms and conditions </p>
      <label className="terms" >
          
          <div className="check-box">
            <input type="checkbox"  onChange={ handleCheckBox}/>
            <p>{CheckboxError}</p>
          </div>
         
            <p className="read">I have reed,understood and accept the terms and cinditions.</p> 
            
      </label>
        
        <button type="submit">Next</button>
    </form>
   
    </div>
   
)


}