export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    type: string
}

export interface IHandleTogglePassword extends React.MouseEvent<HTMLButtonElement> {}
export interface IHandleChange extends React.ChangeEvent<HTMLInputElement> {}