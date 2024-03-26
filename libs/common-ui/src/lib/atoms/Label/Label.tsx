interface LabelProps {
  htmlFor:string;
  labelTxt:string;

}

export const Label=({htmlFor, labelTxt}:LabelProps)=>{
  return <label htmlFor={htmlFor}>{labelTxt}</label>
}
