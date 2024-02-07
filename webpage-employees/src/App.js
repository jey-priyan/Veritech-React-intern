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
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John ',
      role: 'CEO/Founder', 
      team: 'Management',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'CEO/VP', 
      team: 'Management',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'CEO/VP', 
      team: 'Management',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'CEO/VP', 
      team: 'Management',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Team Lead', 
      team: 'Development',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'SE', 
      team: 'Development',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'SE', 
      team: 'Development',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'SE', 
      team: 'Development',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      erole: 'SE', 
      team: 'Development',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'SE',
      team: 'Development', 
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'SE',
      team: 'Development', 
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Sales', 
      team: 'Sales',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Sales', 
      team: 'Sales',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Sales', 
      team: 'Sales',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Sales', 
      team: 'Sales',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Sales', 
      team: 'Sales',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Sales', 
      team: 'Sales',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },
    {
      name: 'John Doe',
      role: 'Sales', 
      team: 'Sales',
      imageUrl: 'webpage-employees/src/asset/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp',
    },


]
function App() {
  return (
    <div className="App">
     <h1>Pixel Logic</h1>
     <p>A website welcome message is a popup or notification that website visitors see as soon as they arrive on your homepage.<br/> You can use these messages to greet new visitors and set the tone for future interactions. They help you establish your brand’s voice and start a relationship with potential customers.</p>
     <h3> Meet Our Team</h3>
     <Team members={members} />
     <DevTeam members = {members} />
     <SaleTeam members = {members} />
    </div>
  );
}

export default App;
