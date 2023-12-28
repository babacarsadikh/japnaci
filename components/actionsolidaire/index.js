import React, { useState, useEffect } from 'react';

import pmt1 from '/public/images/partners/payment.png'
import pmt2 from '/public/images/checkout/img-2.png'
import pmt3 from '/public/images/checkout/img-3.png'
import pmt4 from '/public/images/checkout/img-4.png'
import Image from 'next/image'
import Pays from '../../api/pays';
import Causes from '../../api/cause'
// import 'react-phone-number-input/style.css'
import { PhoneInput } from 'react-international-phone';
import "react-international-phone/style.css";
import { useRouter } from 'next/router';
import { FaBox } from 'react-icons/fa';
import { IoMdGift } from 'react-icons/io';
import { FaHandHoldingUsd, FaLeaf } from 'react-icons/fa';




const ActionSolidaire = (props) => {
    function getParams() {
        const phoneNumberWithoutCountryCode = phone ? phone.replace(/^(\+\d{1,3}\s?)?/, '') : '';

        var randomDigits = Math.floor(Math.random() * 1000000000);
        const paddedRandomNumber = randomDigits.toString().padStart(7, '0');
        const randomRef = 'DKI' + paddedRandomNumber;
        var succeslink = 'https://dkrinfos.com/reussi.php';
        var failedlink = 'https://japnaci.vercel.app/404';
        var ref = randomRef;
        // var samamontant = montant
        var samamontant = isMontant1000Selected ? 1000 : montantSaisi; // Utilise 1000 CFA si le bouton radio "Montant de base (1000 CFA)" est sélectionné, sinon utilise la valeur saisie
        if (!samamontant) {
            alert("Veuillez renseigner le montant avant de continuer.");
            return;
        }

        console.log(samamontant);
        sendPaymentInfos(ref,
            'DAKIN14898', 'iDnrqZwm252SnwDuQvtHSIVxUgpmFXLzfLONQOOkH51ylgmlNw',
            'dkrinformatique.sn', succeslink,
            failedlink, samamontant,
            'Dakar', mail, '', '', phoneNumberWithoutCountryCode);

    }

    const [phone, setPhone] = useState("");

    const [mail, setMail] = useState('');
    const [montant, setMontant] = useState(1000); // Initialisez avec 1000 CFA par défaut
    const [montantSaisi, setMontantSaisi] = useState(''); // Pour gérer la saisie utilisateur
    const [isMontant1000Selected, setIsMontant1000Selected] = useState(true); // Pour gérer la sélection du bouton radio
    const [isAutreMontantSelected, setIsAutreMontantSelected] = useState(false);
    const [isMontantInputVisible, setIsMontantInputVisible] = useState(true); // Ajout de cet état


    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (event) => {
        // Mettez à jour l'état avec le pays sélectionné
        setSelectedCountry(event.target.value);
    };
    const router = useRouter();

    const { causeId } = router.query; // Récupérez le paramètre 'causeId' de l'URL
    // Trouver la cause correspondante en fonction de l'ID passé dans l'URL
    const selectedCause = Causes.find((cause) => cause.id === causeId);
    // Calculer le pourcentage du montant recueilli par rapport au but
    const percentageRaised = Math.floor((selectedCause?.Raised / selectedCause?.Goal) * 100) || 0;


    const handleDonNatureClick = () => {
        // Rediriger vers la page donateNature
        router.push('/donateNature');
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://touchpay.gutouch.com/touchpay/script/prod_touchpay-0.0.1.js';
        script.type = 'text/javascript';
        script.async = true;
        document.head.appendChild(script);
        console.log('Pays sélectionné :', selectedCountry);
    }, [selectedCountry]);


    return (
        <div className="tp-donation-page-area section-padding">


            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">

                        <div className="tp-doanation-payment" style={{ textAlign: 'center', background: '#1d5d1d', position: 'relative' }}>
                            {selectedCause ? (
                                <div>
                                    <h2 style={{ color: 'white', marginTop: "43px" }}>{selectedCause.cTitle}</h2>

                                </div>
                            ) : (
                                <p>La cause sélectionnée n'a pas été trouvée.</p>
                            )}
                            {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-0%' }}>
                                <span onClick={handleDonNatureClick} style={{ cursor: 'pointer', marginRight: '20px', color: 'white', textDecoration: 'underline' }}>Cliquez pour faire un don financier.</span>
                                <span style={{ cursor: 'pointer', color: 'white', textDecoration: 'underline' }}>Cliquez pour Sponsoriser une Action Solidaire.</span>
                            </div> */}
                            {/* Ajouter une icône de don */}
                            <div style={{ position: 'absolute', top: -10, left: -26, zIndex: 2, color: '#1d5d1d', borderRadius: '50%', background: 'white', padding: '25px' }}>
                                <FaBox size={30} />
                            </div>
                        </div>


                        <div id="Donations">
                            <div className="tp-donations-amount" >
                                {selectedCause ? (
                                    <div >
                                        <p style={{ color: 'black', }}>BUT : {selectedCause.Goal} CFA</p>
                                        <p style={{ color: 'black', }}>Recueillis : {selectedCause.Raised} CFA</p>
                                        {/* Ajoutez d'autres informations que vous souhaitez afficher */}
                                        {/* Barre de progression pour le montant recueilli par rapport au but */}
                                        <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '5px', marginTop: '10px' }}>
                                            <div
                                                style={{
                                                    width: `${percentageRaised}%`,
                                                    height: '20px',
                                                    backgroundColor: '#1d5d1d',
                                                    borderRadius: '5px',
                                                    textAlign: 'center',
                                                    lineHeight: '20px',
                                                    color: '#fff',
                                                }}
                                            >
                                                {percentageRaised.toFixed(2)}%
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <p>La cause sélectionnée n'a pas été trouvée.</p>
                                )}

                                <p style={{ color: 'black', }} className='mt-3'>Description de l'action ...Description de l'action ...Description de l'action ...Description de l'action ...Description de l'action ...Description de l'action ...</p>


                                <button className="theme-btn" >
                                    Je participe en argent <FaHandHoldingUsd />
                                </button>
                                <button style={{ marginLeft: 10 }} className="theme-btn" onClick={() => handleDonNatureClick()}>
                                    Je participe en nature  <FaLeaf />
                                </button>



                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActionSolidaire;