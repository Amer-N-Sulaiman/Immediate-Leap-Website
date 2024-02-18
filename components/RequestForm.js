import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import { useState } from 'react';

import cookie from 'js-cookie';

import { Row, Col } from 'react-bootstrap';



export default function RequestForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [agencyUrl, setAgencyUrl] = useState('');
    const [service, setService] = useState('');

    const [apiData, setApiData] = useState('')

    const [formMessage, setFormMessage] = useState('')
    const [isSubmittingRequest, setIsSubmittingRequest] = useState(false)


        
    const handleSubmit = async (e)=>{
        e.preventDefault();

        // Change the userId to the value you get front the cookies
        const requestData = {
            name,
            email,
            agencyUrl,
            service,
            userId: cookie.get('userId')
        }

        

        try {
            setIsSubmittingRequest(true)
            const response = await fetch('/api/contacts', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ data: requestData }),
            });
    
            const data = await response.json();
            const userId = data.userId
            cookie.set('userId', userId)
            setFormMessage("Thank you for submitting your request! We will email you soon.")
            setName('')
            setEmail('')
            setAgencyUrl('')
            setService('')
            setIsSubmittingRequest(false)
        } catch (error) {
            console.error('Error fetching data:', error.message);
            setFormMessage("There was a problem submitting your request, please try again.")
            setIsSubmittingRequest(false)
        }
    }


        
    return (
        <>
            <div style={{
                backgroundColor: '#051A21',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            }}>
                <Form data-bs-theme="dark" onSubmit={handleSubmit}>

                    <Form.Group className="mb-3 text-light" controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="Text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3 text-light" controlId="Email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                        <Form.Text className="text-muted">
                            We&apos;ll use this e-mail to contact you
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 text-light" controlId="URL">
                        <Form.Label>Agency Website URL</Form.Label>
                        <Form.Control type="Text" placeholder="URL" value={agencyUrl} onChange={(e)=>setAgencyUrl(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3 text-light" controlId="Service">
                        <Form.Label>Select A Service That Interests You</Form.Label>
                        <Form.Select aria-label="Default select example" value={service} onChange={(e)=>setService(e.target.value)} required>
                            <option value=''>Select a service you&apos;re interested in</option>
                            <option value="Social Proof">Social Proof</option>
                            <option value="Website Development">Website Development and Hosting</option>
                            <option value="Marketing">White Label Marketing</option>
                        </Form.Select>
                    </Form.Group>
                    
                    <div style={{width:"100%"}}>
                        
                        {!isSubmittingRequest && <Button variant="primary" type="submit" style={{marginTop: '10px'}}>
                            Submit
                        </Button>}
                        {isSubmittingRequest && <Button variant="primary" type="submit" style={{marginTop: '10px'}}>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                style={{marginRight: "5px"}}
                            />
                            Submitting
                        </Button>}
                    </div>
                    
                    
                    <Form.Text className="text-muted mt-5">
                        {formMessage}
                    </Form.Text>
                </Form>
            </div>
        </>
    )
}
