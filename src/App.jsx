import Header from './components/Header/Header';
import './global/global.scss';
import style from './App.module.scss';

const App = () => {
  return (
    <div className={style.app}>
      <Header />
    </div>
  )
};

export default App;