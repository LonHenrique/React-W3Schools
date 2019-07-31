import React from 'react';
import Paris from '../Images/paris.jpg';
import NewYork from '../Images/newyork.jpg';
import SanFranciso from '../Images/sanfran.jpg';

const Portfolio = props => {
    return (
        <div>
            <div id='portfolio' className='container-fluid text-center bg-grey'>
            <h2>Portfolio</h2><br />
            <h4>O que nós criamos!</h4>
                <div className='row text-center '>
                    <div className='col-sm-4'>
                    <div className='thumbnail'>
                        <img src={ Paris } alt='Paris' width='400' height='300' />
                        <p><strong>Paris</strong></p>
                        <p>Yes, we built Paris</p>
                    </div>
                    </div>
                    <div className='col-sm-4'>
                    <div className='thumbnail'>
                        <img src={ NewYork} alt='New York' width='400' height='300' />
                        <p><strong>New York</strong></p>
                        <p>We built New York</p>
                    </div>
                    </div>
                    <div className='col-sm-4'>
                    <div className='thumbnail'>
                        <img src={ SanFranciso} alt='San Francisco' width='400' height='300' />
                        <p><strong>San Francisco</strong></p>
                        <p>Yes, San Fran is ours</p>
                    </div>
                    </div>
                </div><br />
                
                <h2>O que nossos cliente estão dizendo...</h2>
                <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>
                    {/* Indicators */}
                    <ol className='carousel-indicators'>
                    <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
                    <li data-target='#myCarousel' data-slide-to='1'></li>
                    <li data-target='#myCarousel' data-slide-to='2'></li>
                    </ol>

                    {/* Wrapper for slides */}
                    <div className='carousel-inner' role='listbox'>
                    <div className='item active'>
                        <h4>'Está é uma excelente empresa, estou muito satisfeito com o Resultado'<br /><span>Michael Roe, Vice President, Comment Box</span></h4>
                    </div>
                    <div className='item'>
                        <h4>'One word... WOW!!'<br /><span>John Doe, Salesman, Rep Inc</span></h4>
                    </div>
                    <div className='item'>
                        <h4>'Could I... BE any more happy with this company?'<br /><span>Chandler Bing, Actor, FriendsAlot</span></h4>
                    </div>
                    </div>

                    {/* Left and right controls */}
                    <a className='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
                    <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                    <span className='sr-only'>Previous</span>
                    </a>
                    <a className='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
                    <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                    <span className='sr-only'>Next</span>
                    </a>
                </div>
            </div>
        </div>    
    )
}

export default Portfolio