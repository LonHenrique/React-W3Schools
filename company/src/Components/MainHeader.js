import React from 'react'
import { Link } from 'react-router-dom'

const MainHeader = props => {
    return (
        <div>            
            <nav classNameName='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>                        
                    </button>
                    <Link className='navbar-brand' to='/'>Logo</Link>
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                    <ul className='nav navbar-nav navbar-right'>
                        <li><Link to='/'> SOBRE</Link></li>
                        <li><Link to='/Services'>SERVIÇOS</Link></li>
                        <li><Link to='/Portfolio'>PORTFOLIO</Link></li>
                        <li><Link to='/Precos'>PREÇOS</Link></li>
                        <li><Link to='/Contato'>CONTATO</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>
            <div className='jumbotron text-center'>
                <h1>Empresa</h1> 
                <p>Especializado em Desenvolvimento Mobile</p> 
                <form>
                    <div className='input-group'>
                    <input type='email' className='form-control' size='50' placeholder='Email Address' required />
                    <div className='input-group-btn'>
                        <button type='button' className='btn btn-danger'>Subscribe</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MainHeader