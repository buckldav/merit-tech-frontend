import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = (props: { isMobile: boolean }) => {
  return (
    <Flex
      as="footer"
      width={props.isMobile ? "initial" : "full"}
      align="center"
      mt={props.isMobile ? 0 : 12}
    >
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://davidjaybuckley.com" isExternal>
          davidjaybuckley
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
