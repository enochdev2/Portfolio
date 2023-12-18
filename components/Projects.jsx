import Image from 'next/image';
import React from 'react';
import realEstateImg from '../public/assets/projects/real_estate.png';
import dashboard from '../public/assets/projects/full_stack_dashboard.png';

import netflixImg from '../public/assets/projects/netflix.jpg'
import blogImg from '../public/assets/projects/blog.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase font-bold underline text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Real-Estate Webapp'
            backgroundImg={realEstateImg}
            projectUrl='/property'
            tech='Mern-Stack'
          />
          <ProjectItem
            title='Mern_App Admin_Dashboard'
            backgroundImg={dashboard}
            projectUrl='/dashboard'
            tech='MERN-STACK'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Tech-Noch Blog'
            backgroundImg={blogImg}
            projectUrl='/blog'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
