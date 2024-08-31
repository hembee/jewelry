import styles from "../styles/Sect.module.css";
import ring from "../images/ring.png";
import watch from "../images/watch.png";
const Sect = () => {
  return (
    <section className={styles.sect}>
      <div className={styles.sect1}>
        <div>
          <p>Sale all item</p>
          <h3>Men Jewelries</h3>
          <button>Shop Now</button>
        </div>
        <>
          <img src={watch} alt="watch" />
        </>
      </div>
      <div className={styles.sect2}>
        <div>
          <p>Sale all item</p>
          <h3>Women Jewelries</h3>
          <button>Shop Now</button>
        </div>
        <>
          <img src={ring} alt="ring" />
        </>
      </div>
    </section>
  );
};

export default Sect;
