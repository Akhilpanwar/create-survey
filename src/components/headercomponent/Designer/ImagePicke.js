// import React, { useState, useEffect } from "react";
// import java from './images/java.png';
// import python from './images/python.jpeg';
// import { StyledDiv,StyledInput } from "../../../../Header/styles";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// function ImagePicker() {
  
//   const [showImage, setShowImage] = useState(true);

//   const [images, setImages] = useState([{ value: java }, { value: python }]);

//   const uploadImage = (e) => {
//     const files = e.target.files;
//     const file = files[0];
//     getBase64(file);
//   };
//   const getBase64 = (file) => {
//     let reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       onLoad(reader.result);
//     };
//   };
//   const onLoad = (fileString) => {
//     const newImage = [...images, { value: fileString }];
//     setImages(newImage);
//   };
//   const deleteImage = (index) => {
//     const DeletedImage = images.filter((value) => {
//       return index !== value;
//     });
//     setImages(DeletedImage);
//   };
//   return (
//     <Container
//       style={{
//         display:"flex",
//         boxSizing: "border-box",
//         height: "auto",
//         width: "90%",
//         borderStyle: "dotted",
//        maxHeight:"auto",
//        justifyContent:"center"
//       }}
//     >
//       {showImage ? (
//         <StyledDiv TA="center" JC="center" TP="40%" PT="relative">
//           <label for="file-input">
//             <IoMdAddCircleOutline color="green" size={40} />
//           </label>
//           <StyledInput
//             DP="none"
//             id="file-input"
//             type="file"
//             name="file"
//             onClick={() => setShowImage(false)}
//           />
//         </StyledDiv>
//       ) : (
//      <Container fluid style={{display:'flex'}}>
//      <Row > 
//           {images.map((index, value) => {
//             return (
             
             
//                 <Col xs={6}>
               
//                   <RiDeleteBin6Line
//                   style={{position:'relative'}}
//                     key={index}
//                     onClick={() => deleteImage(index)}
//                   />
//                   <img
//                     src={index.value}
//                     height="50%"
//                     width="80%"
//                     alt="Girl in a jacket"
//                   />
                   
//                 </Col>
              
              
//             );
//           })}
//           </Row>
//           <Container DP="flex" TA="center" JC="center" TP="20%" PT="relative">
//             <label for="file-input">
//               <IoMdAddCircleOutline color="green" size={40} />
//             </label>
//             <StyledInput
//               DP="none"
//               id="file-input"
//               type="file"
//               name="file"
//               onChange={uploadImage}
//               webkitdirectory
//               multiple
//             />
//           </Container>
//         </Container>
//       )}
//     </Container>
//   );
// }

// export default ImagePicker;
