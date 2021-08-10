import Link from 'next/link';

function AboutUs() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/about/img4.png" className="move-1" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6>
                              <h2 className="title">Why Intuitio Ventures </h2>
                          </div>
                          <p>INTUITIO Ventures solve the persistent challenges impacting today’s society. This means that organizations and entrepreneurs need to adopt new ways of thinking about innovation and opportunity.
</p>
                          <p className="m-b30">An estimated 90% of startups fail, which begs the question: where are they falling short and what can be done to improve their chances of success? While accelerators and incubators play an important role in the venture ecosystem, they're not always the right solution for every business challenge.
Since the mid-1990s, a novel venture building model has emerged with agility embedded in its framework, offering aspiring entrepreneurs more integral support.</p> <p className="m-b30">
This business model — the venture studio — is taking a hold of the startup world with a proven track record to support its success. Over the last 7 years, the venture studio market has seen an incredible 625% growth.

</p>
                          <img src="images/sign.png" alt=""/>
                          <h4 className="m-b30">Founder Walied Albasheer</h4>
                         <Link href="about-us-1"><a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Learn More</a></Link> 
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default AboutUs;