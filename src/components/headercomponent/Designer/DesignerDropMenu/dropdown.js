
import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {DropDiv,DropButton,DropUpContent,DropUpLink,DropUpBorder } from "../../mainComponent/Styles";

function DesignerDropDown() {
  return (
    <DropDiv tabIndex='1234'>
  

        <DropButton>...</DropButton>
      
        <DropUpContent>
       
        <DropUpLink to="">Search</DropUpLink> 
        <DropUpBorder></DropUpBorder>  
        <DropUpLink to=""> Multiple Text</DropUpLink>  
        <DropUpBorder></DropUpBorder>   
        <DropUpLink to="">Panel</DropUpLink>   
        <DropUpLink to="">Dynamic Panel</DropUpLink>  
        <DropUpBorder></DropUpBorder>   
        <DropUpLink to="">Single-Choice Matrix</DropUpLink>   
        <DropUpLink to="">Multiple-Choice Matrix</DropUpLink>   
        <DropUpLink to="">Dynamic Matrix</DropUpLink>
        <DropUpBorder></DropUpBorder>     
        <DropUpLink to="">Html</DropUpLink>   
        <DropUpLink to="">Expression(Read Only)</DropUpLink>   
        <DropUpLink to="">Image</DropUpLink>   
        <DropUpLink to="">Signature pad</DropUpLink>  
   
        </DropUpContent>
   
        
    </DropDiv>
  )
}

export default DesignerDropDown
