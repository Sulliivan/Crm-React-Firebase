import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row">
                <form className="col s12" id="addContact">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="prenom" type="text" className="validate"/>
                            <label htmlFor="prenom">Prénom</label>
                        </div>  
                        <div className="input-field col s6">
                            <input id="nom" type="text" className="validate"/>
                            <label htmlFor="nom">Nom de famille</label>
                        </div>  
                    </div>
                </form>
            </div>
            
            );
    }
} 
 
export default Form;