import { useState } from "react";
import { Input } from "./GeneralForm";

function EditEducation (props) {
  const [name, setName] = useState(props.name)
  const [title, setTitle] = useState(props.title)
  const [from, setFrom] = useState(props.from)
  const [to, setTo] = useState(props.to)

  const handleSubmit = e => {
    e.preventDefault()
    props.onSave({name, title, from, to})()
    props.setEditingFalse()
  }
  
  return (
    props.editing && props.active===props.index ? (
      <form onSubmit={handleSubmit} className="flex flex-col p-2">
        <Input
          label='Institute Name'
          placeholder='Stanford University'
          maxLength='20'
          required={true}
          onChange={(e)=>setName(e.target.value)}
          value={name}
        />
  
        <Input
          label='Degree Title'
          placeholder='Computer Science'
          maxLength='20'
          required={true}
          onChange={e=>setTitle(e.target.value)}
          value={title}
        />
        
        <Input
          label='From'
          placeholder='Dec 2021'
          required={true}
          onChange={e=>setFrom(e.target.value)}
          value={from}
        />
  
        <Input
          label='To'
          placeholder='Aug 2025'
          maxLength='8'
          required={true}
          onChange={e=>setTo(e.target.value)}
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

export default function DisplayEducation (props) {
  const [editing, setEditing] = useState(false)
  const [active, setActive] = useState(0)
  let i=0;

  return (
    <div className="text-xl my-2 *:border *:border-black *:rounded-md flex flex-col gap-2">
      {props.education.length==0 ? 
        <span className="p-2 italic ">List is Empty</span> 
        : 
        props.education.map(e => 
          <EditEducation
            active={active}
            editing={editing}
            name={e.name}
            title={e.title}
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