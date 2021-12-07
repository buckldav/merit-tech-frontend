import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Flex,
  Heading,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaHamburger } from "react-icons/fa";

import ThemeToggle from "./ThemeToggle";
import { useRef } from "react";
import { useWindowSize } from "hooks";
import { LinkWrapper } from "components/my-chakra";

const Nav = (props: { isMobile: boolean }) => (
  <Flex
    as="nav"
    width="full"
    align={props.isMobile ? "left" : "center"}
    direction={props.isMobile ? "column" : "row"}
    mt={props.isMobile ? "initial" : "2"}
    fontSize="lg"
  >
    <LinkWrapper
      pr={props.isMobile ? "initial" : "5"}
    >
      <Link href="/">Home</Link>
    </LinkWrapper>
    <LinkWrapper
      pr={props.isMobile ? "initial" : "5"}
    >
      <Link href="/projects">Projects</Link>
    </LinkWrapper>
    <LinkWrapper
      pr={props.isMobile ? "initial" : "5"}
    >
      <a href="https://cs.meritacademy.tech">Courses</a>
    </LinkWrapper>
    <LinkWrapper
      pr={props.isMobile ? "initial" : "5"}
    >
      <a href="https://learn.meritacademy.tech">Learn CS</a>
    </LinkWrapper>
  </Flex>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Flex as="header" width="full" align="center">
        <Heading as="h1" size="lg" textTransform="lowercase">
          <Link href="/">Merit Academy Tech</Link>
        </Heading>

        <Box marginLeft="auto">
          {(useWindowSize().width as number) > 800 ? (
            <ThemeToggle />
          ) : (
            <>
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
                  <DrawerHeader borderBottomWidth="1px">
                    <Flex justify="space-between" align="center">
                      Menu
                      <ThemeToggle />
                    </Flex>
                  </DrawerHeader>
                  <DrawerBody>
                    <Nav isMobile={true} />
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Box>
      </Flex>
      {(useWindowSize().width as number) > 800 ? (
        <Nav isMobile={false} />
      ) : null}
      <p>{ }</p>
    </>
  );
};

export default Header;
