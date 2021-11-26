import React, { Component } from 'react';
import './CardLayout.scss'
class CardLayout extends React.Component {
    render() { 
        return (
            <div class="cards-container">
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
            </div>
        );
    }
}
 
export default CardLayout;