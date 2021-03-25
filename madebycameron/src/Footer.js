

const Footer = (props) => {

    const {theme} = props;

    const linkStyle = {textDecoration: "none", color: theme === "light" ? "white" : "purple"}

    return(
        <div style={{display: "flex", flexFlow: "row", justifyContent: "space-around", alignItems: "center", backgroundColor: "cyan", color: "white", height: "5vh"}}>
            <a 
                style={linkStyle}
                href="mailto:rhinehardtc@gmail.com?subject=Mail from Portfolio Site"
            >
                Email Me
            </a>

            <a 
                style={linkStyle}
                href="https://docs.google.com/document/d/1Nuum23WngSprmZQg_A7RymLlKo01u0pGR1NMw6TqcrY/edit?usp=sharing"
            >
                My Resume
            </a>

            <a
                style={linkStyle}
                href="https://www.linkedin.com/in/cameron-rhinehardt-0358a0161/"
            >
                LinkedIn
            </a>

            <a
                style={linkStyle}
                href="https://www.youtube.com/channel/UCjvhU_Gzr-YF5b2azyQpCww"
            >
                YouTube Channel
            </a>
        </div>
    )
}

export default Footer;