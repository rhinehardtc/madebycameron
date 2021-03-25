
const Header = (props) => {

    const {theme, setTheme} = props;

    const lightColor = "white";
    const darkColor = "purple";

    const headerStyleLight = {
        "display": "flex",
        flexFlow: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "cyan",
        color: lightColor,
        "height": "10vh",
    };

    const headerStyleDark = {
        "display": "flex",
        flexFlow: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "cyan",
        color: darkColor,
        "height": "10vh",
    };

    const buttonStyleLight = {
        alignSelf: "center",
        float: "right",
        borderRadius: "50%",
        backgroundColor: lightColor,
    };

    const buttonStyleDark = {
        alignSelf: "center",
        borderRadius: "50%",
        backgroundColor: darkColor,
    }

    return(
        <div style={theme === "light" ? headerStyleLight : headerStyleDark}>
            <h1>Cameron Rhinehardt</h1>
            <button 
                onClick={ () => theme === "light" ? setTheme("dark") : setTheme("light") }
                style={ theme === "light" ? buttonStyleLight : buttonStyleDark }
            >
                {theme === "light" ? "🌙" : "☀️"}
            </button>
            <h3>{theme === "light" ? "light" : "dark"}</h3>
        </div>
    )
}

export default Header;