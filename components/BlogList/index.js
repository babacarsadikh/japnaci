import React from 'react';
import Link from 'next/link'
import BlogSidebar from '../BlogSidebar'
import VideoModal from '../../components/ModalVideo'
import Image from 'next/image';
import blogs from '../../api/blogs'


const BlogList = (props) => {

    return(
        <section className="tp-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="tp-tp-blog-content">
                        {blogs.map((blog, bitem) => (
                                <div className={`post  ${blog.blClass}`} key={bitem}>
                                    <div className="entry-media">
                                        <Image src={blog.blogSingleImg} alt=""/>
                                        <VideoModal />
                                    </div>
                                    <ul className="entry-meta">
                                        <li><Link href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}><Image src={blog.authorImg} alt=""/> By {blog.author}</Link></li>
                                        <li><Link href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}><i className="ti-calendar"></i> {blog.create_at}</Link></li>
                                        <li><Link href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}><i className="ti-heart"></i>  {blog.comment}</Link></li>
                                    </ul>
                                    <h3><Link href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                    <Link href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`} className="read-more">Read More...</Link>
                                </div>
    
                            ))}
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
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>
     )
        
}

export default BlogList;
