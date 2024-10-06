import './landing.css';
import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { Authentication } from '../Components/contexts/AuthContext';
import Charts from '../Components/charts/Charts';
import CarbonDoughnutChart from '../Components/charts/CarbonDoughnutChart';
import CO2BubbleChart from '../Components/charts/CO2BubbleChart';

import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [user,setUser] = useContext(Authentication)
  const navigate = useNavigate();
  const HandleGetStarted = () =>{

    if(user){
      setTimeout(() => {
        navigate('/Dashboard')
      }, 2000);
    }
    else{
      console.log("sign in ")
      
    }
  }
 
 return (
    
    <div className="cont">
      <section id="features" className="features-section">
        <div className="container">
          
          <div className="features">
            <div className="feature-box">
              <h3>Carbon Calculator</h3>
              <p>Easily calculate your carbon footprint based on your daily activities.</p>
              {<Button
                  colorScheme='teal'
                  size = "md"
                  onClick={()=>{
                HandleGetStarted()
                }}
                m="10px"
              >
                Get Started
              </Button>}
            </div>
            <div className="feature-box" >
              <h3>Track Progress</h3>
              <p>Monitor your emissions over time and see how your habits impact the environment.</p>
            </div>
            <div className="feature-box">
              <h3>Eco-friendly Tips</h3>
              <p>Receive personalized suggestions to reduce your carbon footprint.</p>
            </div>
          </div>
        </div>
      </section>

      <section id='chart-section'>
        <div id='chart-bar-1'>
          <Charts/>
        </div>
        <div id='chart-bar-2'>
          <CarbonDoughnutChart/>
        </div>
        <div id='chart-bar-1'>
          <CO2BubbleChart/>
        </div>
        
      </section>

      <section id="about" className="about-section">
        <div className="container" id='about'>
          <h2 id='cc'>About CarbonTally</h2><br /><br />
          <p id='content'>
            CarbonTally is a platform designed to help individuals understand their impact on the
            environment and take actionable steps toward reducing their carbon footprint. Together,
            we can create a more sustainable world.
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section">
      <div class="container">
        <h2>Contact Us</h2>
        <p>
          ㅤ
        </p>
        <form>
          <ul class="example-2">
            <li class="icon-content">
              <a
                href="https://linkedin.com/"
                aria-label="LinkedIn"
                data-social="linkedin"
              >
                <div class="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                  xml:space="preserve"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <div class="tooltip">LinkedIn</div>
            </li>
            <li class="icon-content">
              <a href="https://www.github.com/" aria-label="GitHub" data-social="github">
                <div class="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                  xml:space="preserve"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <div class="tooltip">GitHub</div>
            </li>
            <li class="icon-content">
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                data-social="instagram"
              >
                <div class="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                  xml:space="preserve"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <div class="tooltip">Instagram</div>
            </li>
          
            <li class="icon-content">
              <a
                href="https://telegram.org/"
                aria-label="Telegram"
                data-social="telegram"
              >
                <div class="filled"></div>
                <svg version="1.1" viewBox="0 0 100 100">
                  <path
                    d="M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5  c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2  c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9  c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2  c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6  c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1  c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <div class="tooltip">Telegram</div>
            </li>
          </ul>
        </form>
      </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 CarbonTally. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
