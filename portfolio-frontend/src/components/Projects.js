import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] }
    }

    componentDidMount() {
        fetch('/projects')
          .then(res => res.json())
          .then(projects => this.setState({ projects }))
          .catch(err => console.log(err)) 
      }

    render() {
        return(
            <div className="Projects">
                {this.state.projects.map(project =>
                    <div className="singleProject" key={project._id}>
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                        {project.siteLink && <a className="project-link" href={project.siteLink} target="_blank">Website</a>}
                        <a className="project-link" href={project.gitHubLink} target="_blank">GitHub</a>
                    </div>)}
            </div>
        );
    }
}

export default Projects;