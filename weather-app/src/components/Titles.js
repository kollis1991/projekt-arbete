
// Renderar ut mina titles


import React from 'react';

class Titles extends React.Component {
    render(){
        return(
            <div>
            <h1 className = "title-container__title">Väder kikaren</h1>
            <h3 className = "title-container__subtitle">Ta reda på temperatur, väder och mer...</h3>
            <p className = "title-container__paragraph">Sriv in stad och land nedan:</p>
            </div>

        );

    }
};

export default Titles;