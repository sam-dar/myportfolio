import React from 'react'

export default function Section2() {
  return (
    <section id="two">
    <h2>Recent Work</h2>
    <div class="row">
        <article class="col-6 col-12-xsmall work-item">
            <a href="images/fulls/01.jpg" class="image fit thumb"><img src="images/thumbs/CRD.jpg" alt="" /></a>
            <h3>Cardiac Rhythm Diagnostics (CRD)</h3>
            <p>
Cardiac Rhythm Diagnostics (CRD) is a healthcare platform implemented with React and TypeScript for the front end, and AWS Amplify with serverless computing for the backend.</p>
        </article>
        <article class="col-6 col-12-xsmall work-item">
            <a href="images/fulls2/02.jpg" class="image fit thumb"><img src="images/thumbs/micro.jpg" alt="" /></a>
            <h3>Rewardle - Investing</h3>
            <p>MicroInvesting is a secure and user-friendly React app, developed with TypeScript and Tailwind CSS, designed to empower investors with comprehensive insights into their portfolios.</p>
        </article>
        
    </div>
    {/* <ul class="actions">
        <li><a href="#" class="button">Full Portfolio</a></li>
    </ul> */}
</section>

  )
}
