import { useState } from 'react'
import TestimonialCard from '../components/TestimonialCard'
import ProfileCard from '../components/ProfileCard'
import harvey from '../assets/harvey.jpeg'
import snow from '../assets/snow.jpeg'
import mike from '../assets/mike.jpeg'
import Navbar from '../components/Navbar'
import { FaStar, FaStarHalf, FaQuoteRight } from 'react-icons/fa'



function Testimonials() {

const [activeIndex, setActiveIndex] = useState(0)

function handleIndexValue (index){
  setActiveIndex(index)
}

  return (
    <>

<Navbar/>
<section id="testimonial" data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="500">
  <div className="testimonial-title">
    <h2>Testimonials</h2>
    <p>What clients say about me</p>
  </div>
  { activeIndex===0 && <TestimonialCard className={"testimonial-card"}>
    <div className="star-rating">
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <p>5.0 Rating</p>
    </div>
    <h4>
      Felix was a real pleasure to work with and we look forward to working with
      him again. He&apos;s definitely the kind designer you can trust with a project
      from start to finish
    </h4>
    <FaQuoteRight className='quote'/>
  </TestimonialCard>}
  {activeIndex ===1 && <TestimonialCard className={"testimonial-card"}>
    <div className="star-rating">
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStarHalf/>
      <p>4.5 Rating</p>
    </div>
    <h4>
      Working with Felix was a pleasure. Their expertise in both design and
      development allowed them to create a website that exceeded our
      expectations. We couldn&apos;t be happier with the end result.
    </h4>
    <FaQuoteRight className='quote'/>
  </TestimonialCard>}
 { activeIndex ===2 && <TestimonialCard className={"testimonial-card"}>
    <div className="star-rating">
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStarHalf/>
      <p>4.5 Rating</p>
    </div>
    <h4>
      I highly recommend Felix for any design or development project. He has the
      skills, experience, and passion to create stunning, functional solutions
      that will take your business to the next level.
    </h4>
    <FaQuoteRight className='quote'/>
  </TestimonialCard>}
  <div className="client-profile-card">
    <ProfileCard className={`single-profile-card ${activeIndex === 0 ? 'profile-card-active': ''}`}
    onClick={()=> handleIndexValue(0)}
    >
      <img src={harvey} alt="" />
      <div>
        <h4>Harvey Spectre</h4>
        <p>
          VP &amp; Co-Founder, <a href="">Suits</a>
        </p>
      </div>
    </ProfileCard>
    <ProfileCard className={`single-profile-card ${activeIndex === 1 ? 'profile-card-active': ''}`}
    onClick={()=> handleIndexValue(1)}>
      <img src={snow} alt="" />
      <div>
        <h4>Jon Snow</h4>
        <p>
          VP, <a href="">A Song of Ice and Fire</a>
        </p>
      </div>
    </ProfileCard>
    <ProfileCard className={`single-profile-card ${activeIndex === 2 ? 'profile-card-active': ''}`}
    onClick={()=> handleIndexValue(2)}>
      <img src={mike} alt="" />
      <div>
        <h4>Mike Mclusky</h4>
        <p>
          Freelancer, <a href="">Mayor of Kingstown</a>
        </p>
      </div>
    </ProfileCard>
  </div>
</section>
    </>

    )
}

export default Testimonials