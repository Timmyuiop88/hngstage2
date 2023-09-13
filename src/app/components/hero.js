"use client";
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
  SimpleGrid,
  Spinner
} from "@chakra-ui/react";
import { AiFillPlayCircle } from "react-icons/ai";
import Nav from "./nav";
import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "./movie";

export default function Hero(){
 const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    // Perform search logic using the query and update setSearchResults with the results
    // ...
    setLoading(true);
    // Update the searchQuery state
    setSearchQuery(query);
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: 'eb2d7051638f3d401df1794b8cdac12d', // Replace with your own API key
        query: query,
      }
    })
    .then((response) => {
      setSearchResults(response.data.results);
    })
    .catch((error) => {
      console.error('Error fetching search results:', error);
    })
    .finally(() => {
      setLoading(false); // Set loading to false when request is complete (whether successful or not)
    });
    // Update the searchResults state with the search results
    // Example: setSearchResults([...]); // Replace with actual search results
  };
  
  const result =  searchResults.map((movie) => {
    return (
      <Movie name={movie.title} date={movie.release_date} poster={movie.poster_path}/>

    )

    

     ;
   })

    return(
<Box
w={"full"}
h={"auto"}
pb={'150px'}

bgImage="url('/poster.png')"
bgPosition="50% 50%"
bgRepeat="no-repeat"
bgSize={'cover'}
position={'relative'}

>
<Nav onSearch={handleSearch} />
<Box
w={'full'}

display={'flex'}
>


{loading ? (
  <Spinner  color='red.500' />
) : (
  searchQuery ? (
    searchResults.length > 0 ? (
      <Stack
w={'full'}
direction={'row'}
display={'flex'}
mx={'10%'}
mt={'10%'}
>

<SimpleGrid   justifyContent={'space-between'} w={'full'} minChildWidth='250px' spacing='10px' >
           

           {result}
           
            
    </SimpleGrid>
  </Stack>
    ) : (
      <div>
        <h2>No Results Found</h2>
      </div>
    )
  ) : (
    <Box
    alignItems={'center'}
    justifyContent={'space-between'}
    display={'flex'}
    m={"auto"}
    mt={'95px'}
    mb={'150px'}
    w={"full"}
    maxW={"8xl"}
    h={"auto"}
    
    px={"10px"}
    >
    <Box maxW={"400px"} h={"full"} w={"full"} >
    <Heading color={"white"} fontWeight={"700"} fontSize={"48px"}>
    John Wick 3 : Parabellum
    </Heading>
    <Box
    w={"full"}
    maxW={"200px"}
    h={"30px"}
    mt={"19px"}
    display={"flex"}
    justifyContent={"space-between"}
    >
    <Box alignItems={"center"} display={"flex"}>
      <Image
        src={"/imdb.png"}
        alt="logo"
        height={"17"}
        width={"35"}
      />
      <Text
        fontSize={"12px"}
        fontWeight={"400"}
        color={"white"}
        ml={"10px"}
      >
        86.0 / 100
      </Text>
    </Box>
    <Box alignItems={"center"} display={"flex"}>
      <Image src={"/tom.png"} alt="logo" height={"17"} width={"16"} />
      <Text
        fontSize={"12px"}
        fontWeight={"400"}
        color={"white"}
        ml={"10px"}
      >
        97%
      </Text>
    </Box>
    </Box>
    
    <Text
    mt={"19px"}
    fontSize={"14px"}
    fontWeight={"500"}
    lineHeight={"18px"}
    color={"white"}
    w={"300px"}
    >
    John Wick is on the run after killing a member of the
    international assassins' guild, and with a $14 million price tag
    on his head, he is the target of hit men and women everywhere.
    </Text>
    <Button
    mt={"19px"}
    w={"170px"}
    h={"35px"}
    leftIcon={<AiFillPlayCircle />}
    bg={"#BE123C"}
    color={"white"}
    variant="solid"
    >
    WATCH TRAILER
    </Button>
    </Box>
    <Box
    w={'10px'}
    h={'auto'}
    >
    <Text
    color={'#9CA3AF'}
    >
    12345
    </Text>
    
    </Box>
    </Box>
  )
)}
</Box>
</Box>
    )
}

