import React, { Fragment } from 'react'
import ProfilePhoto from "./../../Assets/JinendraJain-photo.jpg"
const MoreAboutMe = () => {

    return (
        <Fragment>
            <div className="flex flex-col my-8 justify-between align-middle">

                {/* <div className="section-title">
                    <h2>More about me</h2>
                    
                </div> */}

                <div className="flex lg:flex-row flex-col">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img height={"10rem"} src={ProfilePhoto} className="img-fluid" alt="" />
                    </div>
                    <div className="text-center font-bold pt-4" data-aos="fade-left">
                        <h3 className='font-bold'>MERN &amp; Stack Developer</h3>
                        <p className="font-medium text-xl mb-5 ">
                            <div>I fell in love with programming and I have at least learnt something,</div>
                            <div>I think… 🤷‍♂️ I am fluent in classics like <span className='text-purple-600 font-medium'>C++, Javascript and Python</span>.</div>
                            
                        </p>
                        <div className="flex flex-col lg:flex-row w-full text-lg font-normal lg:p-10">
                            <div className='w-full lg:w-1/2'>
                                <div className='flex flex-col w-full'>
                                    <div className='flex justify-items-center mb-4 text-lg'>
                                        {/* <i className="bi bi-chevron-right text-lg"></i> */}
                                        <span className='text-purple-600 font-bold mr-2'>Birthday :</span>
                                        <span className=''>30 Aug 2001</span>
                                    </div>

                                    <div className='flex justify-items-center mb-4 text-lg'>
                                        {/* <i className="bi bi-chevron-right text-lg"></i> */}
                                        <span className='text-purple-600 font-bold mr-2'>Website :</span>
                                        <span className=''>www.itsjinendrajain.com</span>
                                    </div>
                                    <div className='flex justify-items-center mb-4 text-lg'>
                                        {/* <i className="bi bi-chevron-right text-lg"></i> */}
                                        <span className='text-purple-600 font-bold mr-2'>Phone :</span>
                                        <span className=''>+123 456 7890</span>
                                    </div>
                                    <div className='flex justify-items-center mb-4 text-lg'>
                                        {/* <i className="bi bi-chevron-right text-lg"></i> */}
                                        <span className='text-purple-600 font-bold mr-2'>City :</span>
                                        <span className=''>Chandigarh, India</span>
                                    </div>

                
                                </div>
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <div className='flex flex-col w-full'>
                                    <div className='flex justify-items-center mb-4 text-lg'>
                                        {/* <i className="bi bi-chevron-right text-lg"></i> */}
                                        <span className='text-purple-600 font-bold mr-2'>Age :</span>
                                        <span className=''>21</span>
                                    </div>

                                    <div className='flex justify-items-center mb-4 text-lg'>
                                        {/* <i className="bi bi-chevron-right text-lg"></i> */}
                                        <span className='text-purple-600 font-bold mr-2'>Degree :</span>
                                        <span className=''>Bachelor</span>
                                    </div>
                                    <div className='flex justify-items-center mb-4 text-lg'>
                                        {/* <i className="bi bi-chevron-right text-lg"></i> */}
                                        <span className='text-purple-600 font-bold mr-2'>Email :</span>
                                        <span className=''>itsjinendrajain@gmail.com</span>
                                    </div>
                                    <div className='flex justify-items-center mb-4 text-lg'>
                                        {/* <i className="bi bi-chevron-right text-lg"></i> */}
                                        <span className='text-purple-600 font-bold mr-2'>Freelance :</span>
                                        <span className='text-green-600 font-bold'>Available</span>
                                    </div>

                
                                </div>
                            </div>
                            
                        </div>
                        <p className='font-medium lg:p-4'>
                            My field of Interest's are building new  Web Technologies and Products and also in areas related to Data Structures and Algorithms. Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js.
                        </p>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default MoreAboutMe