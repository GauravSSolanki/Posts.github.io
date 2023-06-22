// import Post from "./Post";
// import ig from '../../../public/ut-1.jpg'

// export const router=[
//     {title:"GAurav " , image:{ig}},
//     {title:"GAurav " , image:{ig}},
//     {title:"GAurav " , image:{ig}}
// ];

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
// const Getdata=({data})=>{
//  return(
//     <>
//     {data.map((item) => (
//         <Post title={item.title} image={item.image} />
//       ))}
//     </>
//      );
    
// }

// export default Getdata;