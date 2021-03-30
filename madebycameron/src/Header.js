
const Header = (props) => {

    const {theme, setTheme} = props;

    const lightColor = "white";
    const darkColor = "purple";

    const headerStyleLight = {
        "display": "flex",
        flexFlow: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "cyan",
        color: lightColor,
        "height": "10vh",
    };

    const headerStyleDark = {
        "display": "flex",
        flexFlow: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "cyan",
        color: darkColor,
        "height": "10vh",
    };

    const buttonStyleLight = {
        display: "flex",
        borderRadius: "50%",
        backgroundColor: lightColor,
        color: "cyan",
        fontSize: "1.5vmin",
        width: "3.5vmin",
        height: "3.2vmin",
        alignItems: "center",
        justifyContent: "center",
    };

    const buttonStyleDark = {
        display: "flex",
        borderRadius: "50%",
        backgroundColor: darkColor,
        color: "white",
        fontSize: "1.5vmin",
        width: "3.5vmin",
        height: "3.2vmin",
        alignItems: "center",
        justifyContent: "center",
    };

    return(
        <div style={theme === "light" ? headerStyleLight : headerStyleDark}>
            <div style={{display: "flex", flexFlow: "row", alignItems: "center", visibility: "hidden"}}>
                <h3 style={{marginRight: "2%"}}>{theme === "light" ? "light" : "dark"}</h3>
                <button style={buttonStyleLight}>{theme === "light" ? "☼" : "☽"}</button>
            </div>
            <h1>Cameron Rhinehardt</h1>
            <div style={{display: "flex", flexFlow: "row", alignItems: "center"}}>
                <h3 style={{marginRight: "2%"}}>{theme === "light" ? "light" : "dark"}</h3>
                <button 
                    onClick={ () => theme === "light" ? setTheme("dark") : setTheme("light") }
                    style={ theme === "light" ? buttonStyleLight : buttonStyleDark }
                >
                    {theme === "light" ? "☼" : "☽"}
                </button>
            </div>
        </div>
    )
}

export default Header;