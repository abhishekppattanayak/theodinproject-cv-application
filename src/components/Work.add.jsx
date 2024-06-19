import { useState } from "react";
import { Input } from "./GeneralForm";
import { TextArea } from "./Work.disp";

export default function AddWork (props) {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    props.onSubmit({name, title, desc, from, to})();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col *:my-1">

      <Input
        label='Organization Name'
        placeholder='Spotify Inc.'
        maxLength='32'
        required={true}
        onChange={e=>setName(e.target.value)}
      />

      <Input
        label='Job Title'
        placeholder='Senior Software Engineer'
        maxLength='32'
        required={true}
        onChange={e=>setTitle(e.target.value)}
      />

      <TextArea
        label='Job Description'
        maxLength='128'
        onChange={e=>setDesc(e.target.value)}
      />

      <Input
        label='From'
        type='date'
        required={true}
        onChange={e=>setFrom(e.target.value)}
      />

      <Input
        label='To'
        type='date'
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