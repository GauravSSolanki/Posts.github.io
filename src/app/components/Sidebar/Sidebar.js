import React from 'react';
import SidebarItem from './SidebarItem';
import Menu from './Menu';
import { HiOutlineHome  } from "react-icons/hi";
import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
       <Menu />
      <ul className={styles.sidebarList}>
       <HiOutlineHome className={styles.icon}/>
        <SidebarItem title="Home" icon="home" link="/" />
        <SidebarItem title="Search" icon="info" link="/Search" />
        <SidebarItem title="Post" icon="mail" link="/Post" />
        <SidebarItem title="Follow" icon="mail" link="/Follow" />
        <SidebarItem title="Live" icon="mail" link="/Live" />
      </ul>
      <button type="button" class={styles.btn}>Log Out</button>
    </aside>
  );
};

export default Sidebar;