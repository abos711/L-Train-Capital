import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div>
      <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h3>Every neighborhood can thrive with a little more creativity</h3>
      <br/>
      <p>L Train Capital focuses on building communities through tasteful design and creative collaborations with food, music, and art establishments to develop unique and culturally-rich neighborhoods.</p>
      <p>Headquartered in Williamsburg, Brooklyn, we are in the epicenter of one of the most dynamic neighborhoods of New York City and the world.</p>
      <p>In order to achieve our vision, we serve as the leading partner to our real estate investors, who are equally passionate about creating value through community development across all real estate asset classes.</p>
      <p>Together, we execute on value creation strategies that build meaningful communities for the future.</p>
      </div>
      <div>
        <p>add carousel of work</p>
      </div>
    </div>
  );
}

export default HeroSection;
