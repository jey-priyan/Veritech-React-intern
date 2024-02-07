import React from 'react'

const Member = ({name, role, imageUrl}) => {

    return (
        <div className='member'>
            <img src={imageUrl} alt={name}  />
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    )
}

export default Member;