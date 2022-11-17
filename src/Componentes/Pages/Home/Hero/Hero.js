import React from 'react';
import pyB from '../../../../Assets/py-b.png'
import heroBanar from '../../../../Assets/Banners Illustrations.png'


const Hero = () => {
    return (
        <div className="hero min-h-[660px] py-20">
            <div className="hero-content flex-col flex justify-between lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-1/2 ">
                    <img src={heroBanar} className='' alt="" />
                </div>
                <div className="text-center text-white lg:text-left w-1/2">
                    <h2 className='text-[70px] font-bold py-5'>Prysm</h2>
                    <h2 className='text-[48px] font-bold'>Run NODE</h2>
                    <h2 className='text-[48px] font-bold'>and use <span className='text-[#75A8FF]'> ETH SUSTAINABLY</span></h2>
                    <p className='text-[25px] py-5'>Use Prysm to easily and sustainably run nodes on the Ethereum blockchain</p>
                    <div className="herobuttons flex">
                        <button className="btn  btn-warning"><img src={pyB} className='px-5' alt="" /> Install Prysm</button>
                        <button className='mx-10 btn text-warning'>Read Our Docs →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;