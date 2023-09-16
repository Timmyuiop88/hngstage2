
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
  IconButton
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";

export default function Movie(props){
  const [btnClass, setBtnClass] = useState(false);
  const [btnColor, setBtnColor] = useState("white");

    const img = `https://image.tmdb.org/t/p/w500/${props.poster}`
return(
    <>
       <Box
    bg={'white'}p={'5'}
    borderRadius={'20px'}
       m={'auto'}
            w={'250px'}
            h={'auto'}

            data-testid="movie-card"
            
            >
                <Box
                w={'full'}
                h={'auto'}
  
                >
                  <Image      data-testid="movie-poster" src={img} height={'350'}width={'250'} alt="poster image"/>

                </Box>
                <Text
                 data-testid="movie-release-date"
                mt={'12px'}
                color={'#9CA3AF'}
                fontSize={'12px'}
                fontWeight={'700'}
                >
            {props.date}
                </Text>
                <Text
                  data-testid="movie-title"
                    mt={'12px'}
                color={'#111827'}
                fontSize={'18px'}
                fontWeight={'700'}
                >
         {props.name}
                </Text>
                <Box
                    mt={'12px'}
      w={"full"}
      maxW={"200px"}
      h={"30px"}
   
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Box alignItems={"center"} display={"flex"}>
        <Box 
  left={'150'}
        bottom={'350px'}
      
        position={'relative'}
        h={'50'}
        width={'50px'}
 
zIndex={99}>
<IconButton
 w={'50px'}
 h={'50px'}
 fontSize={'50px'}
 color={'white'}
  isRound={true}
  variant='solid'
bg={'rgba(243, 244, 246, 0.50)'}
  aria-label='Done'

  icon={<AiFillHeart color={btnColor}   fontSize='20px' />}
  onClick={()=> setBtnColor('red')} 
/>
        
         

        </Box>
        <Image
       data-testid="movie-poster"
          src={"/imdb.png"}
          alt="Movie Poster"
          height={"17"}
          width={"35"}
        />
        <Text
          fontSize={"12px"}
          fontWeight={"400"}
          color={"#111827"}
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
          color={"#111827"}
          ml={"10px"}
        >
          97%
        </Text>
      </Box>
    </Box>
    <Text
        mt={'12px'}
                color={'#9CA3AF'}
                fontSize={'12px'}
                fontWeight={'700'}
                >
               Action, Adventure, Horror
                </Text>
            </Box>
    </>
)
}