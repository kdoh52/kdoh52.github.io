import React from 'react';
import projects from '../projects.json';
import ProjectPost from "./ProjectPost";

export default function ProjectList() {
    return (
        <div>
            {projects.map(p => {
                return (
                    <ProjectPost
                    id={p.id}
                    title={p.title}
                    image={p.image}
                    description={p.description}
                    appLink={p.appLink}
                    repoLink={p.repoLink}
                    />
                )
            })}
        </div>
    )
}
