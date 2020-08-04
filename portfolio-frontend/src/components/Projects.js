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
                <h1>My Projects</h1>
                {this.state.projects.map(project =>
                    <div key={project.id}>{project.name}</div>)}
            </div>
        );
    }
}

export default Projects;