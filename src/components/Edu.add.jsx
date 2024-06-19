import { useState } from "react";
import { Input } from "./GeneralForm";

export default function AddEducation ( props ) {

  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({name, title, from, to})();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col *:my-1"
    >

      <Input
        label='Institute Name'
        placeholder='Stanford University'
        maxLength='32'
        required={true}
        onChange={(e)=>setName(e.target.value)}
      />

      <Input
        label='Degree Title'
        placeholder='Computer Science'
        maxLength='32'
        required={true}
        onChange={e=>setTitle(e.target.value)}
      />
      
      <Input
        label='From'
        placeholder='Dec 2018'
        maxLength='8'
        required={true}
        onChange={e=>setFrom(e.target.value)}
      />

      <Input
        label='To'
        placeholder='Aug 2022'
        maxLength='8'
        required={true}
        onChange={e=>setTo(e.target.value)}
      />

      <div className="self-center *:px-4 *:py-1 *:border *:border-black *:rounded-lg *:mx-2">
        <button type='submit'>Save</button>
        <button type="reset">Reset</button>
        <button onClick={props.cancel} >Cancel</button>
      </div>

    </form>
  )
}