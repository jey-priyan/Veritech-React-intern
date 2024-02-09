import React from 'react';
import './App.css';
import Team from './Components/Team';
import DevTeam from './Components/DevTeam';
import SaleTeam from './Components/SaleTeam';

const members = [
    {
      name: 'John Doe',
      role: 'CEO/Founder', 
      team: 'Management',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John ',
      role: 'CEO/Founder', 
      team: 'Management',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'CEO/VP', 
      team: 'Management',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'CEO/VP', 
      team: 'Management',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'CEO/VP', 
      team: 'Management',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Team Lead', 
      team: 'Development',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'SE', 
      team: 'Development',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'SE', 
      team: 'Development',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'SE', 
      team: 'Development',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      erole: 'SE', 
      team: 'Development',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'SE',
      team: 'Development', 
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'SE',
      team: 'Development', 
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Sales', 
      team: 'Sales',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Sales', 
      team: 'Sales',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Sales', 
      team: 'Sales',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Sales', 
      team: 'Sales',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Sales', 
      team: 'Sales',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Sales', 
      team: 'Sales',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Sales', 
      team: 'Sales',
      imageUrl: '/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },


]
function App() {
  return (
    <div className="App">
      <img className= 'first-part' src='/asset/pngegg.png' alt='bookmark' width= '100px' height = '100px'/> <br/>
      <div className='content'>
     <h1>Pixel Logic</h1>
     <p>A website welcome message is a popup or notification that website visitors see as soon as they arrive on your homepage.<br/> You can use these messages to greet new visitors and set the tone for future interactions. They help you establish your brand’s voice and start a relationship with potential customers.</p>
     <span className='line'>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</span>
     <h3> Meet Our Team</h3>
     <Team members={members} />
     <DevTeam members = {members} />
     <SaleTeam members = {members} /><br/><br/>
     <img className= 'last' src='/asset/left.png' alt='bookmark' width= '100px' height = '100px'/> 
     </div>
    </div>
  );
}

export default App;
