import Routes from "./routes"
import GlobalStyle from "./style/global"
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes />  
    </>
  
  )
}

export default App
