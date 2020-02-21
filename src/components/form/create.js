import React, { useContext, useState } from 'react';
import { CoreContext } from '../core/context';
import { navigate  } from 'hookrouter';

export default function FormTempalte(props) {
	const [ stateCore ] = useContext(CoreContext); 
	const { profile } = stateCore;
	const initialValue ={
                            id: profile.length+1,
                            name: '',
                            email: '',
                            phone: ''      
                        }	
	const [state, setState] = useState(initialValue);	

 function handleChange(event){	
	let nam = event.target.name;
	let val = event.target.value;	
	setState({...state, [nam]: val})
 }

function handleSubmit(event) {	
		profile.push(state);
		event.preventDefault();
		navigate('/list')
	  }	
	
  return (
    <>
<section className="is-fullheight">
		<div className="hero-body">
			<div className="container">					
					<form onSubmit={handleSubmit}>
					<div class="columns">
					<div className="column is-6">					
						<h1 className="title is-1">Novo Contato</h1>
						<div className="field">
							<label className="label">Nome</label>
							<div className="control">
								<input className="input is-medium" name="name" type="text" onChange={handleChange}/>
							</div>
						</div>
						<div className="field">
							<label className="label">Email</label>
							<div className="control">
								<input className="input is-medium" name="email" type="text" onChange={handleChange}/>
							</div>
						</div>
						<div className="field">
							<label className="label">Telefone</label>
							<div className="control">
								<input className="input is-medium" name="phone" type="text" onChange={handleChange}/>
							</div>
						</div>	
					</div>
					</div>
					<div class="columns">
				
						<div className="column is-2 is-offset-2">	
						<button className="button is-ligth is-medium is-fullwidth" onClick={() => navigate('/list')}>
                        <span class="icon">
							<i class="fa fa-ban"></i>
						</span>         
						<span>Cancelar</span>
                        </button>
						</div>
						<div className="column is-2">	
						<button type="submit" className="button is-primary is-medium is-fullwidth">
                        <span class="icon">
							<i class="fa fa-cloud"></i>
						</span>         
						<span>Salvar</span>
                        </button>
						</div>			
						</div>
					
					</form>
				</div>
			</div>
		
	</section>
    </>
  );
}

