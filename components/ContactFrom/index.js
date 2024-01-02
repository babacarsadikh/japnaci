import React, { Component } from 'react'


class ContactForm extends Component {


    state = {
        name: '',
        email: '',
        adresse: '',
        telephone: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            adresse,
            telephone,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "S'il vous plaît entrez votre nom et prénom";
        }
        if (email === '') {
            error.email = "Veuillez entrer votre email";
        }
        if (adresse === '') {
            error.adresse = "Veuillez renseigenr votre adresse";
        }
        if (telephone === '') {
            error.telephone = "Veuillez entrer votre numero de telephone";
        }
        if (events === '') {
            error.events = "Sélectionnez votre liste d'événements";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.telephone === '' && error.adresse === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                adresse: '',
                telephone: '',
                notes: '',
                error: {}
            })
        }
    }

    render() {
        const { name,
            email,
            adresse,
            telephone,
            error } = this.state;

        return (
            <form onSubmit={this.subimtHandler} className="form">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Prenom et Nom *" />
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Adresse e-mail (facultatif)" />
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={telephone} onChange={this.changeHandler} type="number" name="telephone" placeholder="Numéro de téléphone *" />
                            <p>{error.telephone ? error.telephone : ''}</p>
                        </div>
                    </div>
                  

                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={adresse} type="text" name="adresse" placeholder="Region ,Departement ,Commune ... *" />
                            <p>{error.adresse ? error.adresse : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea name="message" placeholder="Description de votre don ..."></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="theme-btn">Envoyer</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}
export default ContactForm;