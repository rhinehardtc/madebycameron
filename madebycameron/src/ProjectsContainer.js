import ProjectCard from "./ProjectCard";
import ProjectList from "./ProjectList";

const ProjectsContainer = (props) => {

    const {theme} = props;

    const maskStyle = {backgroundColor: "#00ffff47", width: "100%", height: "15%", backdropFilter: "blur(3px)", zIndex: 2};
    const cardContainerStyle = {
        display: "flex", 
        flexFlow: "column nowrap", 
        position: "absolute", 
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%", 
        height: "85vh", 
        overflowY: "scroll", 
        zIndex: 1
    };

    return(
        <div style={{display: "flex", flexFlow: "column", justifyContent: "space-between", width: "100%", height: "85vh"}}>
            <div style={maskStyle}></div>
            <div style={cardContainerStyle}>
                {ProjectList.map(project => <ProjectCard key={project.id} project={project} theme={theme} />)}
            </div>
            <div style={maskStyle}></div>
        </div>
    );
}

export default ProjectsContainer;