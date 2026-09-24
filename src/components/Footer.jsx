
const Footer = ({nombre,email}) => {

    return (
        <footer style={{ backgroundColor: "#ADD8E6", padding: '10px'}}>
            <p>© 2026 {nombre}</p>
            <h3>Si me queres contactar:</h3>
            <p>
             <a href={'mailto:' + email}>{email}</a>
            </p>
        </footer>
    )
}

export default Footer;