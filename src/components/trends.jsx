import React from 'react';
import Row from './row';

const Trends = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='text-7xl text-blue-300 p-10'>TRENDS TODAY in PAKISTAN</div>
            <div className='w-11/12 rounded-3xl flex flex-col items-center h-auto gap-2 pb-10 overflow-auto'>
                <div className='thead w-full h-14 bg-slate-800 rounded-t-3xl flex justify-center sticky top-0'>
                    <ul className='w-full h-full bg-inherit flex justify-between text-white items-center rounded-t-3xl list-none text-2xl'>


                        <li className='w-1/4 text-center'>SR NO</li>
                        <li className='w-1/4 text-center'>FIELD</li>
                        <li className='w-1/4 text-center'>JOBS POSTED TODAY</li>
                        <li className='w-1/4 text-center'>AVERAGE SALARY</li>
                        <li className='w-1/4 text-center'>CHARTS</li>
                    </ul>
                </div>
                <div className='flex flex-col w-full gap-2'>

                    <Row srno={"1"} feild="PROGRAMMER" no_ofjobs="1510"  />
                    <Row srno={"2"} feild="SOFTWARE ENGINEER" no_ofjobs="1508"  />
                    <Row srno={"3"} feild="DATA SCIENTIST" no_ofjobs="595" />
                    <Row srno={"4"} feild="AI DEVELOPER" no_ofjobs="173"/>
                    <Row srno={"5"} feild="WORDPRESS DEVELOPER" no_ofjobs="141"/>
                    <Row srno={"6"} feild="GRAPHIC DESIGNER" no_ofjobs="127"/>
                    <Row srno={"7"} feild="DATA ANALYST" no_ofjobs="72"  />

                   
                   
                </div>
            </div>
        </div>
    );
}

export default Trends;
