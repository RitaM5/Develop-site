import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import SingleTeam from './SingleTeam';
const Team = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch('Team.json')
      .then(res => res.json())
      .then(data => setTeams(data))
  }, [])
  return (
    <div className='py-5'>
      <Container data-aos="fade-up">
        <div className="text-center">
          <h2 className='fw-bold'>Our Team</h2>
          <div className='section-header my-3'></div>
          <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
        </div>
        <div className="row g-2 pt-5">
          {
            teams.map(single=><SingleTeam singleData={single}/>)
          }
        </div>
      </Container>
    </div>
  )
}

export default Team