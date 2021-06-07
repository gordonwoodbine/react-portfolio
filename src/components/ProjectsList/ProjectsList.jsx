import { projects } from '../../global/projectDetails';
import style from './ProjectsList.module.scss';

const ProjectsList = () => {
  
  return (
    <div>
      {projects.map((project, i) => (
        <div key={project.title}>
          <h2 className={style.title}>{project.title}</h2>
          <div className={style.project}>
            <div className={style.tile}>
              <img src={project.imgSrc} alt="" />
            </div>
            <div className={style.text}>
              {project.qanda && project.qanda.map((each, i) => (
              <div className={style.block} key={i}>
                <p className={style.question}>{each.q}</p>
                <p>{each.a}</p>
              </div>
              ))}
              <div className={style.btnGroup}>
                <a 
                  className={`btn ${style.btn}`}
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >View Code</a>
                <a 
                  className={`btn btnOutline ${style.btn}`}
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >Visit Site</a>
              </div>
            </div>
          </div>
          {i < projects.length - 1 && <div className="divider"><i class="fas fa-square divider__icon"></i></div>}
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;