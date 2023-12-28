import React from 'react'
import Logo from '/public/images/logo/logo.png'
import Link  from 'next/link'
import HeaderTopbar from '../HeaderTopbar'
import MobileMenu from '../../components/MobileMenu'
import min1 from '/public/images/shop/mini/img-1.jpg'
import min2 from '/public/images/shop/mini/img-2.jpg'
import Image from 'next/image'

const Header = (props) => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

    return(	
	<div className="middle-header">
        <HeaderTopbar tpClass={props.tpClass}/>
        <div className="header-style-3">
            <div className="container">
                <div className="header-content">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                        <div className="logo">
                            <Link href="/" title="" > <p style={{color: "#1d5d1d",fontFamily: 'Buddy Champion', fontSize:"30px"}}>JAPNACI</p> </Link>
                        </div>
                    </div>
                    <div className="col-lg-8 d-lg-block d-none">
                        <nav>
                            <ul>
                                <li><Link className="active" href="/home" title="">Accueil</Link>
                              
                                </li>
                                {/* <li><Link href="/about" title="">A propos de l'association</Link></li> */}
                                <li><Link href="/case" title="">Actions Solidaires</Link></li>

                              
                                {/* <li><Link href="/donate" title="">Faire un Don</Link></li> */}
                                {/* <li><Link href="/home" title="">Pages</Link>
                                    <ul>
                                        <li><Link href="/about" title="">About</Link></li>
                                        <li><Link href="/donate" title="">Donate</Link></li>
                                        <li><Link href="/volunteer" title="">Volunteer</Link></li>
                                        <li><Link href="/404" title="">Error 404</Link></li>
                                    </ul>
                                </li> */}

                             
                                <li><Link href="/contact" title="">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-1 col-md-6 col-sm-6 col-6">
                        <div className="contact">
                            <div className="cart-search-contact">
                                <div className="header-search-form-wrapper">
                                    <button className="search-toggle-btn"><i className="fi flaticon-magnifying-glass"></i></button>
                                    <div className="header-search-form">
                                        <form onSubmit={SubmitHandler}>
                                            <div>
                                                <input type="text" className="form-control" placeholder="Recherche ici..."/>
                                                <button type="submit"><i className="ti-search"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2">
                        <MobileMenu/>
                    </div>
                </div>
                
                    <div className="clearfix"></div>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Header;