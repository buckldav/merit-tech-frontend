import {
  Box,
  useBreakpointValue,
  IconButton,
  Heading,
  Text,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Badge,
} from "@chakra-ui/react";

export default function Courses() {
  return (
    <>
      <Box mt={14}>
        <img
          alt="Merit CS Showcase on May 18th from 6:30 to 8:00 pm in Mr. Buckley's room."
          src="flier.png"
          width="550"
          style={{ margin: "0 auto", maxWidth: "90%" }}
        />
      </Box>
    </>
  );
}
