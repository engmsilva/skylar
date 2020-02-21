import React from 'react';
import Agenda from '../../agenda.png';
export default function HeaderTempalte() {
  return (
    <>
  <section className="hero ">
    <div className="hero-body">
      <div className="container">   
        <section className="section">
          <div className="columns">
            <div className="column is-6">
              <div className="content is-medium">              
                <h1 className="title">Agenda</h1>
                <p>Agenda Simples usando React JS Hooks e Bulma CSS.</p>
				<p>Acesse o menu Contato para começar.</p>
              </div>
            </div>
			<div className="column is-6">
			<figure className="image is-16by9">
              <img src={Agenda} alt=""/>
            </figure>
            </div>			
          </div>		  
        </section>   
      </div>
    </div>
  </section>
    </>
  );
}

