import * as Styled from "./style";

import { IInput } from "./types"

export default function Input({ labelContent, inputPlaceHolder }:IInput) {
    return (
        <Styled.InputContent>
            <Styled.Label>{labelContent}</Styled.Label>
            <Styled.Input placeholder={inputPlaceHolder} />
            <Styled.Span />
        </Styled.InputContent>
    )
}