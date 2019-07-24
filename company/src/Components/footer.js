import React from 'react'

const Footer = props => {
    return (
        <footer className='container-fluid text-center'>
            <a href='#myPage' title='To Top'>
                <span className='glyphicon glyphicon-chevron-up'></span>
            </a>
            <p>Site criado com React utilizando Bootstrap Theme Made By <a href='https://www.w3schools.com' title='Visit w3schools'>www.w3schools.com</a></p>
            <p>Desenvolvido por LonHenrique <a href='https://github.com/LonHenrique' title='Visit w3schools'>https://github.com/LonHenrique</a></p>
        </footer>
    )
}

export default Footer