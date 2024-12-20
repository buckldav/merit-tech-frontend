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
import { PropsWithChildren, useState } from "react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import { Course } from "types/course";
import Slider from "react-slick";
import pSBC from "shade-blend-color";

import { LinkExternal } from "./my-chakra";

export default function Courses(
  props: PropsWithChildren<{ courses: Array<Course> }>
) {
  const [slider, setSlider] = useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "-50px" });

  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <>
      <Box mt={14}>
        <Heading as="h2" textAlign={"center"} size="lg">
          Register Now!
        </Heading>
        <Text textAlign={"center"} mt={2}>
          We offer a variety of CS and IT courses at Merit.{" "}
          <LinkExternal href="https://meritprepacademy.org/enroll/">
            Click here to enroll
          </LinkExternal>
          .
        </Text>
      </Box>
      <Box
        position={"relative"}
        height={"600px"}
        width="400px"
        maxWidth="600px"
        margin={"0 auto"}
        mb={14}
        id="carousel-container"
      >
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {props.courses?.map((course, index) => (
            <Box
              maxW={"320px"}
              w={"full"}
              h={"470px"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={"center"}
              mt={7}
              mb={16}
              key={index}
            >
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent={"space-between"}
                height="full"
              >
                <div>
                  <Image
                    width="100px"
                    src="merit_tech_logo_sm.png"
                    borderRadius={0}
                    mt={4}
                    mb={2}
                    mx="auto"
                    display="block"
                  />
                  <Heading fontSize="xl" mb="2">
                    {course.name}
                  </Heading>
                </div>
                <Text
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                  fontSize="xs"
                >
                  {course.description[0]}
                  {course.name !== "Web Development Capstone" && (
                    <>&nbsp;{course.description[1]}</>
                  )}
                </Text>

                <Stack
                  align={"center"}
                  justify={"center"}
                  direction={"row"}
                  mt={6}
                  wrap="wrap"
                  gridRowGap={2}
                >
                  {course.tags.map((tag, index) => (
                    <Badge
                      px={2}
                      py={1}
                      bg={pSBC(-0.1, tag.color)}
                      fontWeight={"400"}
                      color={"white"}
                      borderRadius={4}
                      lineHeight={1}
                      key={index}
                    >
                      {tag.content}
                    </Badge>
                  ))}
                </Stack>

                <Stack mt={8} direction={"row"} spacing={4}>
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    as="a"
                    href="https://cs.meritacademy.tech"
                  >
                    All Courses
                  </Button>
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    bg={"brand.600"}
                    _hover={{ background: "brand.500" }}
                    color={"white"}
                    as="a"
                    href={`https://cs.meritacademy.tech/#/disclosure?name=${course.slug}`}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
