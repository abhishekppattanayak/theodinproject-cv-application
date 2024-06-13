export default function Input (props) {
  return (
    <div className="flex justify-between items-center py-2 rounded-lg gap-4">
      <label className="font-bold" htmlFor={props.id}>{props.title}{props.required && " *"}</label>
      <input className="rounded-md px-2 py-1 w-2/3" type={props.type ?? 'text'} placeholder={props.placeholder} onChange={props.onChange} />
    </div>
  )
}