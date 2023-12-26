// images
import blogImg1 from "/public/images/blog/img-1.jpg";
import blogImg2 from "/public/images/blog/img-2.jpg";
import blogImg3 from "/public/images/blog/img-3.jpg";
import blogImg4 from "/public/images/blog/img-4.jpg";

import blogSingleImg1 from "/public/images/blog/img-8.jpg";
import blogSingleImg2 from "/public/images/blog/img-9.jpg";
import blogSingleImg3 from "/public/images/blog/img-10.jpg";
import blogSingleImg4 from "/public/images/blog/img-11.jpg";

import author from "/public/images/blog/admin.jpg";



const blogs = [
    {
        id: '1',
        title: 'Best and less published their supplier lists.',
        slug:'Best-and-less-published-their-supplier-lists.',
        screens: blogImg1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Jenefer Willy',
        authorImg: author,
        authorTitle:'volunteer',
        create_at: '14 AUG,21',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Your Help Can Make Someone’s life Easier.',
        slug:'Your-Help-Can-Make-Someone’s-life-Easier.',
        screens: blogImg2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Konal Biry',
        authorImg: author,
        authorTitle:'volunteer',
        create_at: '16 AUG,21',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Give Education, It’s The Best Gift Ever.',
        slug:'Give-Education,-It’s-The-Best-Gift-Ever.',
        screens: blogImg3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Jenefer Willy',
        authorImg: author,
        authorTitle:'volunteer',
        create_at: '18 AUG,21',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
    {
        id: '4',
        title: 'Help make their dreams come true.',
        slug:'Help-make-their-dreams-come-true.',
        screens: blogImg4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Jenefer Willy',
        authorImg: author,
        authorTitle:'volunteer',
        create_at: '14 AUG,21',
        blogSingleImg:blogSingleImg4, 
        comment:'35',
        blClass:'format-standard-image',
    },
];
export default blogs;