import React from 'react'
import Layout from '@/Components/Layout/Layout'
import Service from '@/Components/Service/service'
import Image from 'next/image'

type Arr = [{serviceName: string, serviceDescrip: string, serviceDetail: string, count: number}, {serviceName: string, serviceDescrip: string, serviceDetail: string, count: number}, {serviceName: string, serviceDescrip: string, serviceDetail: string, count: number}, {serviceName: string, serviceDescrip: string, serviceDetail: string, count: number}, {serviceName: string, serviceDescrip: string, serviceDetail: string, count: number}, {serviceName: string, serviceDescrip: string, serviceDetail: string, count: number}]


const Services = () => {

    const services: Arr = [
        { serviceName: 'Defining the Scope of Work',
        serviceDescrip: 'Preliminary Discussions:',
        serviceDetail: 'Our team of experts will meet with leadership and customize the engagement to your specific needs.',
        count: 1 },
        { serviceName: 'Discover Phase',
        serviceDescrip: 'Current State Deep Dive:' ,
        serviceDetail: 'Your organization or community is a living organism made up of individuals functioning as a whole. Together we will examine the understandings, structures, & processes that exist for your group in the current state and consider what is the best of this organization as it exists today. Where and how is the best work happening and what gives this community life?',
        count: 2},
        { serviceName: 'Dream Phase',
        serviceDescrip: 'Envisioning the possible:',
        serviceDetail: 'We help you collaboratively work to imagine what might be possible if the best of what is could be everything we imagine the ideal state to be. *This might include additional mission and Vision or Core Value development work.',
        count: 3 },
        { serviceName: "Design Phase",
        serviceDescrip: "Action Planning:",
        serviceDetail: "As needed, our team will support you with deepening the work your organization needs by capitalizing on existing processes and practices and mapping a plan for modifying when needed. *This might include customized equity audit work, additional workshops, or evaluation tool creating work.",
        count: 4},
        { serviceName: "Destiny Phase",
        serviceDescrip: "Ongoing Support:",
        serviceDetail: "Follow up support will be provided to help keep your organization on track to fulfill these plans and co-create the future of your community. *This might include individualized coaching support.",
        count: 5},
        { serviceName: "Alternative Stand Alone Workshops",
        serviceDescrip: "Individualized Interactive Professional Development for your Context:",
        serviceDetail: "Equity, Social Justice, Anti-Racism, Trauma Informed Practices, Community Leadership or other customized training session to deepen understanding will support your staff or stakeholders in doing further work. Include a 1 hour follow up/check in session to monitor ongoing work. *This might be introductory, or might include equity audit work.",
        count: 6}
      ]

    const serviceBundle: JSX.Element[] = services.map(service => {
            return(
                <Service service={service}/>
            )
        })

  return (
    <Layout>
        <div className='service-wrap'>
            <img
                className="service-bg"
                src="https://img.freepik.com/free-photo/stylish-texture_1122-366.jpg?size=626&ext=jpg&ga=GA1.2.1060710081.1678821843&semt=ais"
                alt=""
            />
            <div className="service-content">
                <h1 className='journey-title'>The Village Journey</h1>
                <Image className='process-image' src='/journey.png' height={500} width={250} alt='village journey process'/>
                <div className='service-bundle'>
                 {serviceBundle}
                </div> 
            </div>
        </div>
    </Layout>
  )
}

export default Services