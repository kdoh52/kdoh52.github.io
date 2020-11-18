import React from "react";

function Project(props) {
    return(
        <div>
            <h3>{props.name}</h3>
            <img class="project-pic" src={props.image} alt="Kuma screenshot" />
            <ul>
            <li>App: <a href={props.app} target="_blank">{props.app}</a></li>
            <li>Repository: <a href={props.repo} target="_blank">{props.repo}</a></li>
            </ul>
        </div>
    )
}

export default Project;
