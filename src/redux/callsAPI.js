import { publicRequest } from "./requestMethods";
import React from 'react';
import axios from 'axios';


const api = publicRequest;
/*
export const callapi = async () => {
    
    
    try {
        console.log("1")
        const res = await api.get('/').then(res => {
            console.log(res.data);
        

        });
        console.log("2")

        

    } catch (error) {
        return 'failure'
    }


}
*/



export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(publicRequest)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (

            this.state.persons
                .map(person =>
                    <li key={person.id}>{person.name}</li>
                )

        )
    }
}