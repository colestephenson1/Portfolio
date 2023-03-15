import React from 'react'
import Layout from '@/Components/Layout/Layout'

const About = () => {
  return (
    <Layout>
        <div className='homepage-wrap'>
            <img
                className="homepage-bg"
                src="https://img.freepik.com/free-vector/blue-smooth-flowing-dynamic-wave-background_1017-33405.jpg?size=626&ext=jpg&ga=GA1.1.1060710081.1678821843&semt=ais"
                alt=""
            />
            <div className="about-content">
                <img className='shanta-portrait' src='https://media.istockphoto.com/id/487234780/photo/unknown-businesswoman-silhouette.jpg?s=612x612&w=0&k=20&c=oCn5h_8Zfc40PBxtgwdNrVDOnGhJiVSJXpJkrHP_Lk0=' alt="Shant'a Portrait"/>
                <div className='bio'>
                    <p className='text-for-bio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam unde perspiciatis voluptate ipsa quaerat debitis vero. Voluptatem impedit recusandae animi rem? Doloribus quam, accusamus provident aliquid animi quo adipisci repudiandae.</p>
                </div>
            </div>
        </div>
    </Layout>
    
  )
}

export default About