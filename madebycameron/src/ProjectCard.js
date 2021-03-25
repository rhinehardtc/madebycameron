
const ProjectCard = (props) => {
    const {theme, project} = props;

    const cardStyle = {
        display: "flex", 
        width: "80vw", 
        height: "65vh", 
        marginTop: "10vh",
        marginBottom: "10vh",
        border: theme === "light" ? "2px solid cyan" : "2px solid purple"
    };

    return(
        <div style={cardStyle}>
            <div>

            </div>

        </div>
    )
}

export default ProjectCard;