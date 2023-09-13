import Image from "next/image";
import {
  Box,
  Stack,
  Text,
  Show,
  Center,
  Hide,
  Heading,
  HStack,
  Button,
  ButtonGroup,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  CheckIcon,
  IconButton,
  SearchIcon
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
export default function Search({onSearch}){
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
      setQuery(e.target.value);
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(query);
    };
    return(
        <>
         <Box h={"50px"} maxW={'650px'} w={'full'} >

         <form onSubmit={handleSearch}>
<InputGroup>

<Input 

type="text"
value={query}
onChange={handleInputChange}
color={'white'} placeholder='What do you want to watch?' />
<InputRightElement>
<IconButton
 type="submit"
bg={'none'}
aria-label='Search database'
icon={<AiOutlineSearch color="white"/>}
/>
</InputRightElement>
</InputGroup>
</form>
</Box>
        </>
    )
}