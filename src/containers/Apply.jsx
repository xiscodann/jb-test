import React from 'react';
import Image from 'next/image';
import Header from '@components/Header';
import CarouselOfJobs from '@components/CarouselOfJobs';
import Link from 'next/link';

import decorPoint from '@images/decor-point.png';
import iconCheck from '@icons/check.png';

import Footer from '@components/Footer';

const jobsEngineering = [
  {
    title: 'Automation/ Engineer Qualifications',
    subtitle:
      'Employees possess Automation, Robotics or Mechatronics Engineering degrees.',
    description: [
      'Support the day to day automation processes during production as needed',
      'Expertise with Allen-Bradley, Siemens, and CompactLogix',
      'PLC programming and control systems. PLC Programming using ladder, structure text languages',
      'Experience with vision systems, VFD’s, and HMI’s.',
      'Design of electrical design diagrams.',
      'Servo Drive Programming by train or pulse.',
      'Experience programming robots, and troubleshooting problems',
    ],
  },
  {
    title: 'Industrial  Engineer Qualifications',
    subtitle: 'Employees possess Industrial Engineering degrees.',
    description: [
      'Experience improving OEE by using visual management, visual metrics and LEAN systems.',
      'Develop/implement lean manufacturing processes to improve production.',
      'Contribute to 5S initiative, ensuring that improvements are sustained and entrenched within the business.',
      'Host Kaizen improvement events.',
      'Ensure the factory layout, both at macro and micro levels, is suitable for an efficient manufacturing process.',
    ],
  },
  {
    title: 'Mechanical Design Engineer',
    subtitle: 'Employees possess Mechanical or electrical engineering degrees.',
    description: [
      'Meet with designers and engineers to discuss design ideas',
      'Developing/present product designs for/to clients.',
      'Ensure product designs meet required safety and general design standards.',
      'Generate/modify/finalize Solid and Surface CAD models using AutoCAD and SolidWork software.',
      'Present design perspectives for equipment improvements and adaptations.',
      'Completing job reports.',
    ],
  },
];
const jobsTechnical = [
  {
    title: 'Reliability / Maintenance Technicians',
    subtitle:
      'Employees possess Mechanical and Electrical Engineering degrees.',
    description: [
      'Ability to troubleshot pneumatic, hydraulic systems',
      'Ability to work with low and mid voltage equipment.',
      'Experience with conveyors, servo motors, VFD’s and valves.',
      'Understanding of HMI, and PLC equipment. Basic troubleshooting.',
      'Preventive and predictive maintenance.',
      'Develop/implement preventive maintenance procedures.',
      'Experience working with CMMS, and work order systems.',
      'Objective is to improve overall equipment effectiveness (OEE).',
    ],
  },
  {
    title: 'Injection/Blow Molding Technicians',
    subtitle:
      'Employees possess Mechanical and Electrical Engineering degrees.',
    description: [
      'Adhere to preventive maintenance processes for mold and equipment set-up.',
      'Comply with all company and EH&S safety policies and procedures.',
      'Maintain drawing specs following process temperatures and injection pressures to detect non-conformances.',
      'Verify settings by measuring positions, first-run part, and sample work pieces.',
      'Calculate dimensions and tolerances using knowledge of mathematics and instruments such as micrometers, Vernier calipers, and optical comparator.',
    ],
  },
  {
    title: 'Certified Welders',
    subtitle: 'Employees with welding certifications from technical schools.',
    description: [
      'Reading and understanding blueprints prior to starting a project',
      'Sourcing the materials to be used in the project',
      'Measuring and cutting materials to specifications',
      'Welding materials using the correct materials to join the metals together',
      'Checking finished work to make sure that it falls within the tolerances marked on the blueprints',
    ],
  },
  {
    title: 'Certified HVAC',
    subtitle:
      'Employees with HVAC certifications from technical schools in Mexico.',
    description: [
      'Installing, maintaining and repairing ventilation and air conditioning systems and equipment.',
      'Identifying maintenance risks on equipment.',
      'Diagnosing electrical and mechanical faults for HVAC systems.',
      'Cleaning, adjusting and repairing systems, and performing warranty services.',
      'Performing emergency repairs promptly and efficiently',
      'Providing technical direction and on-the-job training',
      'Keeping daily logs and records of all maintenance functions',
      'Ensuring compliance with appliance standards and with Occupational Health and Safety Act',
      'Complying with service standards, work instructions and customers’ requirements',
      'Assisting with customers’ queries',
    ],
  },
  {
    title: 'Certified CNC Technicians',
    subtitle:
      'Employees with Mechanical and Electrical engineering degrees from technical schools in Mexico.',
    description: [
      'Maintain and repair all assets to ensure their proper operating condition',
      'Provide preventative and correct maintenance on various complex CNCs – 5 axis milling, mill turn applications, horizontal and vertical lathes',
      'Troubleshoot and repair control & electrical system failures involving – PLCs, HMIs, servomotors, servo amplifiers, input/output, field sensors, and more',
      'Troubleshoot and repair various machine tool hydraulic and pneumatic systems – actuators, valves, pumps, filters, and more',
      'Troubleshoot and repair machine tool mechanical systems – ball screws, linear rails, guideways, gearboxes and more',
    ],
  },
];

const Apply = () => {
  return (
    <>
      <Header />
      <article className='apply-content' id='apply-content'>
        <section className='apply container mx-auto row'>
          <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
            <h1>Apply for a job with Joe Bar Business</h1>
            <form className='apply__form'>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Your email'
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                  required
                />
                <button
                  className='btn btn-outline-secondary'
                  type='submit'
                  id='button-addon2'
                >
                  Apply
                </button>
              </div>
            </form>
            <div className='apply__image--points'>
              {/*<Image src={decorPoint} alt='apply image' fill />*/}
            </div>
          </div>
        </section>
      </article>
      <article className='px-2'>
        <section className='container col-12 col-md-10 mx-auto we-help-you'>
          <div className='we-help-you__benefits'>
            <h4>BENEFITS</h4>
            <h3>HOW DO WE HELP YOU?</h3>
          </div>
          <div className='row we-help-you__explain g-4'>
            <div className='col-6'>
              <div className='card'>
                <div className='card-body'>
                  <p className='card-text small'>
                    Provide you an international work assignment.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='card'>
                <div className='card-body'>
                  <p className='card-text'>
                    Support with cultural assimilation
                  </p>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='card'>
                <div className='card-body'>
                  <p className='card-text'>Intensive English classes</p>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='card'>
                <div className='card-body'>
                  <p className='card-text'>We provide health insurance</p>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='card'>
                <div className='card-body'>
                  <p className='card-text small'>
                    Comprehensive and competitive compensation package
                  </p>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='card'>
                <div className='card-body'>
                  <p className='card-text'>
                    Opportunity to learn and gain new skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='container col-12 col-md-8 col-lg-6 col-xl-5 create-and-refine'>
          <p>TOGETHER WE&apos;LL CREATE AND REFINE YOUR PLAN FOR SUCCESS.</p>
        </section>
      </article>
      <article className='list-content px-2'>
        <section className='container list anchor' id='engineering'>
          <CarouselOfJobs
            data={jobsEngineering}
            type='engineering'
            isApplyJob
          />
        </section>
        <span className='list-content__separator'></span>
        <section className='container list anchor' id='technical'>
          <CarouselOfJobs data={jobsTechnical} type='technical' isApplyJob />
        </section>
      </article>
      <Footer />
    </>
  );
};

export default Apply;
