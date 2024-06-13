import Input from "./Input"

export default function GeneralForm (props) {
  return (
    <form className="bg-gray-200 border border-black rounded-md px-8 py-2" onClick={props.onClick}>

      <div className="flex items-center justify-between">
        <h1 className="text-left font-bold text-2xl py-1">General</h1>
        {props.active !== '0' && 
        <img className="h-6" src="/down.png" alt="" />
        }
      </div>

      {
        props.active == '0' &&

      <div>
        <Input title="Name" placeholder="John Doe" type="text" required={true} />
        <Input title="Email" placeholder="johndoe@me" type="mail" required={true} />
        <Input title="Phone Number" type="tel" placeholder="(+1) 123-456-7890" />

        <div className="flex justify-evenly">
          <button type="submit" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-bold">Save</button>
          <button className="bg-gray-50 text-black font-bold hover:bg-gray-300 rounded-md px-4 py-2" type="reset">Reset</button>
          
        </div>
      </div>    

      }
    </form>
  )
}

/*
div
label for=props.id 
input id=props.id
/div
 */