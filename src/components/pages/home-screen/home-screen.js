import React, { Component } from 'react';

//import { ReactComponent as Suggestion } from '../../../images/suggestion.svg';
//import { ReactComponent as Search } from '../../../images/search.svg';

import CaseProducts from './case-products/case-products.js';
import CaseSegments from './case-segments/case-segments.js';
import CaseFournisseurs from './case-fournisseurs/case-fournisseurs.js';

import { withAuthorization } from '../../session';
import { withRouter } from 'react-router-dom';
import { WithFirebase } from '../../Firebase';
import { compose } from 'recompose';

//import SignOutButton from './signout-button/signout-button.js'

import './home-screen.scss';

class HomeScreenCompo extends Component {
    
    state = { datas: '' }

    render() {

        //console.log('compo : ' + this.props);

        return (
            <div className='home-screen'>
                {/*<div className='footer'>
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
                </div>*/}
                <CaseProducts {...this.props} products_on={this.props.products_on} updateDatas={this.props.updateDatas} />
                <div className='case-row'>
                    <CaseSegments {...this.props} />
                    <CaseFournisseurs {...this.props} />
                </div>
            </div>
        );
    }
}

const HomeScreen = compose(
    withRouter,
    WithFirebase
) (HomeScreenCompo)

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomeScreen);