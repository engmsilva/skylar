import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CoreContext } from '../core/context';
import { navigate  } from 'hookrouter';

export default function FormTempalte(props) {
	const { id } = props;
	const [ stateCore ] = useContext(CoreContext); 
	const { register, handleSubmit, errors } = useForm();
	const { profile } = stateCore;
	const index = profile.findIndex(obj => obj.id === parseInt(id));
	const defaultProfile ={
                            id: profile.length+1,
                            name: '',
                            email: '',
                            phone: ''      
						}
	const initialValue = id ? profile[index] : defaultProfile; 	
	const title = id ? 'Editar Contato' : 'Novo Contato';
	const [state, setState] = useState(initialValue);	

    // eslint-disable-next-line no-useless-escape
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function handleFormatPhone(e) {
	const value = e.target.value.replace(/\D/g, '').match(/(\d{3})(\d{1})(\d{4})(\d{4})/);
	if(value){	
		e.target.value = '(' + value[1] + ') ' + value[2] + ' ' + value[3] + '-' + value[4];	
	 }
}

function formatPhone(e) {
    const value = e.replace(/\D/g, '').match(/(\d{3})(\d{1})(\d{4})(\d{4})/); 
    return value && '(' + value[1] + ') ' + value[2] + ' ' + value[3] + '-' + value[4];	   
  }

 function handleChange(event){	
	let nam = event.target.name;
	let val = event.target.value;	
	setState({...state, [nam]: val})
 }

function onSubmit() {
		if(id){
			Object.assign(profile[index], state);
		} else {
			profile.push(state);
		}			
		navigate('/list')
}	
	
  return (
    <>
<section className="is-fullheight">
		<div className="hero-body">
			<div className="container">					
					<form onSubmit={handleSubmit(onSubmit)}>
					<div className="columns">
					<div className="column is-6">					
						<h1 className="title is-1">{title}</h1>
						<div className="field">
							<label className="label">Nome</label>
							<div className="control has-icons-left">
								<input 
									className={`input is-medium ${errors.name && 'is-danger'}`}
									defaultValue={state.name}
									name="name" 
									type="text" 
									onChange={handleChange} 
									ref={register({ required: true })}
								/>
								<span className="icon is-small is-left">
								<i className="fa fa-user"></i>
								</span>
							</div>
							  { errors.name &&
							   <p class="help is-danger">Este campo é obrigatório</p> 
							}
						</div>
						<div className="field">
							<label className="label">Email</label>
							<div className="control has-icons-left">
								<input 
									className={`input is-medium ${errors.email && 'is-danger'}`} 
									defaultValue={state.email}
									name="email" 
									type="text" 
									onChange={handleChange}
									ref={register({ 
										required: true,
										pattern: emailPattern
									 })}
								/>
								<span className="icon is-small is-left">
								<i className="fa fa-envelope"></i>
								</span>
							</div>
							{ errors.email &&
							   <p class="help is-danger">É necessário entrar com um endereço de e-mail válido.</p> 
							}
						</div>
						<div className="field">
							<label className="label">Telefone</label>
							<div className="control has-icons-left">
								<input 
									className={`input is-medium ${errors.phone && 'is-danger'}`} 
									defaultValue={formatPhone(state.phone)}
									name="phone"
									type="tel" 
									onKeyUp={handleFormatPhone} 
									onChange={handleChange}
									ref={register({ 
										required: true,
										maxLength: 17, 
										minLength: 8
									 })}
								/>
								<span className="icon is-small is-left">
								<i className="fa fa-phone"></i>
								</span>
							</div>
							{ errors.phone &&
							   <p class="help is-danger">Este campo é obrigatório</p> 
							}
						</div>				
					<div className="field is-grouped is-grouped-right">
						<p className="control">
							<button className="button is-ligth is-medium is-fullwidth" onClick={() => navigate('/list')}>
							<span className="icon">
								<i className="fa fa-ban"></i>
							</span>         
							<span>Cancelar</span>
							</button>
						</p>
						<p className="control">
							<button type="submit" className="button is-primary is-medium is-fullwidth">
							<span className="icon">
								<i className="fa fa-cloud"></i>
							</span>         
							<span>Salvar</span>
							</button>
						</p>
					</div>		
					</div>
					</div>			
					</form>
				</div>
			</div>
		
	</section>
    </>
  );
}

