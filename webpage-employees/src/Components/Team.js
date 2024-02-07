import React from "react";
import Member from "./Member";

const Team = ({members}) => {

    const managementTeam = members.filter(member => member.team === 'Management')

    return (
        <div className="team">
            <div className="team-category">
        <h2>Management Team</h2>  <br/>
        <div className="team-members">
          {managementTeam.map((member, index) => (
            <Member key={index} {...member} />
          ))}
        </div>
      </div>
      
        </div>
    )
}

export default Team;