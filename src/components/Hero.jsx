import styles from "../styles/Hero.module.css";
import jewel from "../images/jewel.png";
import female from "../images/female.png";

const Navbar = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={jewel} alt="logo" />
          <h1>Jewelry</h1>
        </div>
        <ul className={styles.ul}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#category">Category</a>
          <a href="#contact">Contact</a>
        </ul>
      </div>
      <div className={styles.jumbotron}>
        <div className={styles.left}>
          <h1>Shine Bright Like A Diamond</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nunc nunc curabitur vel
            consectetur. Volutpat cras netus senectus suscipit.
          </p>
          <button>Shop Now</button>
        </div>
        <div className={`${styles.circle} ${styles.circle1}`}></div>
        <div className={`${styles.circle} ${styles.circle2}`}></div>
        <div className={`${styles.circle} ${styles.circle3}`}></div>
        <div className={styles.right}>
          <img src={female} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
