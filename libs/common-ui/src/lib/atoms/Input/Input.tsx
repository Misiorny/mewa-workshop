type Props={
  type:string;
  id:string;
  name:string;
}
 export const Input=({type, id, name}:Props)=>{
  return <input type={type} name={name} id={id} className="mx-1 my-2 p-2"/>
 }
