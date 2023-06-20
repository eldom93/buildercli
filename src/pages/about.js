import Head from "next/head";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Head>
      <title>Learn Builder.io | About</title>
        <meta name="keywords" content="about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fug
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fug
      </p>
    </div>
    </>
  );
};

export default About;
