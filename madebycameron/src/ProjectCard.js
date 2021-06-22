
const ProjectCard = (props) => {
    const {theme, project} = props;

    const cardStyle = {
        display: "flex", 
        alignItems: "center",
        width: "80vw", 
        minHeight: "65vmin", 
        marginTop: "10vh",
        marginBottom: "10vh",
        border: theme === "light" ? "1px solid cyan" : "1px solid purple",
        color: theme === "light" ? "#00cece" : "white",
    };

    const videoFrameStyle = {
        width: "66%",
        height: "90%",
        boxShadow: "0.4vmin 0.4vmin 0.4vmin 0.2vmin rgb(137, 134, 193, 0.5)"
    };

    const linkStyle = {marginTop: "5%", textDecoration: "none", color: theme === "light" ? "purple" : "cyan"}

    return(
        <div style={cardStyle}>
            <div style={{
                display: "flex", 
                flexFlow: "column", 
                alignItems: "center", 
                justifyContent: "center", 
                width: "30%", 
                height: "100%",
                marginRight: "2%",
                borderRight: theme === "light" ? "1px solid cyan" : "1px solid purple"
            }}>
                <h2>{project.name}</h2>
                <p style={{textAlign: "center", width: "80%"}}>{project.description}</p>
                <a 
                    style={linkStyle}
                    href={project.githubURL}
                >
                    <h3>GitHub Repo</h3>
                </a>
                {project.hostedURL ?
                    <a 
                        style={linkStyle}
                        href={project.hostedURL}
                    >
                        <h3>Hosted Site</h3>
                    </a> :
                    <h3 style={{marginTop: "5%"}}>Not Yet Hosted</h3>
                }
            </div>
            <iframe 
                style={videoFrameStyle}
                src={project.videoURL} 
                title={project.name}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default ProjectCard;