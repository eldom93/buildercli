import Head from "next/head";
import styles from "../styles/Women.module.css";
import { BuilderComponent} from '@builder.io/react'

const Women = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Women</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BuilderComponent model="header" />
    
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
  );
};

export default Women;
