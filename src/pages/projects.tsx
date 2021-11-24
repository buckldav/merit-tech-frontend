import { Heading, Text, Link, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Heading mb="2">Student Projects</Heading>
      <Text mb="3">
        Student projects have not migrated to this new site yet. Check the{" "}
        <Link
          href="https://meritacademy-legacy.herokuapp.com/"
          color={useColorModeValue("brand.600", "brand.200")}
        >
          legacy site
        </Link>
        .<br /> They'll be here for the CS Showcase:
      </Text>
      <iframe src="/showcase.pdf" height={500} title="CS Showcase 2021">
        <a href="/showcase.pdf">CS Showcase Flyer</a>
      </iframe>
    </>
  );
}
