
const ProjectsContainer = (props) => {

    const maskStyle = {backgroundColor: "#00ffff47", width: "100%",height: "15%"};

    return(
        <div style={{display: "flex", flexFlow: "column",width: "100%", height: "85vh"}}>
            <div style={maskStyle}></div>
            <div style={maskStyle}></div>
        </div>
    );
}

export default ProjectsContainer;