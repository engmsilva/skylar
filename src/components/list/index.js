import React, { useContext } from 'react';
import { A } from 'hookrouter';
import shortid from 'short-id';
import { CoreContext } from '../core/context';

export default function ListTempalte() {
  const [ stateCore, dispatchCore ] = useContext(CoreContext); 
  const { profile } = stateCore;

  function deleteContact(id){
    const index = profile.findIndex(obj => obj.id === id);   
    profile.splice(index, 1)  
    dispatchCore({ type: 'updateProfile' })
  }

  function formatPhone(e) {
    const value = e.replace(/\D/g, '').match(/(\d{3})(\d{1})(\d{4})(\d{4})/); 
    return value && '(' + value[1] + ') ' + value[2] + ' ' + value[3] + '-' + value[4];	   
  }

  return (
    <>
  <section className="section">
      <div className="container">
      <div className="columns">
        
            <div className="column is-6">
            <A className="button is-medium is-info is-light" exact="true" href={`/form`} >                   
                <span className="icon">
                  <i className="fa fa-plus"></i>
                </span>         
                <span>Adicionar</span> 
            </A>
            
              </div>
      </div>                  
                <div className="table-container">
                    <table className="table is-fullwidth is-responsive is-hoverable" >
                        <thead>
                          <tr>
                            <th><abbr>#</abbr></th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>     
                            <th></th>                      
                          </tr>
                        </thead>
                      <tbody>
                    {profile.map(item => 
                        <tr key={shortid.generate()}>                          
                          <td >{item.id}</td>
                          <td >{item.name}</td>
                          <td >{item.email}</td>
                          <td >{formatPhone(item.phone)}</td>                      
                          <td >            
                          <div className="buttons">                
                              <A className="button is-small is-primary" exact="true" href={`/form/${item.id}`} >
                                <span className="icon">
                                  <i className="fa fa-edit"></i>
                                </span>         
                                <span >Editar</span>
                              </A>   
                              <button  className="button is-small is-danger" onClick={() => deleteContact(item.id)}>
                              <span className="icon">
                                  <i  className="fa fa-trash"></i>
                                </span>         
                                <span >Excluir</span>
                              </button>
                          </div>
                          </td>
                        </tr>       
                        )}               
                      </tbody>
                      </table>
                </div>
        
      </div>
  </section>  
  
    </>
  );
}
