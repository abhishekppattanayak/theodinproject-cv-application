import { act, useState } from "react";
import { Input } from "./GeneralForm";

export function TextArea(props) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 *:sm:text-xl my-2">
      <label className="px-2">{props.label}</label>
      <textarea
        className="font-bold placeholder:font-normal rounded-md px-2 border bg-gray-400/5"
        type={ props.type ?? 'text'}
        placeholder='A short description'
        onChange={props.onChange}
        minLength={props.minLength}
        maxLength={props.maxLength}
        required={props.required ?? false}
        value={props.value}
      />
    </div>
  )
}

function EditWork (props) {
  const [name, setName] = useState(props.name)
  const [title, setTitle] = useState(props.title)
  const [desc, setDesc] = useState(props.desc)
  const [from, setFrom] = useState(props.from)
  const [to, setTo] = useState(props.to)

  const handleSubmit = e => {
    e.preventDefault()
    props.onSave({name, title, desc, from, to})()
    props.setEditingFalse()
  }

  return (
    props.editing && props.active===props.index ? (
      <form onSubmit={handleSubmit}
        className="flex flex-col p-2"
      >
        <Input
          label='Organization Name'
          placeholder='Spotify Inc.'
          maxLength='20'
          required={true}
          onChange={e=>setName(e.target.value)}
          value={name}
        />

        <Input
          label='Job Title'
          placeholder='Senior Software Engineer'
          maxLength='32'
          required={true}
          onChange={e=>setTitle(e.target.value)}
          value={title}
        />

        <TextArea
          label='Job Description'
          maxLength='128'
          onChange={e=>setDesc(e.target.value)}
          value={desc}
        />

        <Input
          label='From'
          placeholder='May 2025'
          required={true}
          onChange={e=>setFrom(e.target.value)}
          value={from}
        />

        <Input
          label='To'
          placeholder='Jun 2028'
          required={true}
          onChange={e=>setTo(e.target/value)}
          value={to}
        />

        <div className="self-center *:px-4 *:py-1 *:border *:border-black *:rounded-lg *:mx-2">
          <button type='submit'>Save</button>
          <button onClick={props.setEditingFalse}>Cancel</button>
        </div>

      </form>
    ) : (
      <div className="flex items-center p-2 gap-2" onClick={props.onClick(props.index)}>
        <div className="grow flex">
          <h1 className="font-bold">{props.name},&nbsp;</h1>
          <h1>{props.title}</h1>
        </div>
        <img src="/edit.png" alt="" className="h-6"
          onClick={props.onEdit}
        />
        <img
          src="/delete.png" alt="" className="h-6" 
          onClick={props.onDelete}
        />
      </div>
    )
  )
}

export default function DisplayWork (props) {
  const [editing, setEditing] = useState(false)
  const [active, setActive] = useState(0)
  let i=0;

  return (
    <div className="text-xl my-2 *:border *:border-black *:rounded-md flex flex-col gap-2">
      {props.experience.length==0 ? <span className="p-2 italic ">List is Empty</span>
      :
      props.experience.map(e => 
        <EditWork
          active={active}
          editing={editing}
          name={e.name}
          title={e.title}
          desc={e.desc}
          from={e.from}
          to={e.to}
          index={i}
          onClick={(index)=>()=>setActive(index)}
          onDelete={props.onDelete(i)}
          onEdit={()=>setEditing(true)}
          setEditingFalse={()=>setEditing(false)}
          key={i++}
          onSave={props.saveEdit(i)}
        />
      )
      }
    </div>
  )
}