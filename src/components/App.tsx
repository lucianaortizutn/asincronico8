import { ComponentCounter } from "./ComponentCounter/ComponentCounter"
import MiPrimerComponent from "./MiPrimerComponent/MiPrimerComponent"

export const App = () => {
  return (
    <>
        <MiPrimerComponent text={'hola'} color={'green'} fontSize={3}/>
        <ComponentCounter/>
    </>
    
  )
}
