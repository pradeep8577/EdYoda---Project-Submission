import React, { useState } from 'react'
import './Hero.css'
import Signup from './Signup'
import Subscribe from './Subscribe'

function Home() {

  const [currTab, setCurrTab] = useState(1)
  
  const signUpTab = () =>{
    setCurrTab(1)
  }
  const subscribeTab = () =>{
    setCurrTab(2)
  }

  return (
    <section className='heroContainer'>
      <div className='heroLeft'>
        <div className='heroTitle'>
          <p>Access curated courses worth</p><br />
          <p><span className='heroTitlePriceIcon'>₹</span> <span className='heroTitleWorth'>18,500</span> at just <span className='heroTitlePerYear'>₹ 99</span> per year!</p>
        </div>
        <div className='heroLeftClaim'>
          <img height={45} width={45} src="book.svg" alt="" />
          <p><span>100+</span> Job relevant courses  </p>
        </div>
        <div className='heroLeftClaim'>
          <img height={45} width={45} src="watch.svg" alt="" />
          <p><span>20,000+</span> Hours of content  </p>
        </div>
        <div className='heroLeftClaim'>
          <img height={45} width={45} src="tv.svg" alt="" />
          <p><span>Exclusive</span> webinar access  </p>
        </div>
        <div className='heroLeftClaim'>
          <img height={45} width={45} src="education.svg" alt="" />
          <p>Scholarship worth <span>₹94,500</span> </p>
        </div>
        <div className='heroLeftClaim'>
          <img height={45} width={45} src="watch.svg" alt="" />
          <p><span>Ad Free</span> Learning experience  </p>
        </div>
        <div>

        </div>
      </div>
      <div className='heroRight'>
          <div className='signUpSubscribeContainer'>
            <div onClick={signUpTab} className='SignUpContainer'>
              <p className='signupCircle'>1</p>
              <p className='signUp'>Sign Up</p>
            </div>
            <div onClick={subscribeTab} className='SubscribeContainer'>
              <p className='subscribeCircle'>2</p>
              <p className='signUp'>Subscribe</p>
            </div>
          </div>
        {currTab===1 && <Subscribe/>}
        {currTab===2 && <Subscribe/>}
      </div>
    </section>
  )
}

export default Home