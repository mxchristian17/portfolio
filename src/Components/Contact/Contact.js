import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopesBulk, faInbox } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    const [errors, setErrors] = useState({name : null, email : null})

    const [contact,  setContact] = useState({
        name:'',
        phone:'',
        email:'',
        status: false
    })

    const validateName = (value, err) => {
        err = ({...err, name : undefined})
        if(value.length > 100) err = ({...err, name : "The name is too long"})
        if(value.length < 7) err = ({...err, name : "Please enter a valid first and last name"})
        if (typeof value !== "undefined") {
            if (!value.match(/^[a-zA-Z ]+$/)) {
                err = ({...err, name : "The name must only contain letters and spaces"})
            }
        }
        if(value.length === 0) err = ({...err, name : "Please enter a name"})
        return err
    }
    
    const validateEmail = (value, err) => {
        err = ({...err, email : undefined})
        if(value.length > 100) err = ({...err, email : "The email is too long"})
        if(value.length < 7) err = ({...err, email : "Please enter a valid email address"})
        if (typeof value !== "undefined") {
            if (!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                err = ({...err, email : "The email must contain a valid format"})
            }
        }
        if(value.length === 0) err = ({...err, email : "Please enter an email address"})
        return err
    }

    const handleChange = (e) => {
        const field = e.target.id
        const value = e.target.value
        let err = {...errors}

        if(field === "name") err = validateName(value, err)
        if(field === "email") err = validateEmail(value, err)

        setErrors(err)
        
        setContact({...contact, [field] : value })
    }
    
    const submit = (e) => {
        e.preventDefault()
        let err = {...errors}

        err = validateName(e.target.elements.name.value, err)
        err = validateEmail(e.target.elements.email.value, err)
        
        if(!(typeof(err.name) !== "undefined" ||
        typeof(err.email) !== "undefined" ||
        typeof(err.phone) !== "undefined")) message(e)
        setErrors(err)
    }

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    const message = (e) => {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
            })
        });
        e.target.reset()
    }

  return (
    <div className="w-100 p-lg-4" id="contacto">
        <div className="container-fluid">
            <div className="row p-2 py-4 my-4">
                <div className="col">
                    <h4 style={{'fontWeight' : '600'}}>Contact me...</h4>
                </div>
            </div>
            <div className="row w-100 justify-content-md-center">
                <div className="col-md-6 col-lg-4 d-none d-md-block">
                    <FontAwesomeIcon icon={ faEnvelopesBulk } style={{ 'fontSize' : '15rem', 'color' : 'rgb(100,150,240)' }} />
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="mb-3">
                        <div className="text-start px-4">
                            <div><FontAwesomeIcon icon={ faInbox } /> <a href="mailto:orengiachristian@gmail.com" className="text-decoration-none">orengiachristian@gmail.com</a></div>
                            <div><FontAwesomeIcon icon={ faWhatsapp } className="text-success" /> <a href="https://api.whatsapp.com/send?phone=5492235377049&text=Hi%20Christian!I%20want%20to%20offer%20you%20a%20job!" rel="noreferrer" alt="Whatsapp" target="_blank" className="text-decoration-none">+54 9 223 537 7049</a></div>
                        </div>
                    </div>
                    <form className="form" onSubmit={submit}>
                        <div className="mb-3">
                            <input type="text" className={"form-control rounded-pill px-4" + (errors.name ? " is-invalid" : "")} onChange={handleChange} id="name" placeholder="Name" name="from_name" />
                            { errors.name && <div className="invalid-feedback">{ errors.name }</div> }
                        </div>
                        <div className="mb-3">
                            <input type="email" className={"form-control rounded-pill px-4" + (errors.email ? " is-invalid" : "")} onChange={handleChange} id="email" placeholder="Email..." name="from_email" />
                            { errors.email && <div className="invalid-feedback">{ errors.email }</div> }
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control rounded-3 px-4" id="message" rows="3" name="message" placeholder="Message..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact