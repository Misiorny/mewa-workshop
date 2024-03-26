interface LabelProps {
  htmlFor:string;
  labelTxt:string;

}

export const Label=({htmlFor, labelTxt}:LabelProps)=>{
  return <label htmlFor={htmlFor} className="px-2 py-1">{labelTxt}</label>
}
