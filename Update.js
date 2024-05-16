import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'


const Update = (data) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false)
    const [id, setId] = useState(null)


    useEffect(() =>{
        setId(localStorage.getItem('ID'));
        setFirstName(localStorage.getItem('FirstName'));
        setLastName(localStorage.getItem('LastName'));
        setCheckbox(localStorage.getItem('Checkbox'));
    },[])

    const handleSubmit = async() =>{
        try {
            axios.put(`https://6645ad47b8925626f892a67e.mockapi.io/kitCrude/${id}`,{
                firstName,lastName,checkbox
            })
            alert("updated!!");
            
        } catch (error) {
            
        }
    }

    return (
        <div>
            <Form className='create-form'>
                <FormField>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </FormField>
                <FormField>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </FormField>
                <FormField>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
                </FormField>
                <Link to='/read' >
                <Button type='submit' onClick={handleSubmit}>Submit</Button>
                </Link>
            </Form>
        </div>
    )
}

export default Update
