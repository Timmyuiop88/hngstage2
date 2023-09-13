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
  import { AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram,AiFillYoutube } from "react-icons/ai";
  
export default function Footer(){
    return(
        <>
        <Box
        w={'full'}
        h={'300px'}

        
        >
            <Center
         
            m={'auto'}
            w={'full'}
            h={'100px'}
            
            >
                <Stack
                direction={'row'}
            fontSize={'30px'}
            color={'#111827'}
            mt={'100px'}
            spacing={'20px'}
                >
<AiFillFacebook/>
<AiOutlineInstagram/>
<AiOutlineTwitter/>
<AiFillYoutube/>
                </Stack>
             
            </Center>
            <Center>
            <Stack
                direction={'row'}
            fontSize={'18px'}
            color={'#111827'}
            mt={'100px'}
            spacing={'20px'}
                >
<Text>
Conditions of Use
</Text>
<Text>
Privacy & Policy
</Text>
<Text>
Press Room
</Text>
                </Stack>
            </Center>
            <Center
              fontSize={'18px'}
              color={'#6B7280'}
              mt={'50px'}
             pb={50}
             
            >
                <Text>
                © 2021 MovieBox by Timilehin Adedara
                </Text>
            </Center>

        </Box>
        </>
    )
}