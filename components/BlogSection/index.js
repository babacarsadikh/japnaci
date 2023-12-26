import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import blogs from '../../api/blogs'

const BlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="blog-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>Blog</span>
                            </div>
                            <h2>Our Latest News</h2>
                            <p>It is a long established fact that reader distracted by the the readable content off page looking at its layout point.</p>
                        </div>
                    </div>
                </div>
                <div className="blog-wrap">
                    <div className="row">
                        {blogs.map((blog, bl) => (
                            <div className="col col-lg-6 col-12" key={bl}>
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <Image src={blog.screens} alt="" />
                                    </div>
                                    <div className="blog-content">
                                        <ul>
                                            <li>{blog.create_at}</li>
                                            <li><i className="fa fa-heart" aria-hidden="true"></i>56</li>
                                            <li><i className="fa fa-comments-o" aria-hidden="true"></i> 78</li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection;