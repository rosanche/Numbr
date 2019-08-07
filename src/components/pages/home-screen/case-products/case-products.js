import React, { Component } from 'react';

import './case-products.scss';

export default class CaseProducts extends Component {
    render() {
        return (
            <div className='case-products'>
                <span className='title'>Produits et Ventes</span>
                <table className='case'>
                    <tr className='title-information-products'>
                        <th className='date'>Date</th>
                        <th className='sous-segment'>Sous-segment</th>
                        <th className='sale-title'>Titre de la vente</th>
                        <th className='id-product'>ID <br/> Produit</th>
                        <th className='name-product'>Nom produit</th>
                        <th className='reference'>Réf.</th>
                        <th className='fournisseur'>Fournisseur</th>
                        <th className='amount-products'>Nb<br/> Produits</th>
                        <th className='income-ht'>Revenue<br/> HT</th>
                        <th className='cost-ht'>Coût<br/> HT</th>
                        <th className='margin'>Marge<br/> en €</th>
                        <th className='price-buy'>Prix<br/> achat u.</th>
                    </tr>
                </table>
            </div>
        )
    }
}