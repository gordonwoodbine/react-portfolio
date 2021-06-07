import { motion } from 'framer-motion';
import { sectionVariants } from '../../global/framerVariants';
import { ProjectsList } from '../../components';
import style from './Projects.module.scss';

const Projects = () => {
  return (
    <motion.section 
      className={`container`}
      variants={sectionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className="box">
        <h2>Some of My Projects</h2>
      </div>
      <p>Here's where you'll find some of the things I've built so far. I'll update/replace these as I continue to improve my skills so expect this to change rather frequently :)</p>
      <div className={style.divider}><h3>Things I Have Made</h3></div>
      <ProjectsList />
    </motion.section>
  );
};

export default Projects;