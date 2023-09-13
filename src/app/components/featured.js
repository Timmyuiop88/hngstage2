
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
} from "@chakra-ui/react";
import { AiFillPlayCircle } from "react-icons/ai";
import Movie from "./movie";
import axios from "axios";
import { useState, useEffect } from "react";
const client = 'https://api.themoviedb.org/3/movie/popular?api_key=eb2d7051638f3d401df1794b8cdac12d&language=en-US&page=1?limit=10'

const options = {
  method: 'GET',
  per_page: 10,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eb2d7051638f3d401df1794b8cdac12d'
  }
};
export default function Featured(){
  const [movies, setMovies] = useState([]);

  useEffect(() => {
     axios.get(client,options,{
      params: {
        sort_by: 'popularity.desc',
        page: 1,
      }
    }).then((response) => {
      setMovies(response.data.results.slice(0, 10));
      console.log(response.data.results)
     });
  }, []);

  const result =  movies.map((movie) => {
    return (
      <Movie name={movie.title} date={movie.release_date} poster={movie.poster_path}/>

    )

    

     ;
   })

    return(
        <>
        <Box
        px={'10%'}
        w={'full'}
        h={'auto'}

        >
            <Stack
              mt={'70px'}
              mb={'60px'} 
         direction={['column','column','row','row']}
            w={'full'}
            justifyContent={'space-between'}
            display={'flex'}
            >
                <Text
              
                fontSize={'36px'}
                fontWeight={'700'}
                >
                Featured Movie
                </Text>


<Box
 display={'Block'}
  alignItems={'center'}
>
<Text

color={'#BE123C'}
 fontSize={'18px'}
 fontWeight={'400'}>
See more
                </Text>
</Box>
          
            </Stack>

            <SimpleGrid   justifyContent={'space-between'} w={'full'} minChildWidth='250px' spacing='10px' >
           

       {result}
       
        
</SimpleGrid>
        </Box>
        </>
    )
}