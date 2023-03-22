
    import Accordion from 'react-bootstrap/Accordion';
    import { StyledDiv , Heading,
      StyledInput,
      DataButton,
      CheckBox,} from '../../../../Header/styles';
    
function Accordian({pages}) {

  return (
    <Accordion className='my-accordion' style={{background:"white"}}>
   {pages.map((item,ind)=>{
return(
<>
  <Accordion.Item eventKey="0">
        <Accordion.Header style={{color:"lightgrey !important"}}>General</Accordion.Header>
        <Accordion.Body >
        <StyledDiv PD="30px">
        <Heading TC="grey" FS="15px" FBC="white" C="white">
       Name
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
          value={!item.title?item.name:item.title}
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Description
        </Heading>
        <span></span>
        <StyledInput
          WD="100%"
          HG="40px"
          value={!item.description?"desciption":item.description}
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
      
        <Heading TC="grey" FS="15px">
          Editable or Read-only
        </Heading>
        <styledDiv DP="flex">
          <DataButton>Editable</DataButton>
          <DataButton>Read-only</DataButton>
        </styledDiv>
        <Heading TC="grey" FS="15px">
          Cookie name
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Width mode
        </Heading>
        <StyledDiv DP="flex">
          <DataButton>Auto</DataButton>
          <DataButton>Static</DataButton>
          <DataButton>Responsive</DataButton>
        </StyledDiv>
        <Heading TC="grey" FS="15px">
          Width(in css-accepted values)
        </Heading>
        <StyledInput></StyledInput>
      </StyledDiv>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Logo in Survey Title</Accordion.Header>
        <Accordion.Body>
        <StyledDiv PD="30px">
        <Heading TC="grey" FS="15px">
          Logo(URL or base64-encoded string)
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Logo width(in CSS-accepted values)
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Logo height(in CSS-accepted values)
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Logo fit
        </Heading>
        <StyledDiv DP="flex">
          <DataButton>None</DataButton>
          <DataButton>Contain</DataButton>
          <DataButton>Cover</DataButton>
          <DataButton>Fill</DataButton>
        </StyledDiv>
      </StyledDiv>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Navigation</Accordion.Header>
        <Accordion.Body>
        <StyledDiv PD="30px">
        <Heading TC="grey" FS="15px">
          Preview answer before submitting the survey
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Previous Page button text
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Next Page button text
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Complete Survey button text
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Preview Answers button text
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Edit Answers button text
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Start Survey button text
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Navigation buttons Location
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <StyledDiv DP="block">
          <CheckBox type="checkbox"></CheckBox>
          <CheckBox type="checkbox"></CheckBox>
          <CheckBox type="checkbox"></CheckBox>
        </StyledDiv>
        <Heading TC="grey" FS="15px">
          Progress Bar Location
        </Heading>
        <StyledDiv DP="flex">
          <DataButton>Hidden</DataButton>
          <DataButton>Top</DataButton>
          <DataButton>Bottom</DataButton>
          <DataButton>Both</DataButton>
        </StyledDiv>
        <Heading TC="grey" FS="15px">
          Progress Bar type
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Survey structure
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
      </StyledDiv>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Question</Accordion.Header>
        <Accordion.Body>
        <StyledDiv PD="30px">
        <Heading TC="grey" FS="15px">
          Question Title Location
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          {" "}
          Question Description Location
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Question numbering
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Question Title Pattern
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Required Symbol(s)
        </Heading>
        <StyledInput
          WD="100%"
          HG="40px"
          BD="1px solid lightgrey"
          OT="none"
          FBD="3px solid rgb(25, 179, 148)"
        ></StyledInput>
        <Heading TC="grey" FS="15px">
          Start index(number or letter)
        </Heading>
        <StyledInput></StyledInput>
        <Heading TC="grey" FS="15px">
          Error message Location
        </Heading>
        <StyledDiv DP="flex">
          <DataButton>Top</DataButton>
          <DataButton>Bottom</DataButton>
        </StyledDiv>
        <Heading TC="grey" FS="15px">
          Required Symbol(s)
        </Heading>
        <StyledInput></StyledInput>
        <StyledDiv DP="flex">
          <CheckBox type="checkbox" DP="flex"></CheckBox>
          <Heading TC="grey" FS="15px">
            Focus first Question on new page
          </Heading>
        </StyledDiv>

        <Heading TC="grey" FS="15px">
          Element order on the page{" "}
        </Heading>
        <StyledDiv>
          <DataButton>initial </DataButton>
          <DataButton>Random</DataButton>
        </StyledDiv>
        <Heading TC="grey" FS="15px">
          maximum answer length (in characters){" "}
        </Heading>
        <StyledInput></StyledInput>
        <Heading TC="grey" FS="15px">
          {" "}
          maximum comment length(in characters)
        </Heading>
        <StyledInput></StyledInput>

        <StyledDiv DP="flex">
          <CheckBox type="checkbox" DP="flex"></CheckBox>
          <Heading TC="grey" FS="15px">
            Auto expand comment area if necessary
          </Heading>
        </StyledDiv>
      </StyledDiv>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Pages</Accordion.Header>
        <Accordion.Body>
        <StyledDiv PD="30px">
        <Heading TC="grey">page 1</Heading>
        <StyledInput></StyledInput>
        <Heading TC="grey">page 2</Heading>
        <StyledInput></StyledInput>
        <StyledDiv DP="flex">
          <CheckBox type="checkbox" DP="flex"></CheckBox>
          <Heading TC="grey" FS="15px">
            show Pages titles
          </Heading>
        </StyledDiv>
        <StyledDiv DP="flex">
          <CheckBox type="checkbox" DP="flex"></CheckBox>
          <Heading TC="grey" FS="15px">
            Show Pages Number
          </Heading>
        </StyledDiv>
      </StyledDiv>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Logic</Accordion.Header>
        <Accordion.Body>
        <Heading TC="grey" FS="15px">
          Heading
        </Heading>
        <StyledInput></StyledInput>
        <Heading TC="grey" FS="15px">
          Description
        </Heading>
        <StyledInput></StyledInput>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Data</Accordion.Header>
        <Accordion.Body>
        <StyledDiv PD="30px">
        <Heading>CLear invisible values</Heading>
        <StyledInput></StyledInput>
        <Heading>Update text Question value</Heading>
        <DataButton>on blur</DataButton>
        <DataButton> while typing</DataButton>
        <StyledDiv>
          <CheckBox type="checkbox"></CheckBox>
          <Heading>save partial survey results in progress</Heading>
        </StyledDiv>
        <StyledDiv>
          <CheckBox type="checkbox"></CheckBox>
          <Heading>save partial survey results in progress</Heading>
        </StyledDiv>
      </StyledDiv>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Validation</Accordion.Header>
        <Accordion.Body>
        <StyledDiv PD="30px">
        <StyledDiv>
          <CheckBox type="checkbox"></CheckBox>
          <Heading>set focus on the first invalid answer</Heading>
        </StyledDiv>
        <Heading>run validation</Heading>

        <StyledInput></StyledInput>
      </StyledDiv>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>SurveyComplete</Accordion.Header>
        <Accordion.Body>
        <StyledDiv PD="30px">
        <Heading>Navigate to URL</Heading>
        <StyledInput></StyledInput>
        <Heading>Survey Complete Page markup </Heading>
        <StyledInput></StyledInput>
        <Heading>Dynamic URL </Heading>
        <StyledInput></StyledInput>
        <Heading>Dynamic Survey Complete Page markup</Heading>
        <StyledInput></StyledInput>
        <Heading>
          Markup to show if the user already filled out his survey{" "}
        </Heading>
        <StyledInput></StyledInput>
      </StyledDiv>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9">
        <Accordion.Header>Timer/Quiz</Accordion.Header>
        <Accordion.Body>
        <StyledDiv PD="30px">
        <Heading>Time Limit to finish the survey(in seconds )</Heading>
        <StyledInput></StyledInput>
        <Heading>Time Limit to finish one page</Heading>
        <StyledInput></StyledInput>
        <Heading>Time Location</Heading>
        <StyledDiv DP="flex">
          <DataButton>Hidden</DataButton>
          <DataButton>Top</DataButton>
          <DataButton>Bottom</DataButton>
        </StyledDiv>
        <Heading>Time mode</Heading>
        <StyledDiv DP="flex">
          <DataButton>Both</DataButton>
          <DataButton>Page</DataButton>
          <DataButton>Survey</DataButton>
        </StyledDiv>
      </StyledDiv>
        </Accordion.Body>
      </Accordion.Item>
      </>
   )
  })} 
    </Accordion>
  );
}


export default Accordian
