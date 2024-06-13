import Input from "./Input"
import { useState } from "react"

export default function CommonForm (props) {

  const obj = {
    'name' : '',
    'title' : '',
    'desc' : '',
    'from' : '',
    'to' : ''
  }

  const [form, setForm] = useState(obj)

  const handleChange = (id) => (e) => {
    let newForm = {...form}
    newForm[id] = e.target.value
    setForm(newForm)
  }

  return (
    <form className="bg-gray-200 border border-black rounded-md px-8 py-2" onClick={props.onClick}>
      <div className="flex items-center justify-between">
        <h1 className="text-left font-bold text-2xl py-1">{props.section}</h1>
        {props.active !== props.expect && 
        <img className="h-6" src="/down.png" alt="" />
        }
      </div>

      {
        props.active == props.expect &&
        
        <div>

          <Input title={props.expect == '1' ?`Institute Name` : `Organization Name`} onChange={handleChange('name')} value={form.name} />

          { props.descIsRequired && <Input title="Description" onChange={handleChange('desc')} value={form.desc} />}

          <Input title="Title of Study" onChange={handleChange('title')} value={form.title} />

          <div className="flex gap-2 justify-between">
            <Input title="From" value={form.from} />
            <Input title="To" value={form.to}/>
          </div>

          <div className="flex justify-evenly">
            <button className="bg-gray-500 text-white font-bold hover:bg-gray-600 rounded-md px-4 py-2" type="submit">Save</button>
            <button className="bg-gray-50 text-black font-bold hover:bg-gray-300 rounded-md px-4 py-2" type="reset">Cancel</button>
          </div>
      
        </div>
        
      }
    </form>
  )
}