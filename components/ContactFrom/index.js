import React, { Component } from 'react'


class ContactForm extends Component {


    state = {
        name: '',
        email: '',
        subject: '',
        lastname: '',
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
            subject,
            lastname,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "S'il vous plaît entrez votre nom et prénom";
        }
        if (email === '') {
            error.email = "Veuillez entrer votre email";
        }
        if (subject === '') {
            error.subject = "Veuillez renseigenr votre adresse";
        }
        if (lastname === '') {
            error.lastname = "Veuillez entrer votre numero de telephone";
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
        if (error.name === '' && error.email === '' && error.email === '' && error.lastname === '' && error.subject === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                subject: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render() {
        const { name,
            email,
            subject,
            lastname,
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
                            <input value={lastname} onChange={this.changeHandler} type="text" name="lastname" placeholder="Numéro de téléphone *" />
                            <p>{error.lastname ? error.lastname : ''}</p>
                        </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-6 col-12">
                        <select className="form-control" id="donatorStatus" name="donatorStatus">
                            <option value="donatorStatus">Type de don  *:</option>

                            <option value="entreprise">Don Alimentaire</option>
                            <option value="particulier">Biens / Matriels</option>
                            <option value="particulier">Don de sang</option>

                        </select>
                    </div> */}

                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={subject} type="text" name="subject" placeholder="Region ,Departement ,Commune ... *" />
                            <p>{error.subject ? error.subject : ''}</p>
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