import React from 'react'
import Link from 'next/link'
import Causes from '../../api/cause'
import Image from 'next/image'

const CauseSection = (props) => {
    const ClickHandler = (cause) => {
        window.scrollTo(10, 0);
        window.location.href = `/donate?causeId=${cause.id}`;

    }
    return (
        <div className="case-area section-padding">
            <div className="container">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-title section-title2 text-center">
                        <div className="thumb-text">
                            <span>CAMPAGNES</span>
                        </div>
                        <h2>Dernières campagnes</h2>
                    </div>
                </div>
                <div className="row">
                    {Causes.slice(0, 6).map((Cause, citem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={citem}>
                            <div className="cause-item">
                                <div className="cause-top">
                                    <div className="cause-img">
                                        <Image src={Cause.cImg} alt="" />
                                        <div className="case-btn">
                                            <button onClick={() => ClickHandler(Cause)} href="/donate" className="theme-btn">faire un geste<i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="cause-text">
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/">BUT : {Cause.Goal} CFA</Link></li>
                                        <li><Link onClick={ClickHandler} href="/">Recueillis : {Cause.Raised} CFA</Link></li>
                                    </ul>
                                    <h3><Link onClick={ClickHandler} href='/cause-single/[slug]' as={`/cause-single/${Cause.slug}`}>{Cause.cTitle}</Link></h3>
                                    {/* <p>It is a long established fact that a reader will be distracted.</p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CauseSection;