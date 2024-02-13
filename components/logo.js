import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import FootprintIcon from './icons/footprint'
import styled from '@emotion/styled';

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`

// const Logo = () => {
//     return (
//       (<Link href="/" scroll={false}>
  
//         <LogoBox>
//           <FootprintIcon />
//           <Text
//             color={useColorModeValue('gray.800', 'whiteAlpha.900')}
//             fontFamily='M PLUS Rounded 1c", sans-serif'
//             fontWeight="bold"
//             ml={3}
//           >
//             Takuya Matsuyama
//           </Text>
//         </LogoBox>
  
//       </Link>)
//     );
//   }


const Logo = () => {
//   const footPrintImg = `/icons/footprint${useColorModeValue('', '-dark')}.png`
    // const footPrintImg = `/icons/Money-Bag-Emoji.png`
    const footPrintImg = `/images/Money-Bag-Emoji.png`

    return (
        <Link href="/">
            <LogoBox>
                <Image src={footPrintImg} width={20} height={20} alt="logo" />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}a
                    fontFamily="M PLUS Rounded 1c"
                    fontWeight="bold"
                    ml={3}
                >
                    Yifan Wang
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo;