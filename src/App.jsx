import Container from "./components/Container"
import GeneralForm from "./components/GenInfo.form"
import CommonForm from "./components/Common.form"
import { useState } from "react"

export default function App() {
  const [active, setActive] = useState('0')
  const handleClick = (id) => () => setActive(id)
  return (
    <>
      <Container>
        <GeneralForm active={active} onClick={handleClick('0')} />
        <CommonForm active={active} expect='1' onClick={handleClick('1')} section="Education" />
        <CommonForm active={active} expect='2' onClick={handleClick('2')} section="Work Experience" descIsRequired={true} />
        
      </Container>
      <Container>
        
      </Container>
    </>
  )
}