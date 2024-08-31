import styles from "../styles/Jumbotron1.module.css";
import watch from "../images/Diamond watch.png";
export const Jumbotron1 = () => {
  return (
    <div className={styles.Jumbotron1}>
      <div className={styles.col1}>
        <h2>Diamond Bracelet</h2>
        <h2> Wristband Apple Watch</h2>
        <h4>20% off on all orders</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eius
          quam cum facere quod autem.
        </p>
        <button>Shop Now</button>
      </div>
      <div className={styles.col2}>
        <img className={styles.watch} src={watch} alt="watch" />
      </div>
    </div>
  );
};
