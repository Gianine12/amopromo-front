import { DivInput, InputDate } from "./style"

export const InputD = ({text, setDataValues}) => {

  const handlerOnChange = (e) =>{
    if(text == 'going'){
      setDataValues(e,text)
    }else{
      setDataValues(e,text)
    }
  }

  return(
    <DivInput>
      <label>{text}</label>
      <InputDate onChange={(e) => handlerOnChange(e.target.value)} type="date"/>
    </DivInput>
  )
}
