import React from 'react'
import G from './graph';
import ai from '../assets/ai.jpg'
import openAI from '../assets/openAI.jpg'

const AI = () => {
  return (
    <div className="main h-full w-11/12 mx-auto flex flex-col gap-40">
                <div className="header flex flex-col gap-10">

                    <div className="header text-8xl w-2/3 font-extrabold text-blue-600 uppercase leading-relaxed">Reveal the truth behind AI hype:</div>
                    <div className="header text-5xl text-blue-100 font-semibold uppercase">Cutting through noise, we explain how AI transforms work and life</div>
                </div>
                <div className='flex justify-between'>
                    <div className="w-2/5 object-contain"><img src={ai} alt="" /></div>
                    <div className='w-2/5 text-6xl text-blue-400 leading-relaxed text-justify'>AI <br /> Opportunity for the visionaries. Disappointment for the rest</div>
                </div>
                <div className="intro text-white text-3xl font-thin leading-relaxed">Welcome to our platform, where the world of artificial intelligence unfolds in a captivating journey of discovery. Amidst the clamor of AI's rise, we're here to offer clarity in a sea of confusion. Picture this: unraveling the enigmatic veil of AI with the ease of your favorite bedtime story. Our blog isn't just a window into the future; it's a friendly guide through the maze of innovation, translating complex text-justifyconcepts into delightful narratives. Whether you're an eager novice or a seasoned explorer, join us as we embark on an adventure to demystify AI's impact on our lives and unveil the fascinating tales hidden within its circuits and algorithms</div>

                <div className="flex justify-between ">
                    <div className="w-2/5 text-6xl text-blue-600">Embrace a world of endless possibilities as we harness the power of innovation.</div>
                    <img className='w-2/5 object-contain' src={openAI} alt="" />
                </div>


                <div className="para1 flex flex-col gap-10">
                    <h1 className=' text-3xl text-white font-bold'>UNVEILING THE IMPACT: AI IN ACTION</h1>
                    <div className='text-white text-3xl font-thin leading-relaxed text-justify'>Ready to witness the impact of AI in action? Dive into our data-driven exploration below. With interactive graphs at your fingertips, we showcase the tangible effects of artificial intelligence on our evolving work and lifestyles. From the surge of AI adoption to the shifting job landscape, our visuals illuminate the dynamic interplay between technology and society. Join us as we uncover the trends, patterns, and insights shaping our AI-powered future.</div>
                </div>
                <div className="gsection flex justify-center gap-10">
                    
                        <G xAxisData={["Nov 22", "Dec 22", "Jan 23", "Feb 23", "Mar 23", "Apr 23", "May 23", "Jun 23", "Jul 23", "Aug 23", "Sep 23", "Oct 23", "Nov 23", "Dec 23", "Jan 24"]} yAxisData={[0.15, 0.266, 0.616, 1, 1.6, 1.8, 1.8, 1.6, 1.5, 1.4, 1.4, 1.5, 1.7, 1.7, 1.6]} />

                   
                    
                </div>
                <div className='w-full text-white text-center text-5xl'>AI TRENDS</div>
                <div className="para1 flex flex-col gap-10">

                    <div className='text-white text-3xl font-thin leading-relaxed text-justify'>The first graph illustrates the exponential growth of artificial intelligence (AI) adoption over time. As depicted, the curve demonstrates a steep upward trajectory, indicating a rapid increase in the integration of AI technologies across various sectors and industries. This surge in adoption can be attributed to several factors, including advancements in AI algorithms, the proliferation of big data, and the availability of powerful computing resources. From virtual assistants and recommendation systems to autonomous vehicles and predictive analytics, AI applications continue to revolutionize the way we work and interact with technology.</div>
                    <div className='text-white text-3xl font-thin leading-relaxed text-justify'>


                        In contrast, the second graph showcases a corresponding trend in job displacements linked to the rise of AI. While the adoption of AI brings undeniable benefits such as increased efficiency and productivity, it also poses challenges in terms of workforce disruptions and job transformations. The graph reveals a notable shift in employment patterns, with certain occupations experiencing a decline in demand as tasks become automated or outsourced to AI systems. However, it's important to note that this displacement is not uniform across all industries, and new opportunities emerge as the labor market adapts to the changing technological landscape. Ultimately, these graphs provide valuable insights into the complex relationship between AI adoption and its impacts on the workforce, highlighting the need for proactive strategies to address the challenges and seize the opportunities presented by the AI revolution.</div>
                </div>

            </div>
  )
}

export default AI
