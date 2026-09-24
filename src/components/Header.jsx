
const Header = ({nombre,profesion}) => {

    return (
        <header style={{ backgroundColor: "#BEE3F8", padding: '10px'}}>
            <h1>{nombre}</h1>
            <h3>{profesion}</h3>
        </header>
    )
}

export default Header;