import React, { Component } from 'react';

import segments from '../../../../config/sous-segments';

import './case-segments.scss'

export default class CaseSegment extends Component {
    render() {
        var titles = Object.keys(segments[0]);

        return(
            <div className='case-segments'>
                <span className='title'>Sous-Segments</span>
                <div className='case'>
                    <div className='title-information-segments'>
                        <div className='sous-segment'>Sous segment</div>
                        <div className='year1'>{titles[0]}</div>
                        <div className='year2'>{titles[1]}</div>
                        <div className='year3'>{titles[2]}</div>
                        <div className='total'>Grand Total</div>
                    </div>
                    <div className='lign'>
                        <div className='sous-segment'>{segments[0].sous_segment}</div>
                        <div className='year1'>{segments[0][titles[0]]}</div>
                        <div className='year2'>{segments[0][titles[1]]}</div>
                        <div className='year3'>{segments[0][titles[2]]}</div>
                        <div className='total'>{segments[0][titles[4]]}</div>
                    </div>
                    <div className='separation' />
                    <div className='lign'>
                        <div className='sous-segment'>{segments[1].sous_segment}</div>
                        <div className='year1'>{segments[1][titles[0]]}</div>
                        <div className='year2'>{segments[1][titles[1]]}</div>
                        <div className='year3'>{segments[1][titles[2]]}</div>
                        <div className='total'>{segments[1][titles[4]]}</div>
                    </div>
                    <div className='separation' />
                    <div className='lign'>
                        <div className='sous-segment'>{segments[2].sous_segment}</div>
                        <div className='year1'>{segments[2][titles[0]]}</div>
                        <div className='year2'>{segments[2][titles[1]]}</div>
                        <div className='year3'>{segments[2][titles[2]]}</div>
                        <div className='total'>{segments[2][titles[4]]}</div>
                    </div>
                    <div className='separation' />
                    <div className='lign'>
                        <div className='sous-segment'>{segments[3].sous_segment}</div>
                        <div className='year1'>{segments[3][titles[0]]}</div>
                        <div className='year2'>{segments[3][titles[1]]}</div>
                        <div className='year3'>{segments[3][titles[2]]}</div>
                        <div className='total'>{segments[3][titles[4]]}</div>
                    </div>
                    <div className='separation' />
                    <div className='lign'>
                        <div className='sous-segment'>{segments[4].sous_segment}</div>
                        <div className='year1'>{segments[4][titles[0]]}</div>
                        <div className='year2'>{segments[4][titles[1]]}</div>
                        <div className='year3'>{segments[4][titles[2]]}</div>
                        <div className='total'>{segments[4][titles[4]]}</div>
                    </div>
                    <div className='separation' />
                    <div className='lign'>
                        <div className='sous-segment'>{segments[5].sous_segment}</div>
                        <div className='year1'>{segments[5][titles[0]]}</div>
                        <div className='year2'>{segments[5][titles[1]]}</div>
                        <div className='year3'>{segments[5][titles[2]]}</div>
                        <div className='total'>{segments[5][titles[4]]}</div>
                    </div>
                </div>
            </div>
        )
    }
}