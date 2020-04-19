import React, { Component } from 'react';

import fournisseurs from '../../../../config/fournisseurs'

import './case-fournisseurs.scss';

export default class CaseSegment extends Component {
    render() {
        var titles = Object.keys(fournisseurs[0]);

        return(
            <div className='case-fournisseurs'>
                <span className='title'>Fournisseur</span>
                <div className='case'>
                    <div className='title-information-fournisseurs'>
                        <div className='fournisseur'>Fournisseur</div>
                        <div className='year1'>{titles[0]}</div>
                        <div className='year2'>{titles[1]}</div>
                        <div className='year3'>{titles[2]}</div>
                        <div className='total'>Grand total</div>
                    </div>
                    <div className='lign'>
                        <div className='sous-segment'>{fournisseurs[0].fournisseur}</div>
                        <div className='year1'>{fournisseurs[0][titles[0]]}</div>
                        <div className='year2'>{fournisseurs[0][titles[1]]}</div>
                        <div className='year3'>{fournisseurs[0][titles[2]]}</div>
                        <div className='total'>{fournisseurs[0][titles[4]]}</div>
                    </div>
                    <div className='separation' />
                    <div className='lign'>
                        <div className='sous-segment'>{fournisseurs[1].fournisseur}</div>
                        <div className='year1'>{fournisseurs[1][titles[0]]}</div>
                        <div className='year2'>{fournisseurs[1][titles[1]]}</div>
                        <div className='year3'>{fournisseurs[1][titles[2]]}</div>
                        <div className='total'>{fournisseurs[1][titles[4]]}</div>
                    </div>
                    <div className='separation' />
                    <div className='lign'>
                        <div className='sous-segment'>{fournisseurs[2].fournisseur}</div>
                        <div className='year1'>{fournisseurs[2][titles[0]]}</div>
                        <div className='year2'>{fournisseurs[2][titles[1]]}</div>
                        <div className='year3'>{fournisseurs[2][titles[2]]}</div>
                        <div className='total'>{fournisseurs[2][titles[4]]}</div>
                    </div>
                    <div className='separation' />
                    <div className='lign'>
                        <div className='sous-segment'>{fournisseurs[3].fournisseur}</div>
                        <div className='year1'>{fournisseurs[3][titles[0]]}</div>
                        <div className='year2'>{fournisseurs[3][titles[1]]}</div>
                        <div className='year3'>{fournisseurs[3][titles[2]]}</div>
                        <div className='total'>{fournisseurs[3][titles[4]]}</div>
                    </div>
                    <div className='separation' />
                    <div className='lign'>
                        <div className='sous-segment'>{fournisseurs[4].fournisseur}</div>
                        <div className='year1'>{fournisseurs[4][titles[0]]}</div>
                        <div className='year2'>{fournisseurs[4][titles[1]]}</div>
                        <div className='year3'>{fournisseurs[4][titles[2]]}</div>
                        <div className='total'>{fournisseurs[4][titles[4]]}</div>
                    </div>
                    <div className='separation' />
                    <div className='lign'>
                        <div className='sous-segment'>{fournisseurs[5].fournisseur}</div>
                        <div className='year1'>{fournisseurs[5][titles[0]]}</div>
                        <div className='year2'>{fournisseurs[5][titles[1]]}</div>
                        <div className='year3'>{fournisseurs[5][titles[2]]}</div>
                        <div className='total'>{fournisseurs[5][titles[4]]}</div>
                    </div>
                </div>
            </div>
        )
    }
}
