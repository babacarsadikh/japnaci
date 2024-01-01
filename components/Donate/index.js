import React, { useState, useEffect, useRef } from 'react';

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
import { FaHandHoldingHeart } from 'react-icons/fa';  // Importer une icône de don (par exemple, celle-ci est de FontAwesome)


const Donate = (props) => {
    function getParams() {
        const phoneNumberWithoutCountryCode = phone ? phone.replace(/^(\+\d{1,3}\s?)?/, '') : '';

        var randomDigits = Math.floor(Math.random() * 1000000000);
        const paddedRandomNumber = randomDigits.toString().padStart(7, '0');
        const randomRef = 'DKI' + paddedRandomNumber;
        var succeslink = 'https://japnaci.vercel.app/reussi.php';
        var failedlink = 'https://japnaci.vercel.app/PaymentWaitingPage';
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
    const fullnameRef = useRef();

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
    const selectedCause = Causes.find((cause) => cause.id === causeId);
    const handleDonNatureClick = () => {
        // Rediriger vers la page donateNature
        router.push('/donateNature');
    };
    const handleDonSangClick = () => {
        // Rediriger vers la page donateNature
        router.push('/dondesang');
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
            <style jsx>{`
    /* Ajoutez du CSS personnalisé pour styliser les boutons radio */
    .custom-radio-label {
        background-color: #ffffff; /* Couleur de fond des boutons non sélectionnés */
        border: 2px solid #1d5d1d; /* Bordure des boutons non sélectionnés */
        color: #1d5d1d; /* Couleur du texte des boutons non sélectionnés */
        cursor: pointer;
        padding: 8px 16px;
        border-radius: 4px;
        margin: 4px;
        transition: background-color 0.3s, color 0.3s;
    }

    .custom-radio-label.active {
        background-color: #1d5d1d; /* Couleur de fond des boutons sélectionnés */
        color: #ffffff; /* Couleur du texte des boutons sélectionnés */
    }
    .no-border {
        border: none;
        background-color: transparent;
    }
`}</style>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">

                    <div className="tp-doanation-payment" style={{ textAlign: 'center', background: '#1d5d1d', position: 'relative' }}>

            <div style={{ zIndex: 1, position: 'relative' }}>
                <h1 style={{ color: 'white' }}>FAIRE UN DON FINANCIER</h1>
                {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-0%' }}>
                    <span onClick={handleDonNatureClick} style={{ cursor: 'pointer', marginRight: '20px', color: 'white', textDecoration: 'underline' }}>Cliquez pour faire un don en natures</span>
                     <span onClick={handleDonSangClick} style={{ cursor: 'pointer', color: 'white', textDecoration: 'underline' }}>Cliquez pour faire un don de sang</span>
                </div> */}
            </div>

            {/* Ajouter une icône de don */}
            <div style={{ position: 'absolute', top: -10, left: -26, zIndex: 2, color: '#1d5d1d', borderRadius: '50%', background: 'white', padding: '25px' }}>
                <FaHandHoldingHeart size={30} />
            </div>
        </div>


                        <div id="Donations">
                            <form onSubmit={SubmitHandler} action="#">
                                <div className="tp-donations-amount" >
                                    <h2>Choisissez  votre donation</h2>
                                    <div className="d-flex justify-content-center align-items-center flex-row">
                                        <div className="mb-3">
                                            <label className={`custom-radio-label ${isMontant1000Selected ? 'active' : ''} text-center`}
                                                style={{ alignItems: 'center', justifyContent: 'center' }}
                                            >
                                                <input
                                                    className="form-control no-border"
                                                    type="button"
                                                    name="montantType"
                                                    // value="1000"
                                                    onClick={() => {
                                                        setIsMontant1000Selected(true);
                                                        setIsAutreMontantSelected(false);
                                                        setIsMontantInputVisible(false); // Masquez l'input "Entrez un montant"
                                                        setMontantSaisi('');
                                                    }}
                                                />
                                                Montant de base (1000 CFA)
                                            </label>
                                        </div>
                                        <div className="mb-3 ml-3">
                                            <label className={`custom-radio-label ${!isMontant1000Selected && isAutreMontantSelected ? 'active' : ''}  text-center`}>
                                                <input
                                                    className="form-control no-border"

                                                    type="button"
                                                    name="montantType"
                                                    // value="autre"
                                                    onClick={() => {
                                                        setIsMontant1000Selected(false);
                                                        setIsAutreMontantSelected(true);
                                                        setIsMontantInputVisible(true); // Affichez toujours l'input "Entrez un montant"
                                                        setMontantSaisi('');
                                                    }}
                                                />
                                                Autre montant
                                            </label>
                                        </div>

                                    </div>
                                    {!isMontant1000Selected && isAutreMontantSelected && isMontantInputVisible && (
                                        <div className="mb-3 d-flex align-items-center">
                                            <input
                                                required
                                                type="number"
                                                className="form-control"
                                                name="text"
                                                id="text"
                                                placeholder="Entrez un montant"
                                                value={montantSaisi}
                                                onChange={(e) => setMontantSaisi(e.target.value)}
                                            />
                                            <span style={{ height: "52px", background: "#1d5d1d", color: "white" }} className="input-group-text addon-dollar mb-4">CFA</span>
                                        </div>
                                    )}


                                </div>
                                <div className="row">

                                </div>
                                <div className="tp-donations-details">
                                    <h2>MES COORDONNÉES</h2>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input type="text" className="form-control" name="fullname" id="fname" ref={fullnameRef}  placeholder="Nom complet" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <select className="form-control" id="donatorStatus" name="donatorStatus">
                                                <option value="donatorStatus">Selectionner votre statut *:</option>

                                                <option value="entreprise">Entreprise</option>
                                                <option value="particulier">Particulier</option>
                                                <option value="association">Association</option>
                                            </select>
                                        </div>


                                        <div className="col-lg-12 col-md-6 col-sm-6 col-12 form-group clearfix">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email (facultatif)" value={mail}
                                                onChange={(e) => setMail(e.target.value)} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <select
                                                className="form-control"
                                                id="country"
                                                name="country"
                                                value={selectedCountry}
                                                onChange={handleCountryChange}
                                            >
                                                <option value="">Sélectionnez votre pays</option>
                                                {Pays.map(country => (
                                                    <option key={country.code} value={country.code}>
                                                        {country.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            {/* <input type="text" className="form-control" name="Adress" id="Adress" placeholder="Telephone" /> */}
                                            <PhoneInput
                                                className="form-control"
                                                defaultCountry="sn"
                                                value={phone}
                                                onChange={(phone) => setPhone(phone)}

                                            />
                                        </div>
                                        <div className="col-lg-12 col-12 mt-3 form-group">
                                            <textarea className="form-control" name="note" id="note" placeholder="Ecrivez un brief message (facultatif)"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-doanation-payment">
                                    <h2>méthode de paiement</h2>
                                    <div className="tp-payment-area">
                                        <div className="row">
                                            <div className="col-12">
                                                <Image
                                                    src={pmt1} // Update the path to your image
                                                    alt="Description of the image"
                                                    width={800} // Set the desired width
                                                    height={150} // Set the desired height
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-area sub-btn">
                                    <button onClick={(e) => {
                                         if (montant.value !== '' && fullnameRef.current.value !== ''  && selectedCountry !== null  && donatorStatus.value !== 'donatorStatus' ) {
                                          getParams();
                                          //console.log(fullnameRef.current.value)
                                         }else {
                                          //  getParams();

                                             alert(' Veuillez remplir tous les champs obligatoires.');
                                        }
                                    }} type="submit" className="theme-btn submit-btn">Payez le don</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate;