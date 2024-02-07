import React from "react";
import Member from "./Member";

const DevTeam = ({members}) => {

    const developmentTeam = members.filter(member => member.team === 'Development')

    return (
        <div className="team">
            <div className="team-category">
        <h2>Development Team</h2>
        <div className="team-members">
          {developmentTeam.map((member, index) => (
            <Member key={index} {...member} />
          ))}
        </div>
      </div>
        </div>
    )
}

export default DevTeam;