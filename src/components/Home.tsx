import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Grid,
  UnorderedList,
  ListItem,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import MotionBox from "./motion/Box";
import Image from "next/image";
import { useWindowSize } from "hooks";

export default function Home() {
  return (
    <>
      <Flex as="section" direction="column" alignItems="center" py="5">
        <MotionBox
          animate={{ y: -10, opacity: 1 }}
          transition={{ repeat: 0, duration: 1 }}
          opacity={0}
        >
          <Image
            src="/home1.jpg"
            width={450}
            height={300}
            alt="Merit Academy TSA Conference 2018"
          />
        </MotionBox>
        <Text maxW={400} textAlign="center">
          Merit Preparatory Academy is a secondary school (7-12 grades) in
          Springville, UT.
        </Text>
        <Grid
          justify="center"
          align="center"
          mt="2"
          gridTemplate={
            (useWindowSize().width as number) < 500
              ? "auto auto / auto"
              : "auto / auto auto"
          }
          gridGap="2"
        >
          <Button as="a" href="https://meritacademy.instructure.com">
            Go To Canvas
          </Button>
          <Button
            as="a"
            href="https://meritprepacademy.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Merit Academy's Website
          </Button>
        </Grid>
      </Flex>
      <Box as="section" py="5">
        <Heading as="h2" size="md" my="3" textAlign="center">
          What does CTE look like at Merit?
        </Heading>
        <Flex direction="column" alignItems="center" m="2">
          <Image
            src="/tsa2019_20.jpg"
            width={450}
            height={160}
            alt="Merit Academy TSA Members 2019-20"
          />
        </Flex>
        <Text>
          CTE stands for Career Technology Education. CTE courses help students
          develop skills like photography, programming, cooking, and more! At
          Merit Academy, we offer CTE courses in the following fields:
        </Text>
        <UnorderedList my="2" pl="3">
          <ListItem>Audio/Visual Production</ListItem>
          <ListItem>Computer Science and Information Technology</ListItem>
          <ListItem>Culinary Arts and Costume Design</ListItem>
          <ListItem>Engineering, Robotics, and Woodshop</ListItem>
          <ListItem>Photography and Graphic Design</ListItem>
        </UnorderedList>
        <Text>
          Explore Merit CTE Courses by visiting a page made by Jacoby Day and
          Allie Erdmann in Web Development class!{" "}
          <Link
            color={useColorModeValue("brand.600", "brand.200")}
            href="https://cte.meritacademy.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://cte.meritacademy.tech
          </Link>
        </Text>
      </Box>
      <Box as="section" py="5">
        <Heading as="h2" size="md" my="3" textAlign="center">
          Why is CTE so cool?
        </Heading>
        <Flex direction="column" alignItems="center" m="2">
          <Image
            src="/culinary.jpg"
            width={450}
            height={160}
            alt="Merit Academy Culinary Class in the Kitchen"
          />
        </Flex>
        <Text>
          CTE classes are designed to help students pursue their passions and
          produce real-world products. They also help students plan and prepare
          for their future beyond high school. Here are some cool statistics
          related to CTE in the state of Utah:
        </Text>
        <UnorderedList my="2" pl="3">
          <ListItem>
            171,489 students enrolled in CTE courses in the state.
          </ListItem>
          <ListItem>
            96.3% graduation rate for students who are CTE concentrators.
          </ListItem>
          <ListItem>
            63.8% of students who concetrated in a CTE pathway placed in
            postsecondary education, advanced training, military service, or
            employment.
          </ListItem>
          <ListItem>
            57,537 CTE Skill Certifications earned in the state.
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  );
}
