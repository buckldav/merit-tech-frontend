import { Box, BoxProps, Link, LinkProps } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const LinkWrapper = (props: BoxProps) => <Box {...props} color={useColorModeValue("brand.600", "brand.200")}>{props.children}</Box>

export const LinkExternal = (props: LinkProps) => <Link {...props} color={useColorModeValue("brand.600", "brand.200")}>{props.children}</Link>

export const useLinkColor = () => useColorModeValue("brand.600", "brand.200")