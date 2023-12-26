import React from 'react';
import Link from 'next/link'
import VideoModal from '../../components/ModalVideo'

import blog1 from '/public/images/blog/img-10.jpg'
import blog2 from '/public/images/blog/img-8.jpg'
import blog3 from '/public/images/blog/img-9.jpg'
import blog4 from '/public/images/blog/admin.jpg'


const BlogFullwidth = () => {

    return(
        <section className="tp-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-md-12">
                        <div className="tp-tp-blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><img src={blog4} alt=""/> By Admin</Link></li>
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><i className="ti-calendar"></i> Sep 25,2023</Link></li>
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h3><Link href="/blog-single/Best-and-less-published-their-supplier-lists.">Help the helpless who need you.</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link href="/blog-single/Best-and-less-published-their-supplier-lists." className="read-more">Read More...</Link>
                            </div>
                            <div className="post format-video">
                                <div className="entry-media video-holder">
                                    <img src={blog2} alt=""/>
                                    <div className="video-btn2">
                                        <VideoModal/>
                                    </div>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><img src={blog4} alt=""/> By Admin</Link></li>
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><i className="ti-calendar"></i> Sep 25,2023</Link></li>
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h3><Link href="/blog-single/Best-and-less-published-their-supplier-lists.">They are waiting for your help.</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link href="/blog-single/Best-and-less-published-their-supplier-lists." className="read-more">Read More...</Link>
                            </div>
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src={blog3} alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><img src={blog4} alt=""/> By Admin</Link></li>
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><i className="ti-calendar"></i> Sep 25,2023</Link></li>
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h3><Link href="/blog-single/Best-and-less-published-their-supplier-lists.">Help the helpless who need you.</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link href="/blog-single/Best-and-less-published-their-supplier-lists." className="read-more">Read More...</Link>
                            </div>

                            <div className="post format-quote">
                                <ul className="entry-meta">
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><img src={blog4} alt=""/> By Admin</Link></li>
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><i className="ti-calendar"></i> Sep 25,2023</Link></li>
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h3><Link href="/blog-single/Best-and-less-published-their-supplier-lists.">They are waiting for your help.</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                            </div>
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link href="/blog-single/Best-and-less-published-their-supplier-lists." aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link href="/blog-single/Best-and-less-published-their-supplier-lists.">1</Link></li>
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists.">2</Link></li>
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists.">3</Link></li>
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists.">4</Link></li>
                                    <li>
                                        <Link href="/blog-single/Best-and-less-published-their-supplier-lists." aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default BlogFullwidth;
