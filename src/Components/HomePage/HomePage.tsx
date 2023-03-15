import React from 'react'

const HomePage = () => {
  return (
    <div className='homepage-wrap'>
        <img
            className="homepage-bg"
            src="https://img.freepik.com/free-vector/blue-smooth-flowing-dynamic-wave-background_1017-33405.jpg?size=626&ext=jpg&ga=GA1.1.1060710081.1678821843&semt=ais"
            alt=""
        />
        <div className="homepage-content">
            <img className='business-logo' src='https://t3.ftcdn.net/jpg/01/08/37/26/360_F_108372613_qcAc1ORtQr8F3Mm48NUHYAESQslhvY5c.jpg'/>
            <h1 className='business-name'>Business Name</h1>
        </div>
    </div>
  )
}

export default HomePage