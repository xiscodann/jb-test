import React from 'react';
import Image from 'next/image';
import Header from '@components/Header';
import CarouselOfJobs from '@components/CarouselOfJobs';

import presentationImage from '@images/presentation-image.png';
import hiringImage from '@images/hiring-image.png';
import decorPoint from '@images/decor-point.png';
import iconPresentation1 from '@icons/presentation-icon-1.png';
import iconPresentation2 from '@icons/presentation-icon-2.png';
import iconPresentation3 from '@icons/presentation-icon-3.png';
import iconCheck from '@icons/check.png';
import iconCheck2 from '@icons/check-2.png';
import Footer from '@components/Footer';

const hiring = [
  {
    title: 'Engineering jobs',
    jobs: ['Automation', 'Robotics', 'Industrial', 'Software'],
  },
  {
    title: 'Technical jobs',
    jobs: [
      'Maintenance Technicians',
      'Mechanical Designers',
      'HVAC Technicians',
      'Injection/Blow Molding',
    ],
  },
];

const jobs = [
  {
    title: 'Out of the Box Staffing Services',
    subtitle: '',
    description:
      'We know that the toughest single challenge in running your business is finding the right people. We are experts at finding international talent for full time positions, project base, or nearshore services. We service from new entrepreneurs to the largest asset-based companies.',
  },
  {
    title: 'Otro titulo de prueba',
    subtitle: 'Este si tiene',
    description:
      'We know that the toughest single challenge in running your business is finding the right people. We are experts at finding international talent for full time positions, project base, or nearshore services. We service from new entrepreneurs to the largest asset-based companies.',
  },
  {
    title: 'La prueba definitiva',
    subtitle: '',
    description:
      'We know that the toughest single challenge in running your business is finding the right people. We are experts at finding international talent for full time positions, project base, or nearshore services. We service from new entrepreneurs to the largest asset-based companies.',
  },
];

const Layout = () => {
  return (
    <>
      <Header />
      <article className='presentation-content'>
        <section className='presentation container mx-auto row'>
          <div className='col-12 col-sm-6'>
            <h1>
              <span>Innovate solutions</span> for your business, we can
              definitely help you succeed
            </h1>
            <p>
              We provide technical staffing, and recruiting services for
              manufacturing. We source the best bilingual technical talent from
              Latin America at reasonable costs.
            </p>
            <div className='presentation__options'>
              <div>
                <p className='text-center'>
                  <small>Are you a company?</small>
                </p>
                <button
                  type='button'
                  className='btn text-uppercase presentation__options--principal'
                >
                  Contact us
                </button>
              </div>
              <div>
                <p className='text-center'>
                  <small>Do you want to work with us?</small>
                </p>
                <button type='button' className='btn text-uppercase text-white'>
                  Apply for a job
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 presentation__image'>
            <div className='presentation__image--photo'>
              <Image src={presentationImage} alt='presentation image' fill />
            </div>
            <div className='presentation__image--points'>
              <Image src={decorPoint} alt='presentation image' fill />
            </div>
          </div>
        </section>
        <section className='container mx-auto why-us'>
          <h2>
            <span>Why</span> us?
          </h2>
          <p className='col-12 col-md-10 col-lg-8 col-xl-6 mx-auto'>
            JoeBar Business Solutions is a staffing firm with offices in the
            U.S., Mexico, and Colombia. We are looking for long term
            relationships, not just transactions.
          </p>
          <div className='why-us__explain row'>
            <div className='why-us__box col-12 col-md-4'>
              <div className='why-us__box--content'>
                <div className='why-us__box--image'>
                  <Image src={iconPresentation1} alt='Our ramp icon' fill />
                </div>
              </div>
              <p>
                Our ramp up process is designed to empower your team and outfit
                them with the tools they need to succeed
              </p>
            </div>
            <div className='why-us__box col-12 col-md-4'>
              <div className='why-us__box--content'>
                <div className='why-us__box--image'>
                  <Image src={iconPresentation2} alt='We want icon' fill />
                </div>
              </div>
              <p>
                We want to give each of you the time and guidance you deserve.
                Whether you’re seeking a strategic alliance with the right
                partner or a special skill set or tool
              </p>
            </div>
            <div className='why-us__box col-12 col-md-4'>
              <div className='why-us__box--content'>
                <div className='why-us__box--image'>
                  <Image
                    src={iconPresentation3}
                    alt='We can support icon'
                    fill
                  />
                </div>
              </div>
              <p>
                We can support your growth, limit your turnover, and put you on
                a solid track to success and profit.
              </p>
            </div>
          </div>
        </section>
      </article>
      <article>
        <section className='container text-center'>
          <h2>
            <span>What</span> we do?
          </h2>
          <p>Our offer covers three essential aspects</p>
          <CarouselOfJobs data={jobs} />
        </section>
        <section className='container mx-auto row help-your-business'>
          <div className='col-12 col-md-8 row'>
            <div className='col-6 col-md-4 my-2'>
              <div className='help-your-business__item'>
                <div className='help-your-business__item--image'>
                  <Image src={iconCheck} alt='Check' fill />
                </div>
                <p>Solve immediate and long-term talent needs</p>
              </div>
            </div>
            <div className='col-6 col-md-4 my-2'>
              <div className='help-your-business__item'>
                <div className='help-your-business__item--image'>
                  <Image src={iconCheck} alt='Check' fill />
                </div>
                <p>We handle all the immigration process for the work visas</p>
              </div>
            </div>
            <div className='col-6 col-md-4 my-2'>
              <div className='help-your-business__item'>
                <div className='help-your-business__item--image'>
                  <Image src={iconCheck} alt='Check' fill />
                </div>
                <p>We handle logistics; housing, transportation</p>
              </div>
            </div>
            <div className='col-6 col-md-4 my-2'>
              <div className='help-your-business__item'>
                <div className='help-your-business__item--image'>
                  <Image src={iconCheck} alt='Check' fill />
                </div>
                <p>Save on relocation, payroll taxes, and more</p>
              </div>
            </div>
            <div className='col-6 col-md-4 my-2'>
              <div className='help-your-business__item'>
                <div className='help-your-business__item--image'>
                  <Image src={iconCheck} alt='Check' fill />
                </div>
                <p>98% employee retention</p>
              </div>
            </div>
            <div className='col-6 col-md-4 my-2'>
              <div className='help-your-business__item'>
                <div className='help-your-business__item--image'>
                  <Image src={iconCheck} alt='Check' fill />
                </div>
                <p>
                  Improve safety, profits, and efficiencies with self motivated
                  employees
                </p>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-4 help-your-business__title d-none d-md-block'>
            <h1>
              <span>How</span> do we help your business?
            </h1>
          </div>
        </section>
      </article>
      <article className='hiring-container'>
        <section className='container mx-auto hiring'>
          <h1>
            <span>Who</span> we are hiring?
          </h1>
          <div className='row'>
            <div className='col-5  d-none d-md-block'>
              <div className='hiring__image'>
                <Image src={hiringImage} alt='Who we are hiring?' fill />
              </div>
            </div>
            <div className='row col-12 col-md-7 d-flex align-items-center jusitfy-content-center'>
              {hiring.map(({ title, jobs }, i) => (
                <div key={i} className='col-12 col-md-6'>
                  <div className='hiring__item'>
                    <p className='text-uppercase hiring__item--title'>
                      {title}
                    </p>
                    <ul className='hiring__item--ul'>
                      {jobs.map((job, jobIndex) => (
                        <li key={jobIndex} className='hiring__item--li'>
                          <div className='hiring__item--image'>
                            <Image src={iconCheck2} alt='check' fill />
                          </div>
                          <p>{job}</p>
                        </li>
                      ))}
                    </ul>
                    <button type='button' className='btn hiring__item--button'>
                      See more jobs
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
      <article>
        <section className='container mx-auto contact'>
          <h1>
            <span>Contact</span> us
          </h1>
          <p>
            Together we’ll create and refine your plan for success. We didn’t
            get there alone. And neither will you.
          </p>
          <form className='col-12 col-md-6 mx-auto contact__form'>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control'
                id='name'
                placeholder='Name'
                required
              />
              <label htmlFor='name'>Name</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control'
                id='organization'
                placeholder='Organization name'
                required
              />
              <label htmlFor='organization'>Organization name</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='Email'
                required
              />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='form-floating'>
              <textarea
                className='form-control'
                placeholder='Leave a comment here'
                id='message'
                required
              ></textarea>
              <label htmlFor='message'>Message</label>
            </div>
            <button type='submit' className='btn contact__form--button'>
              SEND
            </button>
          </form>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default Layout;