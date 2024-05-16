import React,{useState} from 'react'
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import Main from './Main';
import { Link } from 'react-router-dom';

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false)

    const postData = async () => {
        try {
            const res = await axios.post('https://6645ad47b8925626f892a67e.mockapi.io/kitCrude', {
                firstName,
                lastName,
                checkbox
            });
            alert("Data Saved");
        } catch (error) {
            console.error('Error saving data:', error);
            
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        postData(); 
    };


    return (
        <>
        
        <div  >
            <Form className='create-form'>
                <FormField>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={ (e) => setFirstName(e.target.value)} />
                </FormField>
                <FormField>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e)=> setLastName(e.target.value)} />
                </FormField>
                <FormField>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
                </FormField>
                <Button type='submit' onClick={handleSubmit}>Submit</Button>
                <Link to={'/read'}>
                <Button  >View</Button>
                </Link>
            </Form>
        </div>
        </>
    )
}

export default Create
