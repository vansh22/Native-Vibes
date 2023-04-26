import React, { useState } from 'react';
import indiaImage from '../assets/images/india.webp';
import "./IndiaPage.css"

function IndiaPage() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // handle form submission based on selectedOption value
//     console.log(`Selected option: ${selectedOption}`);
//   };
const handleSubmit = (event) => {
    event.preventDefault();
  
    if (selectedOption === 'explore') {
      // explore incredible india
      window.location.href = '/cardpage';
    } else {
      // handle recommendation form submission
      window.location.href = '/recommend';
    }
  };
  

  const handleReset = () => {
    setSelectedOption('');
  };

  return (
    <div>
        <h2 className='tit'>“The journey of a thousand miles begins with a single step.”</h2>
      <img src={indiaImage} alt="Incredible India" style={{ maxWidth: '100%' }} className='image'/>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              name="option"
              value="explore"
              className='explore'
              checked={selectedOption === 'explore'}
              onChange={handleOptionChange}
            />
            Explore Incredible India
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="option"
              value="recommendation"
              className='recommend'
              checked={selectedOption === 'recommendation'}
              onChange={handleOptionChange}
            />
            Recommendation based on text-based query
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default IndiaPage;
