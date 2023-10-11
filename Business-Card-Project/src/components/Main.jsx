

function Main(){
  const fName = "Kevin Baguioso"
  return(
    <div className="Main">
      <div>
        <h2 className='title-name'>{fName}</h2>
        <p className='job-title'>Frontend Developer</p>
        <a className='website' href="kevinb-portfolio.vercel.app" target="_blank">kevinb-portfolio.vercel.app</a>
      </div>
      <div className="btn-container">
        <button className="btn-email"><i className="btn-icon fa-solid fa-envelope"></i> Email</button>
        <button className="btn-linkedin"><i className="btn-icon fa-brands fa-linkedin"></i> Linkedin</button>
      </div>
      <div className="about-details">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut ultrices felis aliquam urna tincidunt ultrices. 
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <h3>Interests</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut ultrices felis aliquam urna tincidunt ultrices. 
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </div>
    </div>
  )
}

export default Main