import React from 'react';
import './App.css';
import { puppyList } from './data';
import { useState } from 'react';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log("puppyList: ", puppies);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <div className="App">
      {featPupId && (
        <div className='featuredPup'>
          <h2 className='feat-header'>Featured Puppy</h2>
          <h3 className='feat-header2'>{featuredPup.name}</h3>
          <ul>
            <li className='no-bullet'>Age: {featuredPup.age}</li>
            <li className='no-bullet'>Email: {featuredPup.email}</li>
            <li className='no-bullet'>Tricks:</li>
            <ul>
              {featuredPup.tricks.map((trick) => (
                <li key={trick.id}>{trick.title}</li>
              ))}
            </ul>
          </ul>
        </div>
      )} 
      <div className='puppy-pals'>
      <h1> Puppy Pals</h1>
      {puppies.map((puppy) => (
        <p
          key={puppy.id}
          onClick={() => {
            setFeatPupId(puppy.id);
          }}
        >
          {puppy.name}
        </p>
      ))}
      </div>
    </div>
  );
}

export default App;
