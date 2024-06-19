import { useState } from "react"
import GeneralForm from "./components/GeneralForm"
import AddEducation from "./components/Edu.add"
import DisplayEducation from "./components/Edu.disp"

function Heading (props) {
  return (
    <div className="flex items-center gap-4">
      <h1 className="font-bold text-lg grow sm:text-xl md:text-2xl lg:text-3xl">{props.heading}</h1>
      
      <img
        src="/plus.png"
        className="h-8 border hover:bg-black/5 border-black p-2  rounded-md"
        onClick={props.onClick}
      />
    </div>
  )
}

export default function App() {
  const [accordian, setAccordian] = useState(0)
  const [newEdu, setNewEdu] = useState(false)
  const [newWork, setNewWork] = useState(false)

  const [general, setGeneral] = useState({name:'', email:'', phno:''})
  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])

  return (
    <div className="px-4 py-8 min-h-screen flex flex-col lg:flex-row *:lg:w-1/2 *:grow">
      {/* section forms */}
      <main className="flex flex-col gap-4 *:rounded-lg *:border *:border-black *:px-2 *:sm:px-4 *:md:px-6 *:lg:px-8 *:py-4 ">

        <section onClick={()=>setAccordian(0)} >
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">General Information</h1>
          {accordian==0 && 
            <GeneralForm
              onChange={(field)=>(e)=>setGeneral({...general, [field]:e.target.value})}
            />
          }
        </section>

        <section onClick={()=>setAccordian(1)} >
          <Heading
            heading="Education Details"
            onClick={()=>setNewEdu(true)}
          />
          {accordian==1 && ( newEdu ? 
            <AddEducation
              onSubmit={(newEducation)=>()=>{
                setNewEdu(false)
                setEducation([...education, newEducation])
              }}
              cancel={()=>setNewEdu(false)}
            /> 
            : 
            <DisplayEducation
              education={education}
              onDelete={(index) => () => setEducation(education.filter((_, i) => i !== index))}
              saveEdit={(index) => (newEdit) => () => setEducation(prev => {
                prev[index]=newEdit
                return prev
              })}
            />
          )}
        </section>

        <section onClick={()=>setAccordian(2)} >
          <Heading
            heading="Work Experience"
            onClick={()=>{}}
          />
        </section>
      </main>

      {/* resume */}
      <section>
        
      </section>
    </div>
  )
}