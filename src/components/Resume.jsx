import React from 'react'

//Resume Component
function Resume() {
  return (
    <div className='skills'>
      <div id='skillTitle'> <br />
      <h4> My Skills and Proficiencies:</h4> <br/>
      </div>
      <div id='skillPoints'>
        <div className='frontend'>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Handlebars</li>
            <li>BootStrap/ Bulma</li>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL and Sequelize</li>
            <li>Inquirer</li>
            <li>Mongo and Mongoose</li>
            <li>GraphQL</li>
            <li>MERN applications</li>
          </ul> <br />
        </div>

      </div>
      <h4 className='resumeHead'>My resume is available <a href='https://drive.google.com/file/d/16QqniuewP7paZQ6JU-2MyYsIO97ykJpQ/view?usp=sharing'>here:</a></h4><br />
    </div>
  )
}

export default Resume