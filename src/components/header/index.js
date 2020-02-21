import React, { useContext } from 'react';
import logo from '../../skylar.png';
import { A, usePath } from 'hookrouter';
import { CoreContext } from '../core/context';

function CustomA(props) {
	const path = usePath();
	let { href, getProps, ...anchorProps } = props;
	const isCurrent = path === href;
	return <A href={href} {...getProps({ isCurrent })} {...anchorProps} />;
  }
  
  const NavLink = props => (
	<CustomA
	  {...props}
	  getProps={({ isCurrent }) => ({	
		className: isCurrent ? "navbar-item is-active" : "navbar-item"
	  })}
	/>
  );

export default function HeaderTempalte() {
	const [ stateCore, dispatchCore ] = useContext(CoreContext); 
	const { burger } = stateCore.menuButton
	const activeBurger = burger ? "is-active" : '';	
	const href = "#"	
  return (
    <>
	<nav className="navbar is-info" role="navigation" aria-label="main navigation">
 	 <div className="navbar-brand">
		<a className="navbar-item" href="/">
		<img alt="" src={logo} width="112" height="28"/>
		</a>
		<a 
			role="button" 
			className="navbar-burger burger" 
			aria-label="menu" aria-expanded="false" 
			data-target="navbarBasicExample" 
			onClick={() => dispatchCore({ type: 'activeBurger' })}
			href={href}
			>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</a>
 	 </div>
	<div id="navbarBasicExample" className={`navbar-menu ${activeBurger}`}>
		<div className="navbar-start">   
			<NavLink  exact="true" href="/"  onClick={() => dispatchCore({ type: 'menuHome' })}>
				Home
			</NavLink>
			<NavLink exact="true" href="/list" onClick={() => dispatchCore({ type: 'menuContact' })} >
				Contatos
			</NavLink>     
		</div>   
	</div>
	</nav>
    </>
  );
}

