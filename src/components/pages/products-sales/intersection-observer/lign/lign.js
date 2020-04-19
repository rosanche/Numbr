import React, { Component } from 'react';

import './lign.scss';

export default class Lign extends Component {
    
    render() {
        const { product } = this.props;

        return(
            <div className='lign-sep'>
                <div className='lign'>
                    <div className='date'>{product.Mois}/{product.Annee}</div>
                    <div className='sous-segment'>{product.sous_segment}</div>
                    <div className='sale-title'>{product.sale_title}</div>
                    <div className='id-product'>{product.id_product}</div>
                    <div className='name-product'>{product.product_name}</div>
                    <div className='reference'>{product.reference}</div>
                    <div className='fournisseur'>{product.fournisseur}</div>
                    <div className='amount-products'>{product.NbProduits}</div>
                    <div className='income-ht'>{product.RevenuHT}</div>
                    <div className='cost-ht'>{product.CoutsHT}</div>
                    <div className='margin'>{product['Marge €']}</div>
                    <div className='price-buy'>{product['Prix achat unitaire']}</div>
                </div>
                <div className='separation' />
            </div>
        )
    }
}