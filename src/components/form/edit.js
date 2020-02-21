import React, { useContext, useState } from 'react';
import { CoreContext } from '../core/context';
import { navigate  } from 'hookrouter';

export default function FormTempalte(props) {
	const [ stateCore ] = useContext(CoreContext); 
	const { profile } = stateCore;
	const { id } = props;
	const index = profile.findIndex(obj => obj.id === parseInt(id));
	const [state, setState] = useState(profile[index]);	

 function handleChange(event){	
	let nam = event.target.name;
	let val = event.target.value;	
	setState({...state, [nam]: val})
 }

function handleSubmit(event) {	
	console.log(profile)
		Object.assign(profile[index], state);
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
						<h1 className="title is-1">Editar Contato</h1>
						<div className="field">
							<label className="label">Nome</label>
							<div className="control">
								<input className="input is-medium" name="name" value={state.name} type="text" onChange={handleChange}/>
							</div>
						</div>
						<div className="field">
							<label className="label">Email</label>
							<div className="control">
								<input className="input is-medium" name="email" value={state.email} type="text" onChange={handleChange}/>
							</div>
						</div>
						<div className="field">
							<label className="label">Telefone</label>
							<div className="control">
								<input className="input is-medium" name="phone" value={state.phone} type="text" onChange={handleChange}/>
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

