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
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  CheckIcon,
  IconButton,
  SearchIcon
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import Search from "./search";
export default function Nav({ onSearch }){
    return(
        <>
             <Box w={"full"} h={"80px"}>
          <Stack
            direction={"row"}
            m={"auto"}
            px={'10px'}
            maxW={"8xl"}
            w={"full"}
            h={"full"}
            alignItems={"center"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box
              h={"50px"}
              w={"180px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Image src={"/tv.png"} alt="logo" height={"50"} width={"50"} />

              <Text fontWeight={"700"} fontSize={"24px"} color={"white"}>
                MovieBox
              </Text>
            </Box>
            <Show above="lg">
             

<Search onSearch={onSearch}/>
             
            </Show>

            <Box
              h={"50px"}
              w={"120px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text fontWeight={"700"} fontSize={"16px"} color={"white"}>
                Sign in
              </Text>
              <Center h={"50px"} w={"50px"} borderRadius={"50%"} bg={"#de2748"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="28"
                  viewBox="0 0 27 28"
                  fill="none"
                >
                  <path
                    d="M3.375 8.375H23.625"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3.375 14H23.625"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3.375 19.625H23.625"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Center>
            </Box>
          </Stack>
          <Show below="lg">
      <Search onSearch={onSearch}/>
            </Show>
        </Box>
        </>
    )
}