import React from 'react'
import Link  from 'next/link'

const HeaderTopbar = (props) => {
    return(	
        <div className={`topbar ${props.tpClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-call"></i>+000123456789</li>
                                <li><i className="fi flaticon-envelope"></i> khairah@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link href="/login">Login</Link></li>
                                <li><Link href="/register">Sign Up</Link></li>
                                <li><Link className="theme-btn" href="/donate">Donate Now</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;