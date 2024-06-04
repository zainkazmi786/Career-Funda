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
                <Article title="DATA SCIENCE" description="Data science is transforming industries by turning vast amounts of data into actionable insights. It combines statistical analysis, programming, and domain expertise to inform smarter decision-making and optimize processes. This field drives innovation and uncovers new opportunities for growth and efficiency." />
                <Article title="CYBER SECURITY" description="Cyber security is crucial for protecting digital assets from threats and vulnerabilities. It involves safeguarding networks, systems, and data through advanced technologies and practices. This field is essential for ensuring the integrity, confidentiality, and availability of information in an increasingly digital world." />
                <Article title="WEB DEVELOPMENT" description="Web development focuses on creating and maintaining websites and web applications. It involves front-end design, back-end programming, and database management to deliver seamless online experiences. This field is vital for building the digital presence of businesses and enhancing user interaction on the web." />
                <Article title="SOFTWARE ENGINEERING" description="Software engineering focuses on designing, developing, and maintaining reliable software systems. It combines principles of computer science, engineering, and project management to create efficient, scalable solutions. This field is essential for building and optimizing the software that powers modern technology." />
                <Article title="DATA ANALYST" description="Data analysts interpret complex datasets to provide valuable insights and support decision-making. They utilize statistical tools and software to identify trends, patterns, and relationships within data. This role is vital for optimizing business strategies and improving operational efficiency." />
                <Article title="WORDPRESS DEVELOPER" description="WordPress development focuses on creating and customizing websites using the WordPress platform. It involves designing themes, developing plugins, and optimizing site functionality. This field empowers businesses and individuals to build dynamic, user-friendly websites with ease." />
                <Article title="GRAPHIC DESIGNER" description="Graphic design is the art of creating visual content to communicate messages. It combines typography, imagery, and color to produce compelling designs for various media. This field plays a key role in branding, marketing, and digital communication." />



            </div>







        </div>
    );
}

export default Trends;
