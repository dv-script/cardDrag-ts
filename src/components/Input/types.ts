export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  type: string
}

export type IHandleTogglePassword = React.MouseEvent<HTMLButtonElement>

export type IHandleChange = React.ChangeEvent<HTMLInputElement>
