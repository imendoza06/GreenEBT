import React from 'react';
import ReactDOM from 'react-dom';
import "../App.css";
import SlideShow from './SlideShow';


class AboutPage extends React.Component {
  constructor(props) {
    super(props)
  }
  
    render() {
      return (
        <div className="about-us">
          <h1 className="About-header">About GreenEBT</h1>
          <p>Founded in March 2018, GreenEBT seeks to connect EBT recipients with farmers markets 
            accepting EBT.</p>

          <h1 className="About-header">The Team</h1>
          <ul>
            <li>Ivan Mendoza</li>
            <li>Princess Guerrero</li>
            <li>Le'Shanda Miller</li>
            <li>Luiza Maciejak</li>
            <li>Omari Rose</li>
          </ul>

        
          <SlideShow />
          

          <h2 className="About-header">Contact us</h2>
            <p>Email: contact@greenebt.com <br />
               Phone: 212-345-5678 <br />
               Address: 494 Broadway 36th fl. New York, NY 10003
            </p>
        </div>
      );
    }
  }

  export default AboutPage;