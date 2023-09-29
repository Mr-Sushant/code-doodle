import React from 'react'
import CodeEditor from './CodeEditor';
import { Box, styled } from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';


const StyledBox = styled(Box)`
  display:flex;
  background-color: #060606;
  height: 43vh;
`;

const Code = () => {
  const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);
  return (
    <StyledBox>
      <CodeEditor heading="html" icon="/" color="#FF3C41" value={html} onChange={setHtml} />
      <CodeEditor heading="css" icon="*" color="#0EBEFF" value={css} onChange={setCss} />
      <CodeEditor heading="javascript" icon="()" color="#FCD000" value={js} onChange={setJs} />
    </StyledBox>
  )
}

export default Code
