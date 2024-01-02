import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Contactdonpage from '../../components/donnaturecontact';


const ContactDonPage =() => {
    return(
        <Fragment>
            <Navbar/>
            {/* <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/>  */}
            <Contactdonpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactDonPage;

