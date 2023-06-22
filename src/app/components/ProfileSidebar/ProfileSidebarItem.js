
import Link from 'next/link';
import styles from './profileSidebar.module.css';

const ProfileSidebarItem = ({ title, icon }) => {
  return (
    <li className={styles.profileSidebarItem}>
      <Link href="#" className={styles.profileSidebarLink}>
          <span className={styles.profileSidebarTitle}>{title}</span>
      </Link>
    </li>
  );
};

export default ProfileSidebarItem;