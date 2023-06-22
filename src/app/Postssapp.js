
import styles from './page.module.css';

import ProfileSidebar from './components/ProfileSidebar/ProfileSidebar';
import Sidebar from './components/Sidebar/Sidebar';
import ObjeA from './components/Postspage/ObjeA';



export default function Home() {
  return (
    <div className={styles.main}>
      <ObjeA />
      <ProfileSidebar />
      <Sidebar />
    </div>
  )
}