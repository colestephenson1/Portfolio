import React from 'react'

type ServiceProp = {
    serviceName: string, serviceDescrip: string
}

const Service = ({service}: {service: ServiceProp}) => {

    const {serviceName, serviceDescrip} = service;

  return (
    <div className='formatted-service'>
       <h2>{serviceName}</h2>
       <p>{serviceDescrip}</p>
    </div>
  )
}

export default Service