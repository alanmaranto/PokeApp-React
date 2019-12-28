import React, { Component } from 'react';
import List from '../components/List/List';
import axios from 'axios';

class PokeList extends Component {

    state = {
        pokeData:[]
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                const pokeResults = res.data.results;

                this.setState({ pokeData: pokeResults })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { pokeData } = this.state; 
        return ( 
            <List pokeData={pokeData} />
         );
    }
}
 
export default PokeList;