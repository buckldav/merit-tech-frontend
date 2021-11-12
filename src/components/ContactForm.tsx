import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Button,
  Alert,
  AlertIcon,
  Text,
  Heading,
} from "@chakra-ui/react";

export default function ContactForm() {
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(true);
  };

  return (
    <Box as="section" py="5">
      <Heading as="h2" size="md" mt="5">
        Contact Mr. Buckley
      </Heading>
      <Text my="2">Do you have any questions about CTE at Merit?</Text>
      {success ? (
        <Alert status="success" mt="2">
          <AlertIcon />
          Form Submitted!
        </Alert>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={onSubmit}
        >
          <Input type="hidden" name="form-name" value="contact" />
          <FormControl mt="2" maxW={400}>
            <FormLabel htmlFor="yourname">Your Name:</FormLabel>
            <Input type="text" name="name" id="yourname" />
          </FormControl>
          <FormControl mt="2" maxW={400}>
            <FormLabel htmlFor="youremail">Your Email:</FormLabel>
            <Input type="email" name="email" id="youremail" />
          </FormControl>
          <FormControl mt="2">
            <FormLabel htmlFor="yourmessage">Message:</FormLabel>
            <Textarea name="message" id="yourmessage"></Textarea>
          </FormControl>
          <FormControl mt="2">
            <Button type="submit">Send</Button>
          </FormControl>
        </form>
      )}
    </Box>
  );
}
