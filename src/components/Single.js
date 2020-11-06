import React from 'react';

const Single  = (props) => {
    return ( 
            <li className="col s12 l6">
                <div className="card">
                    <div className="card-image">
                        <img src="./portrait.jpg" alt={props.items.title}/>
                        <span className="card-title">{props.items.prenom} {props.items.nom} - {props.items.compagnie} </span>
                    </div>
                    <div className="card-content">
                        <span className="card-title" >{props.items.email}</span>
                        <div className="row">
                            <div className="col 16 center">
                                <blockquote><h5>{props.items.notes}</h5></blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
     );
}
 
export default Single;