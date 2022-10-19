import { Header } from "./components/Header";
import { Post } from "./Post";
import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Carlos"
            content="Lorem ipsumfdsfdsgfdsfgdsg shnfjksdhfnjikdghbhjskgbhkjsgb jdfklsfnjdskfjskl"
          />
        </main>
      </div>
    </>
  );
}
