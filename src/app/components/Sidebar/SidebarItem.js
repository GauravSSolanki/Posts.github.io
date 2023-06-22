import Link from 'next/link';
import styles from './sidebar.module.css';

const SidebarItem = ({ title, icon, link }) => {
  return (
    <li className={styles.sidebarItem}>
      <Link href={link} className={styles.sidebarLink}>
          <span className={styles.sidebarTitle}>{title}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;