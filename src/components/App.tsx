import { ComponentCounter } from "./ComponentCounter/ComponentCounter"
import { ComponentUseEffect } from "./ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./FormComponent/FormComponent"
import { MiPrimerComponent } from "./MiPrimerComponent/MiPrimerComponent"

export const App = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: "2vh"}}>
        {/* <MiPrimerComponent text={'Texto desde propiedades'} color={'green'} fontSize={3}/> */}
        {/* <ComponentCounter/> */}
        {/* <ComponentUseEffect/> */}
        <FormComponent/>
    </div>
    
  )
}
