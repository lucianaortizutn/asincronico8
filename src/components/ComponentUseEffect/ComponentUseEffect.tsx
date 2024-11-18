import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {
    const [state, setState] = useState(false)

    useEffect(() => {
        console.log('Component mounted')
        return () => {
            console.log('Component unmounted')
        }
    }, [])

    useEffect(() => {
        console.log(state);
    }, [state])

    return (
        <div>
            <button onClick={() => setState(!state)}>Toggle State</button>
        </div>
    )
}
