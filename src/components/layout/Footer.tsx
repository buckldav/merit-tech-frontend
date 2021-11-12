import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
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
