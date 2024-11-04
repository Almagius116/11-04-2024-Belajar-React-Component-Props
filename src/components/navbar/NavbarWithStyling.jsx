import styles from "./NavbarWithStyling.module.css";
import About from "../about/About";

const NavbarWithStyling = ({ menu, name, email }) => {
  // const [list, setList]
  let list;

  if (menu) {
    list = (
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="">{menu[0]}</a>
        </li>
        <li className={styles.item}>
          <a href="">{menu[1]}</a>
        </li>
        <li className={styles.item}>
          <a href="">{menu[2]}</a>
        </li>
      </ul>
    );
  } else {
    list = <h1>List not exist</h1>;
  }

  return (
    <>
      <div className={styles.navbar}>
        <h1 className={styles.title}>FSW 2</h1>
        {list}
      </div>
      <About name={name} email={email} />
    </>
  );
};

export default NavbarWithStyling;
