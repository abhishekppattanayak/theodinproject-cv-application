export function Resume (props) {
  let i = 0
  return (
    <>

      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold text-3xl">{props.general.name}</h1>
        <div className="flex gap-2 justify-evenly w-full text-lg">

          {props.general.email && <a href={`mailto:${props.general.email}`} className="text-blue-700 underline"><img src="/email.png" className="inline mr-2" />{props.general.email}</a>}

          {props.general.phno && <h1><img src="/telephone.png" className="inline mr-2" />{props.general.phno}</h1> }
        </div>
      </div>
      
      
      {props.education.length > 0 &&
        <>
          <hr className="w-4/5 self-center" />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Education</h1>
            {props.education.map(e => 
              <>
                <div key={i++} className="w-full py-2 text-lg">
                  <div className="flex justify-between font-bold">
                    <span>{e.name}</span>
                    <span>{e.from}-{e.to}</span>
                  </div>
                  <div className="italic" >{e.title}</div>
                </div>
              </>
            )}
          </div>
        </>
      }
      
      {props.experience.length > 0 &&
        <>
          <hr className="w-4/5 self-center" />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Work Experience</h1>
            {props.experience.map(e =>
              <>
                <div key={i++} className="w-full py-2 text-lg">
                  <div className="flex justify-between font-bold">
                    <span>{e.name}</span>
                    <span>{e.from}-{e.to}</span>
                  </div>
                  <div>{e.title}</div>
                  {e.desc &&
                    <ul className="list-disc">
                      {e.desc.split('\n').map(e => <li>{e}</li>)}
                    </ul>
                  }
                </div>
              </>
            )}
          </div>
        </>
      }

    </>
  )
}