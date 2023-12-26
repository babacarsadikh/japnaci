import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import BlogSidebar from '../BlogSidebar'
import blog2 from '/public/images/blog-details/author.jpg'
import blog3 from '/public/images/blog-details/comments-author/img-1.jpg'
import blog4 from '/public/images/blog-details/comments-author/img-2.jpg'
import blog5 from '/public/images/blog-details/comments-author/img-3.jpg'
import Image from 'next/image';

const BlogSingleSection = (props) => {

    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)


    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <section className="tp-blog-single-section  section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="tp-tp-blog-content clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <Image src={BlogDetails?.blogSingleImg} alt="" />
                                </div>
                                <ul className="entry-meta">
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><Image src={BlogDetails?.authorImg} alt="" /> By Admin</Link></li>
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><i className="ti-calendar"></i>{BlogDetails?.create_at}</Link></li>
                                    <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h2>Help the helpless who need you.</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                                <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </blockquote>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                            </div>
                            <div className="tag-share clearfix">
                                <div className="tag">
                                    <ul>
                                        <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists.">Business</Link></li>
                                        <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists.">Marketing</Link></li>
                                        <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists.">SEO</Link></li>
                                    </ul>
                                </div>
                                <div className="share">
                                    <ul>
                                        <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><i className="ti-facebook"></i></Link></li>
                                        <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link href="/blog-single/Best-and-less-published-their-supplier-lists."><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="author-box">
                                <div className="author-avatar">
                                    <Link href="/blog-single/Best-and-less-published-their-supplier-lists." target="_blank"><Image src={blog2} alt="" />  </Link>
                                </div>
                                <div className="author-content">
                                    <Link href="/blog-single/Best-and-less-published-their-supplier-lists." className="author-name">Henry Joyes</Link>
                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                    <div className="author-btn">
                                        <Link href="/blog-single/Best-and-less-published-their-supplier-lists.">All Post From Author</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="more-posts clearfix">
                                <div className="previous-post">
                                    <Link href="/blog-single/Best-and-less-published-their-supplier-lists.">
                                        <span className="post-control-link">Previous</span>
                                    </Link>
                                </div>
                                <div className="next-post">
                                    <Link href="/blog-single/Best-and-less-published-their-supplier-lists.">
                                        <span className="post-control-link">Next post</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="tp-blog-single-section wrap-even">
                            <div className="comments-area">
                                <div className="comments-section">
                                    <h3 className="comments-title">Comments</h3>
                                    <ol className="comments">
                                        <li className="comment even thread-even depth-1" id="comment-1">
                                            <div id="div-comment-1">
                                                <div className="comment-theme">
                                                    <div className="comment-image"> <Image src={blog3} alt="" /> </div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                            <div className="comments-reply">
                                                                <Link className="comment-reply-link" href="/blog-single/Best-and-less-published-their-supplier-lists."><i className="fa fa-reply" aria-hidden="true"></i><span>Reply</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="children">
                                                <li className="comment">
                                                    <div>
                                                        <div className="comment-theme">
                                                            <div className="comment-image"> <Image src={blog4} alt="" /></div>
                                                        </div>
                                                        <div className="comment-main-area">
                                                            <div className="comment-wrapper">
                                                                <div className="comments-meta">
                                                                    <h4>Lily Watson <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                                </div>
                                                                <div className="comment-area">
                                                                    <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                    <div className="comments-reply">
                                                                        <Link className="comment-reply-link" href="/blog-single/Best-and-less-published-their-supplier-lists."><span><i className="fa fa-reply" aria-hidden="true"></i> Reply</span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li className="comment">
                                                            <div>
                                                                <div className="comment-theme">
                                                                    <div className="comment-image"><Image src={blog5} alt="" /> </div>
                                                                </div>
                                                                <div className="comment-main-area">
                                                                    <div className="comment-wrapper">
                                                                        <div className="comments-meta">
                                                                            <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                                        </div>
                                                                        <div className="comment-area">
                                                                            <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                            <div className="comments-reply">
                                                                                <Link className="comment-reply-link" href="/blog-single/Best-and-less-published-their-supplier-lists."><span><i className="fa fa-reply" aria-hidden="true"></i> Reply</span></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className="comment-respond">
                                <h3 className="comment-reply-title">Leave a Comment</h3>
                                <form method="post" id="commentform" className="comment-form" onSubmit={submitHandler}>
                                    <div className="form-inputs">
                                        <input placeholder="Name" type="text" />
                                        <input placeholder="Email" type="email" />
                                        <input placeholder="Website" type="url" />
                                    </div>
                                    <div className="form-textarea">
                                        <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                    </div>
                                    <div className="form-submit">
                                        <input id="submit" value="Reply" type="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>
    )

}

export default BlogSingleSection;
