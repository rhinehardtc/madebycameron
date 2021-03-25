
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
        borderRadius: "50%",
        backgroundColor: lightColor,
    };

    const buttonStyleDark = {
        borderRadius: "50%",
        backgroundColor: darkColor,
    };

    const hiddenButton = {
        visibility: "hidden",
        borderRadius: "50%"
    };

    return(
        <div style={theme === "light" ? headerStyleLight : headerStyleDark}>
            <button style={hiddenButton}>{theme === "light" ? "🌙" : "☀️"}</button>
            <h1>Cameron Rhinehardt</h1>
            <button 
                onClick={ () => theme === "light" ? setTheme("dark") : setTheme("light") }
                style={ theme === "light" ? buttonStyleLight : buttonStyleDark }
            >
                {theme === "light" ? "🌙" : "☀️"}
            </button>
        </div>
    )
}

export default Header;