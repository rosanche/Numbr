import React, { Component } from 'react';
import { ReactComponent as Suggestion } from '../../../images/suggestion.svg';
import { ReactComponent as Search } from '../../../images/search.svg';
import CaseProducts from './case-products/case-products.js';
import { withAuthorization } from '../../session';

import SignOutButton from './signout-button/signout-button.js'

import './home-screen.scss';

class HomeScreen extends Component {
    
    state = { datas: '' }

    /*componentDidMount = () => {
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        const url = 'http://interditap.sharepoint.com/_vti_bin/ExcelRest.aspx/Marketing';

        fetch(proxyurl + url) 
        .then((resp)=> { return resp.json() })
        .then((datas)=> { 
            this.setState({datas: datas});
            console.log(datas);
        })
    } */
    
    render() {
        return (
            <div className='home-screen'>
                <div className='footer'>
                    <div className='search-bar'>
                        <Search className='icon' />
                        <input 
                            type='text' 
                            //value={this.state.username} 
                            placeholder='Rechercher une vente, un produit…' 
                            //onChange={this.handleChangeUsername}
                        />
                    </div>
                    <div className='suggestion'>
                        <span className='name'>Suggestions</span>
                        <Suggestion className='icon' />
                    </div>
                    <SignOutButton />
                </div>
                <CaseProducts />
                <div className='circle' />
            </div>
        );
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomeScreen);