import * as Styled from "./style";

import { ILoginInput } from "./types"

export default function LoginInput({ labelContent, inputPlaceHolder }:ILoginInput) {
    return (
        <Styled.LoginInputContent>
            <Styled.LoginLabel>{labelContent}</Styled.LoginLabel>
            <Styled.LoginInput placeholder={inputPlaceHolder} />
            <Styled.LoginSpan />
        </Styled.LoginInputContent>
    )
}