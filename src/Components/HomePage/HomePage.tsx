import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className='homepage-wrap'>
        <img
            className="homepage-bg"
            src="https://img.freepik.com/free-photo/stylish-texture_1122-366.jpg?size=626&ext=jpg&ga=GA1.2.1060710081.1678821843&semt=ais"
            alt=""
        />
        <div className="homepage-content">
            <img className='business-logo' src='https://t3.ftcdn.net/jpg/01/08/37/26/360_F_108372613_qcAc1ORtQr8F3Mm48NUHYAESQslhvY5c.jpg'/>
            <div className='homepage-greeting'>
              <h1 className='business-name'>The Village Consulting Group</h1>
              <h2 className='business-slogan'>Supporting Community - One Equity Project at a Time</h2>
              {/* <h3 className='business-subslogan'>We strive to support the reknitting of communities one equity project act a time.</h3> */}
            </div>
            <Image className='community-pic' src='/community.jpg' alt='community with happy faces' height={400} width={200}/>
        </div>
    </div>
  )
}

export default HomePage