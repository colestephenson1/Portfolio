import React from 'react'
import Layout from '@/Components/Layout/Layout'
import Image from 'next/image'

const About = () => {
  return (
    <Layout>
        <div className='homepage-wrap'>
            <img
                className="homepage-bg"
                src="https://img.freepik.com/free-photo/stylish-texture_1122-366.jpg?size=626&ext=jpg&ga=GA1.2.1060710081.1678821843&semt=ais"
                alt=""
            />
            <div className="about-content">
                <Image src='/shanta.jpg' className="shanta-portrait" alt="Shant'a portrait" height={500} width={300} />
                <div className='bio'>
                    <p className='text-for-bio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam unde perspiciatis voluptate ipsa quaerat debitis vero. Voluptatem impedit recusandae animi rem? Doloribus quam, accusamus provident aliquid animi quo adipisci repudiandae.</p>
                </div>
            </div>
        </div>
    </Layout>
    
  )
}

export default About