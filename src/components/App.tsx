import { AppProduct } from "./AppProduct/AppProduct"

export const App = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: "2vh"}}>
        {/* <MiPrimerComponent text={'Texto desde propiedades'} color={'green'} fontSize={3}/> */}
        {/* <ComponentCounter/> */}
        {/* <ComponentUseEffect/> */}
        {/* <FormComponent/> */}
        <AppProduct/>
    </div>
    
  )
}
