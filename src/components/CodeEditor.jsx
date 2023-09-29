import React from 'react'
import { Box, styled } from '@mui/material';
import Editor from '@monaco-editor/react';

const StyledBox = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
    
`;

const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #AAAEBC;
    justify-content: space-between;
    font-weight: 700;
    padding:0 4px 4px;
`;

const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;

`;

const CodeEditor = ({heading, icon, color, value, onChange, defaultValue}) => {
  //const classes = useStyles();
  const handleChange = (value, event) => {
    onChange(value);
  };

  return (
    <Container>
      <Header>
        <StyledBox>
            <Box component="span"
                style={{
                    background: color,
                    height: 20,
                    width: 20,
                    display: "flex",
                    placeContent: "center",
                    borderRadius: 5,
                    marginRight: 5,
                    paddingBottom: 2,
                    color: "#000"
                }}
            >
                {icon}
            </Box>
            {heading}
        </StyledBox>
      </Header>
      <Editor theme='vs-dark' height="340px" language={heading} value={value} onChange={handleChange} />
    </Container>
  )
}

export default CodeEditor;
