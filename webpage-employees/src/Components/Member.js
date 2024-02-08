import React from 'react'

const Member = ({name, role, imageUrl}) => {

    return (
        <div className='member'>
            <div className='card'>
            <img src={imageUrl} alt={name}  />
            <h3>{name}</h3>
            <p>{role}</p>
            </div>
        </div>
    )
}

export default Member;