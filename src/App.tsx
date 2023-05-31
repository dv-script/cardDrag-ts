// import RouteComponent from './routes'
import { GlobalStyle } from "./GlobalStyle"
import Register from "./pages/Auth/SignUp"

export default function App() {
  return (
    <>
      <GlobalStyle />
      {/* <RouteComponent /> */}
      <Register />
    </>
  )
}