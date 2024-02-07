import React from "react";
import Member from "./Member";

const SaleTeam = ({members}) => {
    const salesTeam = members.filter(member => member.team === 'Sales')

    return (
        <div className="team">

<div className="team-category">
        <h2>Sales Team</h2>
        <div className="team-members">
          {salesTeam.map((member, index) => (
            <Member key={index} {...member} />
          ))}
        </div>
      </div>
        </div>
    )
}

export default SaleTeam;