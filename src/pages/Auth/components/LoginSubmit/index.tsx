import { PropsWithChildren } from "react"

import * as Styled from "./style"

export default function LoginSubmit({children}:PropsWithChildren) {
    return (

        <Styled.LoginSubmit>
            {children}
        </Styled.LoginSubmit>
        
    )
}