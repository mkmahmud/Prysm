import React from 'react';
import './Content.css';

import frame46 from '../../../../Assets/icon/Frame 346.png';
import frame48 from '../../../../Assets/icon/Frame 348.png';
import frame36 from '../../../../Assets/icon/Frame 336.png';
import frame42 from '../../../../Assets/icon/Frame 342.png';
import outlined from '../../../../Assets/icon/Outlined.png';
import arrowimg from '../../../../Assets/icon/General Icons.png';
import frame40 from '../../../../Assets/icon/Frame 240.png';
import frame from '../../../../Assets/icon/Frame.png';
import maskGroup from '../../../../Assets/icon/Illustrations.png';


const Content = () => {
    return (
        <div className='content text-white my-20'>
            <h2 className='text-[48px] font-bold'>Free . <span className='bg-[#E35484]'>Open-Source</span> . Globally <br /> Accessible</h2>
            <h3 className='text-[40px]'>Prysm empowers developers to build a fairer <br /> financial world</h3>
            <div className="content-body relative flex justify-center">
                <img className='left-image' src={frame40} alt="" />
                <div className="left flex justify-center items-center mt-[225px]">
                    <p className='bg-[#249775] text-[14px] py-2 px-10 mx-3 '>Node</p>
                    <img src={frame46} alt="" />
                </div>
                <div className="middle">
                    <div className="singel-card h-[137px] w-[310px] text-left p-4 rounded-xl my-2">
                        <img src={frame36} alt="" />
                        <h2 className='text-[26px]'>Validator</h2>
                        <p className='text-[16px]'>Prysm, Teku, Lighthouse, Nimbus</p>
                    </div>
                    <img src={arrowimg} className='mx-auto' alt="" />
                    <div className="singel-card h-[137px] w-[310px] text-left p-4 rounded-xl my-2">
                        <img src={outlined} alt="" />
                        <h2 className='text-[26px]'>Beacon Node</h2>
                        <p className='text-[16px]'>Prysm, Teku, Lighthouse, Nimbus</p>
                    </div>
                    <p className='text-left text-[16px]'>Consensus layer</p>
                    <img src={arrowimg} className='mx-auto' alt="" />
                    <p className='text-left text-[16px]'>execution layer</p>
                    <div className="singel-card h-[137px] w-[310px] text-left p-4 rounded-xl my-2">
                        <img src={frame42} alt="" />
                        <h2 className='text-[26px]'>Execution Node</h2>
                        <p className='text-[16px]'>Nethermind, Besu, Geth, Erigon</p>
                    </div>
                </div>
                <div className="right flex justify-center items-center">
                    <img src={frame48} alt="" />
                    <p className='bg-[#249775] text-[14px] py-2 px-10 mx-3'>node + validator</p>
                </div>
            </div>
            <div className="flex w-full p-20 ">
                <div className="grid flex-grow px-20">
                    <img src={frame} className='mx-auto border rounded-full border-2 p-2' alt="" />
                    <p className='text-[25px] px-10'>Join other futuristic Ethereum validators using Prysm to secure value and reduce emissions by 99.9% </p>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="grid  flex-grow px-30">
                    <img src={maskGroup} className='mx-auto' alt="" />
                    <p className='text-[25px] px-10'>Leverage Prysm's incredible user experience to run nodes on the Ethereum network from anywhere in the world</p>
                </div>
            </div>
        </div>
    );
};

export default Content;