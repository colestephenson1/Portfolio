import React from 'react'

type ServiceProp = {
    serviceName: string, serviceDescrip: string, serviceDetail: string, count:number
}

const Service = ({service}: {service: ServiceProp}) => {

    const {serviceName, serviceDescrip, serviceDetail, count} = service;

  return (
    <div className='formatted-service'>
       <h1>{count}. {serviceName}</h1>
       <p className='service-descrip'><strong>{serviceDescrip}</strong></p>
       <p className='service-detail'>{serviceDetail}</p>
       {serviceDetail.includes('*') && <p>* add-on services and supports can be added</p> }
    </div>
  )
}

export default Service