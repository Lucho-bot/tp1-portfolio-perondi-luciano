
const Footer = ({nombre,email}) => {

    return (
        <footer>
            <p>© 2026 {nombre}</p>
            <h3>Si me queres contactar:</h3>
            <p>
             <a href={'mailto:' + email}>{email}</a>
            </p>
        </footer>
    )
}

export default Footer;