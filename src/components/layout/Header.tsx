import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Flex,
  Heading,
  IconButton,
  Text,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

import Link from "next/link";
import { FaHamburger } from "react-icons/fa";

import ThemeToggle from "./ThemeToggle";
import { useRef, useEffect, useState } from "react";
import { LinkWrapper, useLinkColor } from "components/my-chakra";
import Footer from "./Footer";
import { getCSWordOfDay, WikiEntry } from "cs-wiki";

const shadowProps = {
  boxShadow: "lg",
  // outline: "2px solid transparent"
}

const commonHeaderProps = {

}

const MeritHeading = (props: { isMobile: boolean }) => (
  <Heading as="h1" size="lg" textTransform="lowercase">
    <Link href="/">{props.isMobile ? <>Merit Academy Tech</> : <>Merit Academy Technology</>}</Link>
  </Heading>
)

const Nav = (props: { isMobile: boolean }) => {
  const [word, setWord] = useState<WikiEntry>();
  const [readMore, setReadMore] = useState<boolean>();

  useEffect(() => {
    const word = getCSWordOfDay()
    setWord(word)
    setReadMore(word.definitions.join().length <= 200)
  }, [])

  return (
    <Box>
      <Heading as="h2" size="md" marginY={4}>Navigation</Heading>
      <Flex
        as="nav"
        align="left"
        direction="column"
        fontSize="lg"
      >
        <LinkWrapper>
          <Link href="/">Home</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="/projects">Projects</Link>
        </LinkWrapper>
        <LinkWrapper>
          <a href="https://cs.meritacademy.tech">Courses</a>
        </LinkWrapper>
        <LinkWrapper>
          <a href="https://learn.meritacademy.tech">Learn CS</a>
        </LinkWrapper>
      </Flex>
      <Heading as="h2" size="md" marginY={4}>External Links</Heading>
      <Flex
        as="nav"
        align="left"
        direction="column"
        fontSize="lg"
      >
        <LinkWrapper>
          <a href="https://meritacademy.instructure.com">Canvas</a>
        </LinkWrapper>
        <LinkWrapper>
          <a
            href="https://meritprepacademy.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Merit Academy Home
          </a>
        </LinkWrapper>
      </Flex>
      <Heading as="h2" size="md" marginY={4}>Word of the Day</Heading>
      {word && <>
        <Text fontWeight="semibold" mb={2}>{word.term}</Text>
        {!readMore && word.definitions.join().length > 200 ? <>
          <Box position="relative" fontSize="sm" height="calc(1.5em * 5)" overflowY="hidden" _after={{ padding: "0 0.125em", content: '"..."', position: "absolute", bottom: 0, right: 0, background: useColorModeValue("white", "blue.900") }}>
            {word.definitions?.map((meaning, i) =>
              <Text fontSize="sm" mb={i === word.definitions.length - 1 ? 4 : 2}>{meaning}</Text>
            )}
          </Box>
          <Button onClick={() => setReadMore(true)} variant="link" color={useLinkColor()} fontWeight="medium">Read More &gt;</Button>
        </> :
          word.definitions?.map((meaning, i) =>
            <Text fontSize="sm" mb={i === word.definitions.length - 1 ? 4 : 2}>{meaning}</Text>
          )}
      </>}
    </Box>
  );
}

const DesktopHeader = () => (
  <>
    <Box as="header" flex={0} paddingInline={6} paddingY={4} borderBottomWidth="1px" background={useColorModeValue("white", "blue.900")} zIndex={100} position="fixed" top="0" width="full">
      <Flex justify="space-between" align="center">
        <MeritHeading isMobile={false} />
        <ThemeToggle />
      </Flex>
    </Box>
    <Box display="block" paddingX={6} paddingY={2} flex={1} overflow="auto" width="xs" borderRightWidth="1px" height="100%" maxHeight="calc(100vh - 73px)" {...shadowProps} background={useColorModeValue("white", "blue.900")} zIndex={100} position="fixed" top="73px">
      <Nav isMobile={false} />
    </Box>
  </>
)

const MobileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Flex as="header" justify="space-between" align="center" paddingInline={6} paddingY={4} borderBottomWidth="1px" background={useColorModeValue("white", "blue.900")} zIndex={100} position="fixed" top="0" width="full">
      <MeritHeading isMobile={true} />
      <Box marginLeft="auto">
        <IconButton
          ml="1.5"
          aria-label="Menu"
          borderRadius="full"
          icon={<FaHamburger />}
          ref={btnRef}
          onClick={onOpen}
        />
        <Drawer
          placement="left"
          onClose={onClose}
          isOpen={isOpen}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody display="flex" flexDirection="column" justifyContent="space-between">
              <Nav isMobile={true} />
              <Flex justify="space-between" width="full" mb={2}>
                <Footer isMobile={true} />
                <ThemeToggle />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex >
  )
}

const Header = (props: { isMobile: boolean }) => (
  props.isMobile ? <DesktopHeader /> : <MobileHeader />
);

export default Header;

