import React from 'react';

//Project Component
export default function Projects({lists}) {

  return (
    <section className="container"> 
    {/* Maps through list of projects and then renders them all as below */}
        {lists.map((list) => (
          
          <div className= "projectContainer" key={list.id}>
            <article className="project" >
              <h3 className='projectTitle'>{list.title}</h3> <br/>
              <a><svg  className='iconProjects' viewBox="0 0 24 24">{list.img}</svg></a> <br/>
              <a href={list.deployed}>Deployed App</a> <br/>
              <a href={list.gitHub}>GitHub</a>
              
            </article>
          </div> 
        ))}
  </section> 
  );
}

