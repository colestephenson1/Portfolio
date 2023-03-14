import React from 'react'
import Layout from '@/Layout/Layout'
import Service from '@/Service/service'

type Arr = [{serviceName: string, serviceDescrip: string}, {serviceName: string, serviceDescrip: string}, {serviceName: string, serviceDescrip: string}]


const Services = () => {

    const services: Arr = [
        { serviceName: 'Service1',
        serviceDescrip: 'Descrip1' },
        { serviceName: 'Service2',
        serviceDescrip: 'Descrip2' },
        { serviceName: 'Service3',
        serviceDescrip: 'Descrip3' }
      ]

    const serviceBundle: JSX.Element[] = services.map(service => {
            return(
                <Service service={service}/>
            )
        })

  return (
    <Layout>
        <div className='homepage-wrap'>
            <img
                className="homepage-bg"
                src="https://img.freepik.com/free-vector/blue-smooth-flowing-dynamic-wave-background_1017-33405.jpg?size=626&ext=jpg&ga=GA1.1.1060710081.1678821843&semt=ais"
                alt=""
            />
            <div className="service-content">
                {serviceBundle}
            </div>
        </div>
    </Layout>
  )
}

export default Services