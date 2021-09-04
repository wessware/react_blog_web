import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals. 
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time. 
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                        <Link to='/'>Competitions</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/sign-up'>Submit a video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Promoters</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencers</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>Instagram</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>GitHub</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>YouTube</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrapper'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL 2021</small>
                    <div className='social-icons'>
                        <Link 
                        className='social-icon-link facebook' 
                        to='/' 
                        target='_blank' 
                        aria-label='Facebook'>
                            <i class='fab fa-facebook'/>
                        </Link>
                        <Link 
                        className='social-icon-link instagram' 
                        to='/' 
                        target='_blank' 
                        aria-label='Instagram'>
                            <i class='fab fa-instagram'/>
                        </Link>
                        <Link 
                        className='social-icon-link twitter' 
                        to='/' 
                        target='_blank' 
                        aria-label='Twitter'>
                            <i class='fab fa-twitter'/>
                        </Link>
                        <Link 
                        className='social-icon-link github' 
                        to='/' 
                        target='_blank' 
                        aria-label='Github'>
                            <i class='fab fa-github'/>
                        </Link>
                    </div>
                </div>
            </section>

            
        </div>
    )
}

export default Footer
