import * as Styled from "./style";

import { IInput } from "./types"

export default function Input({ label, ...props }:IInput) {
    return (
        <Styled.InputContent>
            <Styled.Label>{label}</Styled.Label>
            <Styled.Input {...props} />
            <Styled.Span />
        </Styled.InputContent>
    )
}