import { useCarrito } from "./CustomProvider"
import Nav from "./Nav"

const Footer = () => {

    return (
        <footer>
            <p>Copyright &copy; 2022</p>
            <Nav
                textLinkFooter="Twitter"
                hrefLinkFooter="https://www.facebook.com/"
            />
        </footer>
    )
}

export default Footer