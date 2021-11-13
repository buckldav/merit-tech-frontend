import { Heading, Text, Link, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Heading mb="2">Student Projects</Heading>
      <Text>
        Student projects have not migrated to this new site yet. Check the{" "}
        <Link
          href="https://meritacademy-legacy.herokuapp.com/"
          color={useColorModeValue("brand.600", "brand.200")}
        >
          legacy site
        </Link>
        .
      </Text>
      <Image src="/not-found.svg" width={400} height={300} />
    </>
  );
}
