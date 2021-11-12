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

const Nav = (props: { isMobile: boolean }) => (
  <Flex
    as="nav"
    width="full"
    align={props.isMobile ? "left" : "center"}
    direction={props.isMobile ? "column" : "row"}
    mt={props.isMobile ? "initial" : "2"}
    fontSize="lg"
  >
    <Box
      pr={props.isMobile ? "initial" : "5"}
      color={useColorModeValue("brand.600", "brand.200")}
    >
      <Link href="/">Home</Link>
    </Box>
    <Box
      pr={props.isMobile ? "initial" : "5"}
      color={useColorModeValue("brand.600", "brand.200")}
    >
      <Link href="/projects">Projects</Link>
    </Box>
    <Box
      pr={props.isMobile ? "initial" : "5"}
      color={useColorModeValue("brand.600", "brand.200")}
    >
      <a href="https://cs.meritacademy.tech">Courses</a>
    </Box>
    <Box
      pr={props.isMobile ? "initial" : "5"}
      color={useColorModeValue("brand.600", "brand.200")}
    >
      <a href="https://learn.meritacademy.tech">Learn CS</a>
    </Box>
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
      <p>{}</p>
    </>
  );
};

export default Header;
