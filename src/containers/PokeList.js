import React, { Component } from 'react';
import List from '../components/List/List';
import axios from 'axios';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
        const { classes } = this.props;
        const { pokeData } = this.state; 
        return (
            <> 
                <AppBar className={classes.NavColor} position="static">
                    <Toolbar>
                        <Typography variant="h6" component="p" >PokeApp</Typography>
                    </Toolbar>
                </AppBar>
                <List pokeData={pokeData} />
            </>
         );
    }
}
 
export default withStyles({
    NavColor: {
        backgroundColor: '#db0921'
    }
})(PokeList);