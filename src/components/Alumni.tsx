import { ReactNode, useEffect, useState } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  BoxProps,
} from "@chakra-ui/react";
import { GiGraduateCap } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Alum } from "types/alumni";
import { LinkExternal, LinkWrapper } from "./my-chakra";
import Link from "next/link";

function AlumniWrapper(props: BoxProps) {
  return (
    <Box
      flex="1"
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {props.children}
    </Box>
  );
}

export default function Alumni() {
  const [alumni, setAlumni] = useState<Alum[]>();
  const [internships, setInternships] = useState<number>(0);
  const [colleges, setColleges] = useState<number>(0);
  const [pathways, setPathways] = useState<number>(0);

  useEffect(() => {
    async function getAlumni() {
      const res = await fetch(
        "https://meritacademy.herokuapp.com/api/alumni/",
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setAlumni(data);
      console.log(data);
      setInternships((data as Alum[]).filter((alum) => !!alum.job).length);
      setColleges((data as Alum[]).filter((alum) => !!alum.college).length);
      setPathways(
        (data as Alum[]).filter((alum) =>
          alum.achievements.findIndex((ach) => ach.includes("Pathway"))
        ).length
      );
      return data;
    }

    getAlumni().catch((e) => {});
  }, []);

  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h2" fontSize="3xl">
          Preparing You For a Future in Tech
        </Heading>
        <Text fontSize="md" color={useColorModeValue("gray.500", "gray.200")}>
          We strive to provide practical learning opportunities both inside and
          outside of class to prepare you for an ever-evolving world.
          <br />
          Data collected since 2019.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 8 }}
        py={10}
      >
        <AlumniWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Higher Education
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="5xl" fontWeight="900">
                80%
              </Text>
            </HStack>
            <Text fontWeight="500" fontSize="md">
              pass rate of AP CS A and AP CS Principles
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={GiGraduateCap} color={useColorModeValue("red.600", "red.200")} />
                {colleges} students went on to study CS/IT in college.
              </ListItem>
              <ListItem>
                <ListIcon as={GiGraduateCap} color={useColorModeValue("red.600", "red.200")} />
                Pipeline to{" "}
                <LinkExternal href="https://neumont.edu">
                  Neumont College of CS
                </LinkExternal>{" "}
                in Salt Lake.
              </ListItem>
            </List>
            {/* <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Start trial
              </Button>
            </Box> */}
          </VStack>
        </AlumniWrapper>

        <AlumniWrapper>
          <Box position="relative">
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Career Readiness
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="5xl" fontWeight="900">
                  {internships}
                </Text>
              </HStack>
              <Text fontWeight="500" fontSize="md">
                students with a technology internship out of high school
              </Text>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={AiOutlineFundProjectionScreen} color={useColorModeValue("blue.900", "blue.200")} />
                  {pathways} students completed a technology CTE Pathway.
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineFundProjectionScreen} color={useColorModeValue("blue.900", "blue.200")} />
                  <LinkExternal href="/projects">
                    Project-based learning
                  </LinkExternal>
                  .
                </ListItem>
              </List>
              {/* <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red">
                  Start trial
                </Button>
              </Box> */}
            </VStack>
          </Box>
        </AlumniWrapper>
      </Stack>
    </Box>
  );
}
