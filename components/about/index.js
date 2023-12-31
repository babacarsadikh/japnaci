import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/about/about.jpg'
import abimg2 from '/public/images/about/1.png'
import abimg3 from '/public/images/about/2.png'
import abimg4 from '/public/images/shape/shape2.png'
import Image from 'next/image'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12  grid col-12 mt-4">
                        <div className="">
                            <div className="about-img">
                                <Image src={abimg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 grid  col-md-12 col-12">
                        <div className="about-text">
                            <div className="section-title">
                            <h1 style={{ color: '#1d5d1d', display: 'inline-block', marginLeft: '0.5em' }}>A PROPOS DE JAPNACI</h1>
                                {/* <h2>Khairah is <span>Nonprofit</span> Organization <span>For Help</span> Children.</h2> */}
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                         <Link onClick={ClickHandler} href=""><span style={{ color: '#1d5d1d' }}>En savoir plus...</span></Link>   
                            {/* <div className="ab-icon-area">
                                <div className="about-icon-wrap">
                                    <div className="about-icon-item">
                                        <div className="ab-icon">
                                            <Image draggable="false" src={abimg2} alt="" />
                                        </div>
                                        <div className="ab-text">
                                            <h2><Link onClick={ClickHandler} href="/cause-single/Financial-Help-for-Poor-Families">Save  Children.</Link></h2>
                                        </div>
                                    </div>
                                    <div className="about-icon-item">
                                        <div className="ab-icon ab-icon2">
                                            <Image draggable="false" src={abimg3} alt="" />
                                        </div>
                                        <div className="ab-text">
                                            <h2><Link onClick={ClickHandler} href="/cause-single/Financial-Help-for-Poor-Families">Fresh And  Clean Water.</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="ab-shape">
                 <Image src={abimg4} alt="" />
            </div> */}
        </div>
    )
}

export default About;