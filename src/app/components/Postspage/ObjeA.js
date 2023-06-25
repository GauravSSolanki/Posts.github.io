import React from 'react';
import Post from './Post';

import pro from '../../../../public/profile-img.jpg';
import ig3 from '../../../../public/computer.png';
import ig2 from '../../../../public/ut-4.png';
import img1 from '../../../../public/img-1.jpeg' ;
import img2 from '../../../../public/img-2.jpeg' ;
import img3 from '../../../../public/img-3.jpeg' ;
import img4 from '../../../../public/img-4.jpeg' ;
import img5 from '../../../../public/img-5.jpeg' ;
import img6 from '../../../../public/img-6.jpeg' ;

const ObjeA = () => {
  const members = [
    {
      title: 'John Doe',
      id : 1,
      image: img6,
    },
    {
        title: ' Daniel Michael',
        id : 2,
        image: pro,
    },
    {
        title: 'Benjamin',
        id : 3,
        image: img2,  
    },
    {
      title: 'Mike Johnson',
      id : 4,
      image: img1,  
  },
  {
    title: 'Jane Smith',
    id : 5,
    image: img4,  
},
{
  title: 'Alexander',
  id : 6,
  image: img3,  
}
  ];

  return (
    <div>
      {members.map((member) => (
        <div key={member.id}>
           <Post  title={member.title}  image={member.image}/>
        </div>
      ))}
    </div>
  );
};

export default ObjeA;
