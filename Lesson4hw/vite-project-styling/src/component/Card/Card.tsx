// //Card.tsx
import styles from './Card.module.css';
//import styles from './App.css';
import flaresImage from '../../images/flares190x235.jpg';

const Card: React.FC = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Card.module.css</h3>
      <h1 className={styles.h1}>Jeans</h1>
      <p className={styles.p}>Price: £330</p>
      <img src={flaresImage} alt="Jeans" />
    </div>
  );
};

export default Card;




//old
// import './App.css';
// import styles from './component/Card/Card.module.css';
// import flares190x235 from './images/flares190x235.jpg';

// const Card = () => {
//   return (
    
//       <div className={styles.container}>
//         <h3 className={styles.h3}>Card.module.css</h3>
//         <h1 className={styles.h1}>Jeans</h1>
//         <p className={styles.p}>Price: £330</p>
//         <div className={styles.graphic}></div>
//         <img src={flares190x235} alt="Jeans001" />
//       </div>
//   )
// }

// export default Card 

////
