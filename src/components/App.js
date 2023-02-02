import { BrowserRouter } from "react-router-dom"; 
import CustomProvider from "./CustomProvider"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const App = () => {
    return (
        <CustomProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
            <ToastContainer />
        </CustomProvider>
    )
}

export default App