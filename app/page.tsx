import style from './page.module.scss';
import Button from '@mui/material/Button';

const HomePageComponent = () => {
  return (
    <div style={{ background: '#808080' }} className={style.wrapper}>
      <h1 className={style.title}>REST/GraphiQL Client</h1>
      <Button variant="contained">Contained</Button>
    </div>
  );
};

export default HomePageComponent;
