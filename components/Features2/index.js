import React from 'react'
import Link from 'next/link'
import featuresimg from '/public/images/features/img-1.png'
import featuresimg2 from '/public/images/features/img-2.png'
import featuresimg3 from '/public/images/features/img-3.png'
import featuresimg4 from '/public/images/features/img-4.png'
import Image from 'next/image'


const Features2 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="features-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="features-wrap">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="features-item">
                                        <div className="features-icon">
                                            <Image draggable="false" src={featuresimg} alt="" />
                                        </div>
                                        <div className="features-content">
                                            <h2><Link onClick={ClickHandler} href="/cause-single/Financial-Help-for-Poor-Families">Cancer Treatment</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="features-item-2">
                                        <div className="features-icon">
                                            <Image draggable="false" src={featuresimg2} alt="" />
                                        </div>
                                        <div className="features-content">
                                            <h2><Link onClick={ClickHandler} href="/cause-single/Financial-Help-for-Poor-Families">Hospital Build</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="features-item">
                                        <div className="features-icon">
                                            <Image draggable="false" src={featuresimg4} alt="" />
                                        </div>
                                        <div className="features-content">
                                            <h2><Link onClick={ClickHandler} href="/cause-single/Financial-Help-for-Poor-Families">Food & Build Home</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="features-item-2 active">
                                        <div className="features-icon">
                                            <Image draggable="false" src={featuresimg3} alt="" />
                                        </div>
                                        <div className="features-content">
                                            <h2><Link onClick={ClickHandler} href="/cause-single/Financial-Help-for-Poor-Families">Environtment Recyle</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features2;