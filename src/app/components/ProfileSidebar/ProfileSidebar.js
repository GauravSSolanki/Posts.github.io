
import Image from 'next/image';

import myprofile from '../../../../public/img.jpeg' ;
import ProfileSidebarItem from './ProfileSidebarItem';
import styles from './profileSidebar.module.css';

const ProfileSidebar = () => {
  return (
    <aside className={styles.profileSidebar}>
      <div className={styles.profile}>
        <Image
          className={styles.profileImage}
          src={myprofile}
          alt="Profile"
        />
        <label className={styles.user}> User </label>
        <h3 className={styles.profileName}>Gaurav Singh</h3>
      </div>
      <ul className={styles.profileSidebarList}>
        <ProfileSidebarItem title="Profile" icon="user" />
        <ProfileSidebarItem title="Posts" icon="file-text" />
        <ProfileSidebarItem title="Settings" icon="settings" />
      </ul>
    </aside>
  );
};

export default ProfileSidebar;
