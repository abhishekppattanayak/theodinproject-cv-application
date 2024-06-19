export function Resume (props) {
  return (
    <>

      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl">{props.general.name}</h1>
        <div className="flex gap-2 justify-evenly w-full">
          <a href={`mailto:${props.general.email}`} className="text-blue-700 underline">{props.general.email}</a>
          <h1>{props.general.phno}</h1>
        </div>
      </div>

      <div>

      </div>

      <div>

      </div>

    </>
  )
}