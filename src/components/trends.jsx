import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import Row from './row';
import { Link } from 'react-router-dom';
import Histogram from './histogram';
import Article from './article';


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
        <div className='w-full flex flex-col items-center gap-32'>

            <div className='text-7xl text-blue-300 p-10'>TRENDS TODAY in PAKISTAN</div>

            <div className='flex justify-center w-11/12'>
                <Histogram xAxisData={xAxisData} yAxisData={yAxisData} />
            </div>
            <header className="mb-6 w-11/12 flex flex-col gap-20 mt-10">
                <h1 className="text-7xl font-bold text-blue-600 mb-2 text-center">The Changing Trends of IT in 2024</h1>
                <p className="mb-4 text-3xl text-white leading-loose">
                    The Information Technology sector is witnessing unprecedented transformations as we move into 2024. From advancements in AI to the rise of quantum computing, the landscape is continuously evolving, pushing the boundaries of what’s possible.
                </p>
            </header>



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
                            <Link to="/field">
                                <Row
                                    key={index}
                                    srno={index + 1}
                                    feild={field}
                                    no_ofjobs={yAxisData[index]}
                                />
                            </Link>
                        ))}
                    </div>


                </div>
            </div>

            <div className='w-11/12 grid grid-cols-3 gap-20'>
                <Article title="AI" description="AI and ML are at the forefront of this revolution. The integration of these technologies in various sectors has led to more efficient processes, enhanced customer experiences, and the creation of new job roles.
                One of the most significant impacts of AI and ML is in automation." />
                <Article title="DATA SCIENCE" description="AI and ML are at the forefront of this revolution. The integration of these technologies in various sectors has led to more efficient processes, enhanced customer experiences, and the creation of new job roles.
                One of the most significant impacts of AI and ML is in automation." />
                <Article title="CYBER SECURITY" description="AI and ML are at the forefront of this revolution. The integration of these technologies in various sectors has led to more efficient processes, enhanced customer experiences, and the creation of new job roles.
                One of the most significant impacts of AI and ML is in automation." />
                <Article title="WEB DEVELOPMENT" description="AI and ML are at the forefront of this revolution. The integration of these technologies in various sectors has led to more efficient processes, enhanced customer experiences, and the creation of new job roles.
                One of the most significant impacts of AI and ML is in automation." />
                <Article title="SOFTWARE ENGINEERING" description="AI and ML are at the forefront of this revolution. The integration of these technologies in various sectors has led to more efficient processes, enhanced customer experiences, and the creation of new job roles.
                One of the most significant impacts of AI and ML is in automation." />
                <Article title="DATA ANALYST" description="AI and ML are at the forefront of this revolution. The integration of these technologies in various sectors has led to more efficient processes, enhanced customer experiences, and the creation of new job roles.
                One of the most significant impacts of AI and ML is in automation." />
                <Article title="WORDPRESS DEVELOPER" description="AI and ML are at the forefront of this revolution. The integration of these technologies in various sectors has led to more efficient processes, enhanced customer experiences, and the creation of new job roles.
                One of the most significant impacts of AI and ML is in automation." />
                <Article title="GRAPHIC DESIGNER" description="AI and ML are at the forefront of this revolution. The integration of these technologies in various sectors has led to more efficient processes, enhanced customer experiences, and the creation of new job roles.
                One of the most significant impacts of AI and ML is in automation." />



            </div>







        </div>
    );
}

export default Trends;
