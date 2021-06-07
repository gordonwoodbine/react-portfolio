import { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { Header, MobileMenu, Footer } from './components';
import { Home, About, Projects } from './pages';

import './global/global.scss';
import style from './App.module.scss';

const mainVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 1
    }
  }
}

const App = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  }

  return (
    <div className={style.app}>
      <Header toggle={toggle} />
      <MobileMenu menuOpen={menuOpen} toggle={toggle} />
      <motion.main
        className={style.main}
        variants={mainVariants}
        initial='hidden'
        animate='visible'
      >
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </AnimatePresence>
      </motion.main>
      <Footer />
    </div>
  )
};

export default App;