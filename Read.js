import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'


const Read = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const res = await axios.get('https://6645ad47b8925626f892a67e.mockapi.io/kitCrude');
            console.log({ res });
            setData(res.data);
            

        } catch (error) {
            console.log(error)
        }
    }
    const sendData = (data) => {
        let {id,firstName,lastName,checkbox} = data;
        localStorage.setItem('ID',id);
        localStorage.setItem('FirstName',firstName);
        localStorage.setItem('LastName',lastName);
        localStorage.setItem('Checkbox',checkbox);
    }

    const onDelete = (id) => {
        axios.delete(`https://6645ad47b8925626f892a67e.mockapi.io/kitCrude/${id}`)
        .then(()=>{
            fetchData();
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <Link to={'/create'}>
            <Button>Add</Button>
            </Link>

            <Table size='large'>
                <Table.Header >
                    <Table.Row >
                        <Table.HeaderCell >FirstName</Table.HeaderCell>
                        <Table.HeaderCell>LastName</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                        

                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {data.map(
                        (item, index) => (<Table.Row key={index}>
                            <Table.Cell>{item.firstName}</Table.Cell>
                            <Table.Cell>{item.lastName}</Table.Cell>
                            <Table.Cell>{item.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                           <Link to='/update'>
                            <Table.Cell>
                                <Button onClick={()=> sendData(item)}>Update</Button>
                            </Table.Cell>
                           </Link>
                           <Table.Cell>
                                <Button onClick={()=> onDelete(item.id)}>Delete</Button>
                            </Table.Cell>
                        </Table.Row>
                        ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default Read
