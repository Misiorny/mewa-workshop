import { Input, Label } from '../../atoms';

export const LabeledInput=()=>{
  return (
    <div className="flex flex-col justify-center">
      <Label htmlFor="name" labelTxt="Wpisz własny text"/>
      <Input type="text" id="name" name="name"/>
    </div>
  )
}
