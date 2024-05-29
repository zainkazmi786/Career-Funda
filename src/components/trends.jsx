import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import Row from './row';
import Histogram from './histogram';

const Trends = () => {
    const [xAxisData, setXAxisData] = useState([]);
    const [yAxisData, setYAxisData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('./BackEnd/data.csv');
                Papa.parse(response.data, {
                    header: false, // since there's no header row
                    complete: (results) => {
                        const xData = results.data.map((row) => row[0]); // first column
                        const yData = results.data.map((row) => parseInt(row[1], 10)); // second column
                        setXAxisData(xData);
                        setYAxisData(yData);
                    },
                });
            } catch (error) {
                console.error('Error fetching the CSV file:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='w-full flex flex-col items-center gap-10'>
            <div className='text-7xl text-blue-300 p-10'>TRENDS TODAY in PAKISTAN</div>

            <div className='flex justify-center w-11/12'>
                <Histogram xAxisData={xAxisData} yAxisData={yAxisData} />
            </div>


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

                    <div className='flex flex-col w-full gap-2'>
                        {xAxisData.map((field, index) => (
                            <Row
                                key={index}
                                srno={index + 1}
                                feild={field}
                                no_ofjobs={yAxisData[index]}
                            />
                        ))}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Trends;
