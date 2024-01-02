import cimg1 from '/public/images/cause/talibe.jpg'
import cimg2 from '/public/images/cause/ecole.jpeg'
import cimg3 from '/public/images/cause/puit.jpg'
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
        cTitle: 'Aides aux populations défavorisées  ', 
        slug:'Financial-Help-for-Poor-Families',
        Goal:'300000',
        Raised:'90000',
        authorName:'Laura Faiary',
        description:"Avec votre aide, nous améliorons la vie des personnes qui ont moins de chance. Ensemble, nous offrons des chances d'éducation, améliorons les soins de santé, et assurons que tout le monde a assez à manger. Rejoignez-nous pour construire des communautés plus fortes et solidaires. Découvrez des histoires inspirantes de gens dont la vie a changé grâce à des actions comme les nôtres."
    },
    {
        id: '2',
        cImg:cimg2,
        cImgSingle:cimgSingle2,
        process:'75',
        cTitle: 'Éducation pour les enfants défavorisés', 
        slug:'Education-for-Poor-Children',
        Goal:'2000000',
        Raised:'900000',
        authorName:'Laura Faiary',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        id: '3',
        cImg:cimg3,
        cImgSingle:cimgSingle3,
        process:'85',
        cTitle: 'Accompagnement financier', 
        slug:'Send-Child-to-School-for-a-Year',
        Goal:'1000000',
        Raised:'200000',
        authorName:'Laura Faiary',
        description:'Chaque contribution compte pour ceux qui font face à des défis économiques. Votre soutien permet de créer un filet de sécurité financier, offrant des ressources directes et des subventions.Nous voulons vous donner les moyens de changer des vies en favorisant la stabilité financière. Ensemble, construisons une société plus équitable et résiliente.        '


    },

   
]

export default Causes;