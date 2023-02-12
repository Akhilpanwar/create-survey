import React,{useState,useRef} from 'react'
import { StyledDiv,BottomBorder ,StyledLi, StyledUl} from '../../../Header/styles'

import { useSelector ,useDispatch} from 'react-redux';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
function MyDropdown() {

    const Form=useSelector((state)=>state.surveyReducer.Designer);
   
   
  return (
   <StyledDiv >
  <OverlayTrigger
          trigger="click"
          key='top'
          placement='top'
          overlay={
            <Popover id='popover-positioned-top' style={{width:"23rem"}}>
              <Popover.Header as="h3"></Popover.Header>
              <StyledDiv className='popover-positioned-top'>
             
             {Form.slice(0,9).map((item)=>{
              return(
<>

                <StyledLi><b>{item.icons}</b><i>{item.title}</i></StyledLi>
            

</>
              )
             })}
              <BottomBorder BB="1px solid lightgrey"></BottomBorder>
              {Form.slice(9,12).map((item)=>{
              return(

<StyledLi><b>{item.icons}</b><i>{item.title}</i></StyledLi>

              )
             })}
              <BottomBorder BB="1px solid lightgrey"></BottomBorder>
              {Form.slice(12,14).map((item)=>{
              return(
<>
<StyledLi><b>{item.icons}</b><i>{item.title}</i></StyledLi>

</>
              )
             })}
              <BottomBorder BB="1px solid lightgrey"></BottomBorder>
              {Form.slice(14,17).map((item)=>{
              return(
<>
<StyledLi><b>{item.icons}</b><i>{item.title}</i></StyledLi>

</>
              )
             })}
              <BottomBorder BB="1px solid lightgrey"></BottomBorder>
              {Form.slice(17,21).map((item)=>{
              return(
<>
<StyledLi><b>{item.icons}</b><i>{item.title}</i></StyledLi>

</>
              )
             })}
              <BottomBorder BB="1px solid lightgrey"></BottomBorder>
              </StyledDiv>
              
            </Popover>
      
            }>
            <Button variant="none" className='dropbtn' >...</Button>
            </OverlayTrigger>
          </StyledDiv>
  
  )
}

export default MyDropdown





  {/* <StyledDiv style={{overflowY:"scroll",height:"27rem"}}>
  {Form.slice(0,9).map((item)=>{
return(
<StyledDiv >
  <Dropdown.Item style={{height:"40px"}} eventKey="1"><b>{item.icons}</b><i>{item.title}</i></Dropdown.Item>
  </StyledDiv>
)})}
 
 
  <Dropdown.Divider />
  {Form.slice(9,12).map((item)=>{
return(
<StyledDiv>
  <Dropdown.Item  style={{height:"40px"}} eventKey="1"><b>{item.icons}</b><i>{item.title}</i></Dropdown.Item>
  </StyledDiv>
)})}
  <Dropdown.Divider />
  {Form.slice(12,15).map((item)=>{
return(
<StyledDiv>
  <Dropdown.Item style={{height:"40px"}} eventKey="1"><b>{item.icons}</b><i>{item.title}</i></Dropdown.Item>
  </StyledDiv>
)})}
  <Dropdown.Divider />
  {Form.slice(15,18).map((item)=>{
return(
<StyledDiv>
  <Dropdown.Item style={{height:"40px"}} eventKey="1"><b>{item.icons}</b><i>{item.title}</i></Dropdown.Item>
  </StyledDiv>
)})}
  <Dropdown.Divider />
  {Form.slice(18,23).map((item)=>{
return(
<StyledDiv>
  <Dropdown.Item style={{height:"40px"}} eventKey="1"><b>{item.icons}</b><i>{item.title}</i></Dropdown.Item>
  </StyledDiv>
)})}
</StyledDiv>

</DropdownButton>
</Popover> */}