import React from 'react'

import { 
    Center,
    Flex,
    Link,
 } from '@chakra-ui/react'

import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { LuFileSpreadsheet } from "react-icons/lu";

function Footer() {
  return (
    <Center w="100vw" h={16} position="absolute" bottom="0" hideBelow={"md"}>
        <Flex gap={12}>
            <Link
            href='https://www.linkedin.com/in/stephen-ajao-413423194/'
            className='contact-links'
            target="_blank"
            fontSize="1rem"><CiLinkedin/>LinkedIn</Link>

            <Link
            href='https://www.instagram.com/stefanu_ajao/'
            className='contact-links'
            target="_blank"
            fontSize="1rem"><FaInstagram/>Instagram</Link>

            <Link href='https://github.com/stefanu_aj'
            className='contact-links'
            target="_blank"
            fontSize="1rem"><LuGithub/> GitHub</Link>
            <Link href='#' className='contact-links' fontSize="1rem"><LuFileSpreadsheet/>Resume</Link>
        </Flex>        
    </Center>
  )
}

export default Footer