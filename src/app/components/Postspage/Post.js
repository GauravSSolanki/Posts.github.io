
import React from 'react';
import { MdThumbUpOffAlt } from "react-icons/md";
import { MdChatBubbleOutline  } from "react-icons/md";
import { MdOutlineShare } from "react-icons/md";
import { MdOutlineSave } from "react-icons/md";

import styles from './post.module.css';

import ig from '../../../../public/profile-img.jpg';
import ig3 from '../../../../public/computer.png';
import ig2 from '../../../../public/ut-4.png';
import Image from 'next/image';
// import { ThumbDown } from '@mui/icons-material';
// import CommentIcon from '@mui/icons-material/Comment';
// import IosShareIcon from '@mui/icons-material/IosShare';

// export async function getStaticProps() {
//   try {
//     const response = await fetch('API_URL');
//     const data = await response.json();

//     return {
//       props: {
//         data,
//       },
//     };
//   }
// }

  const Post = (/* {data} */ {id,title,image}) => {
   
  // return(
  // {data.map((item) => (
    return (
      <div className={styles.post} >
          <div className={styles.doc}>
          <div className={styles.box}>
      <Image className={styles.igl} src={image} alt='Profile'/>
      { <p className={styles.username}>{title}</p> }
      </div>
      <div className={styles.postcontent}>
        <Image className={styles.postimg} src={image /* {item.image} */} alt="Post Image" />
      </div>
      <div className={styles.postactions}>
        <MdThumbUpOffAlt className={styles.icon}/>
        <MdChatBubbleOutline className={styles.icon}/>
        <MdOutlineShare className={styles.icon}/>
        <MdOutlineSave className={styles.icon}/>
      </div>
       </div>
    </div>
    );
    // ))})
};

export default Post;
