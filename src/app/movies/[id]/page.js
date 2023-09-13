
import Image from "next/image"
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

import { AiOutlineUnorderedList } from "react-icons/ai";

import { GiTicket } from "react-icons/gi";
import { BsFillPlayFill } from "react-icons/bs"

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
}
// access movie id from param nd fetch data 

export default async function MoviePage({params}) {
  

  const movieId = params.id;

  const movie = await getMovie(movieId);
  const img =     `https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path }`
  return (

<>
<Box width={'full'} 
        h={'auto'}
        
        bg={'white'}>
<Stack direction={'row'}>
    <Hide below="lg">
    <Box
    
    width={'15%'} 
    h={'auto'}
    
    bg={'white'}
borderRadius={'0px 45px 45px 0px;'}
border={'1px solid rgba(0, 0, 0, 0.30)'}
    >

<Stack
m={'auto'}
direction={'column'}
w={'full'}
py={'50'}
spacing={'50'}
px={'5'}
>
<Box
    m={'auto'}
    width={'full'}
    h={'50px'}
    display={"flex"}
    justifyContent={"space-around"}
    alignItems={"center"}

    >
  <Image src={"/tv.png"} alt="logo" height={"50"} width={"50"} />

<Text fontWeight={"700"} fontSize={"24px"} color={"black"}>
  MovieBox
</Text>
    </Box>
    <Box
    m={'auto'}
    width={'full'}
    h={'50px'}
    display={"flex"}
    justifyContent={"space-around"}
    alignItems={"center"}
p={'5'}
    >
  <Image src={"/Home.png"} alt="logo" height={"25"} width={"25"} />

<Text  fontWeight={"600"} fontSize={"20px"} color={"#666"}>
  MovieBox
</Text>
    </Box>
    <Box
    m={'auto'}
    width={'full'}
    h={'50px'}
    display={"flex"}
    justifyContent={"space-around"}
    alignItems={"center"}
p={'5'}
    >
  <Image src={"/movies.png"} alt="logo" height={"25"} width={"25"} />

<Text  fontWeight={"600"} fontSize={"20px"} color={"#666"}>
  Movies
</Text>
    </Box>
    <Box
    m={'auto'}
    width={'full'}
    h={'50px'}
    display={"flex"}
    justifyContent={"space-around"}
    alignItems={"center"}
p={'5'}
    >
  <Image src={"/tvshow.png"} alt="logo" height={"25"} width={"25"} />

<Text  fontWeight={"600"} fontSize={"20px"} color={"#666"}>
TV Series
</Text>
    </Box>
    <Box
    m={'auto'}
    width={'full'}
    h={'50px'}
    display={"flex"}
    justifyContent={"space-around"}
    alignItems={"center"}
p={'5'}
    >
  <Image src={"/cal.png"} alt="logo" height={"25"} width={"25"} />

<Text  fontWeight={"600"} fontSize={"20px"} color={"#666"}>
Upcoming
</Text>
    </Box>
</Stack>
<Box
px={'10%'}
pt={'42px'}
w={'90%'}
h={'210px'}
m={'auto'}
bg={'rgba(248, 231, 235, 0.40)'}
borderRadius={'20px'}
border={'1px solid rgba(190, 18, 60, 0.70)'}
>
<Text
fontSize={'20px'}
fontWeight={'600'}
color={'rgba(51, 51, 51, 0.80)'}
>
Play movie quizes
and earn
free tickets
</Text>
<Text
color={'#666'}
fontSize={'15px'}
fontWeight={'500'}
>
50k people are playing
now
</Text>
</Box>
<Stack
m={'auto'}
direction={'column'}
w={'full'}
py={'50'}
spacing={'50'}
px={'5'}
>
<Box
    m={'auto'}
    width={'full'}
    h={'50px'}
    display={"flex"}
    justifyContent={"space-around"}
    alignItems={"center"}
p={'5'}
    >
  <Image src={"/Logout.png"} alt="logo" height={"25"} width={"25"} />

<Text  fontWeight={"600"} fontSize={"20px"} color={"#666"}>
Logout
</Text>
    </Box>


</Stack>

    </Box>
    </Hide>
   
    <Box
    
    width={['100%','100%','100%','85%']} 
    h={'auto'}
    
    bg={'white'}
    py={'5'}
    >
<Center
borderRadius={'20px'}
  m={'auto'}
  width={'95%'}
  h={'450px'}
  
  bgImage={`url('${img}')`}
bgPosition="50% 50%"
bgRepeat="no-repeat"
bgSize={'cover'}
position={'relative'}
  
>
    <Button borderRadius={'50%'} border={'1px solid #999'} h={100} backdropFilter={'blur(5px)'} bg={'transparent'}><BsFillPlayFill color="white" fontSize={'80px'}/></Button>

</Center>

<Stack
m={'auto'}
direction={['column','column','row','row']}
w={'full'}
py={'50'}
spacing={'50'}
px={'5'}
>
    <Box
     m={'auto'}
     width={['100%','100%','70%','70%']}
     h={'auto'}
     
    
    >

        <Stack
        direction={'row'}
        maxW={'3xl'}
        w={'100%'}
        h={'50px'}
        bg={'white'}
        alignItems={'center'}
        >
<Heading
fontSize={'23px'}
fontWeight={'700'}
color={'#404040'}
display={'flex'}
data-testid="movie-title"
>
{movie.title || movie.name}
 • 
 </Heading>
 <Text
 data-testid="movie-release-date"
 >
 {movie.release_date}
 </Text>


 • 
PG-13
 • 
 <Text 
 data-testid="movie-runtime"
 
>
 {movie.runtime}
 </Text>


<Button
bg={'#F8E7EB'}
h={'35px'}
w={'85px'}
borderRadius={'25px'}
border={'1px solid #BE123C'}
color={'#B91C1C'}

>Action</Button>
<Button
bg={'#F8E7EB'}
h={'35px'}
w={'85px'}
borderRadius={'25px'}
border={'1px solid #BE123C'}
color={'#B91C1C'}
>Drama</Button>

        </Stack>

<Text
data-testid="movie-overview"
fontSize={'20px'}
fontWeight={'400'}
color={'#333'}
mt={'5'}
>
{movie.overview}  
</Text>
<Text
w={'full'}
fontSize={'20px'}
fontWeight={'400'}
color={'#333'}
display={'flex'}
mt={'10'}
>
Director : <Text color={'#BE123C'}>Joseph Kosinski</Text>
</Text>
<Text
fontSize={'20px'}
fontWeight={'400'}
color={'#333'}
display={'flex'}
mt={'10'}
>
Writers : <Text color={'#BE123C'}> Jim Cash, Jack Epps Jr,  Peter Craig</Text>
</Text>
<Text
fontSize={'20px'}
fontWeight={'400'}
color={'#333'}
display={'flex'}
my={'10'}
>
Stars
: <Text color={'#BE123C'}> Tom Cruise, Jennifer Connelly, Miles Teller</Text>
</Text>

<Box
  border={'1px solid #999'}
w={'100%'}
display={'flex'}
m={'auto'}
bg={'#BE123C'}
borderRadius={'10px'}
 alignItems={'center'}h={'55px'}
>

    <Box
    w={'50%'}
    h={'auto'}
    bg={'#BE123C'}
    borderRadius={'10px'}
  
px={'20px'}
    >
     <Text
     color={'white'}
     fontSize={'20px'}

fontWeight={'500'}     m={'auto'}
     >
        Top rated movie #65
        </Text>

    </Box>
    <Box
    borderTop={'1px solid #999'}
    borderBottom={'1px solid #999'}
        borderRadius={'10px'}
    py={'12px'}
    px={'5'}
    w={'full'}
    h={'f'}
    bg={'#fff'}
    alignItems={'center'}
    >
        <Text
          color={'#333'}
          fontSize={'20px'}
     
     fontWeight={'500'}     m={'auto'}
        >
        Awards
 9 nominations
        </Text>

    </Box>
</Box>
    </Box>
    <Box
     m={'auto'}
     width={['100%','100%','30%','30%']}
     h={'450px'}
     
     
    >
<Button
mt={'10'}
bg={'#BE123C'}
h={'55px'}
w={'full'}
borderRadius={'10px'}
border={'1px solid #BE123C'}
color={'white'}
textShadow={'0px 2px 4px rgba(0, 0, 0, 0.20)'}
leftIcon={<GiTicket/>}
>See Showtimes</Button>

<Button
mt={'5'}
bg={'rgba(190, 18, 60, 0.10)'}
h={'55px'}
w={'full'}
borderRadius={'10px'}
border={'1px solid #BE123C'}
color={'#333'}
textShadow={'0px 2px 4px rgba(0, 0, 0, 0.20)'}
leftIcon={<AiOutlineUnorderedList/>}
>More watch options</Button>
<Box
borderRadius={'10px'}
pt={'180px'}
mt={'10'}
w={'full'}
bgImage="url('/rect.png')"
bgPosition="50% 50%"
bgRepeat="no-repeat"
bgSize={'cover'}
position={'relative'}
h={'230px'}
display={'block'}
justifyContent={"end"}
>
    <Box
  display={'flex'}
  justifyContent={'space-evenly'}
  alignItems='center'
    color={'white'}
    borderRadius={'10px'}
    w={'full'}
    h={'50px'}
    bg={'rgba(18, 18, 18, 0.50)'}
    backdropFilter={'blur(2px)'}
    
    ><AiOutlineUnorderedList/>
       <Text
       
       color={'#E8E8E8'}
          fontSize={'14px'}
     
     fontWeight={'500'}   
       >
        
       The Best Movies and Shows in September
        </Text> 

    </Box>

</Box>
    </Box>

</Stack>
    </Box>
</Stack>
        </Box>
</>

    
  )
}