import cimg1 from '/public/images/cause/img-1.png'
import cimg2 from '/public/images/cause/img-2.jpg'
import cimg3 from '/public/images/cause/img-3.jpg'
import cimg4 from '/public/images/cause/img-4.jpg'
import cimg5 from '/public/images/cause/img-5.jpg'
import cimg6 from '/public/images/cause/img-6.jpg'

import cimgSingle1 from '/public/images/cause/single-1.jpg'
import cimgSingle2 from '/public/images/cause/single-2.jpg'
import cimgSingle3 from '/public/images/cause/single-3.jpg'
import cimgSingle4 from '/public/images/cause/single-4.jpg'
import cimgSingle5 from '/public/images/cause/single-5.jpg'
import cimgSingle6 from '/public/images/cause/single-6.jpg'


const Causes = [
    {
        id: '1',
        cImg:cimg1,
        cImgSingle:cimgSingle1,
        process:'65',
        cTitle: 'Aide financière pour les familles défavorisées', 
        slug:'Financial-Help-for-Poor-Families',
        Goal:'300000',
        Raised:'2000',
        authorName:'Laura Faiary',
    },
    {
        id: '2',
        cImg:cimg2,
        cImgSingle:cimgSingle2,
        process:'75',
        cTitle: 'Éducation pour les enfants défavorisés', 
        slug:'Education-for-Poor-Children',
        Goal:'2000000',
        Raised:'2,000',
        authorName:'Laura Faiary',
    },
    {
        id: '3',
        cImg:cimg3,
        cImgSingle:cimgSingle3,
        process:'85',
        cTitle: 'Send Child to School for a Year', 
        slug:'Send-Child-to-School-for-a-Year',
        Goal:'3,000',
        Raised:'2,000',
        authorName:'Laura Faiary',
    },

    {
        id: '6',
        cImg:cimg6,
        cImgSingle:cimgSingle6,
        process:'35',
        cTitle: 'Recyclage pour la charité', 
        slug:'Recycling-For-Charity',
        Goal:'3,000',
        Raised:'2,000',
        authorName:'Laura Faiary',
    }
]

export default Causes;