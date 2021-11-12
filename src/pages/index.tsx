import { Box, Heading, Text } from "@chakra-ui/react";

import ContactForm from "components/ContactForm";
import Home from "components/Home";

const HomePage = () => {
  return (
    <Box mb={8} w="full">
      <Home />
      <ContactForm />
    </Box>
  );
};

export default HomePage;
