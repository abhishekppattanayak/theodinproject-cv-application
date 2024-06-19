export function Input(props) {
  return (
    <div className="flex gap-4 *:text-xl my-2">
      <label>{props.label}</label>
      <input
        className="font-bold placeholder:font-normal rounded-md px-2 grow"
        type={ props.type ?? 'text'}
        placeholder={props.placeholder ?? ''}
        onChange={props.onChange}
        minLength={props.minLength}
        maxLength={props.maxLength}
        required={props.required ?? false}
      />
    </div>
  )
}

export default function GeneralForm (props) {
  return (
    <form>
      <Input 
        label='Full Name'
        placeholder='John Doe'
        required={true}
        maxLength='24'
        onChange={props.onChange('name')}
      />

      <Input
        label='Email'
        placeholder='johndoe@me.com'
        type='email'
        minLength='4'
        maxLength='36'
        required={true}
        onChange={props.onChange('email')}
      />

      <Input
        label='Phone Number'
        placeholder='(+1) 123 456 7890'
        type='tel'
        minLength='6'
        maxLength='16'
        required={true}
        onChange={props.onChange('phno')}
      />
    </form>
  )
}