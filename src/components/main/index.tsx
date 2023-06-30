import React from "react";
import {
  Box,
  useTheme,
  Center,
  Heading,
  Text,
  Avatar,
  AvatarBadge,
  Flex,
  Image,
  Button,
  Spacer,
  Show,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { Footer, Header } from "@components";

export const Main: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      maxW={"100%"}
      overflowX="hidden"
    >
      <Image
        mx="auto"
        position="absolute"
        w={{ base: "600px", md: "690px" }}
        top={{ base: "-201", md: "-251" }}
        left={{ base: "-280", md: "-380" }}
        src="/blob2.png"
        zIndex={-1000}
      />
      <Box minW="140vw" minH="100vh" position="relative">
        <Header />
        <Image
          pt={{ base: 6, md: 0 }}
          mx="auto"
          w="454px"
          h="162px"
          src="/sailed-logo.png"
        />
        <Text
          mt={-4}
          color="black"
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="bold"
          mb={0}
        >
          Match your friends
        </Text>
        <Box mb={8}>
          <Flex>
            <Image
              marginLeft="auto"
              marginRight={-5}
              boxSize={{ base: "11em", md: "20em" }}
              borderRadius="full"
              src="p1.jpg"
              border="0.25em solid"
            />
            <Image
              marginRight="auto"
              boxSize={{ base: "11em", md: "20em" }}
              borderRadius="full"
              src="p2.png"
              border="0.25em solid"
            />
          </Flex>
          <Image
            mt="-2em"
            mx="auto"
            height={{ base: "4em", md: "6em" }}
            src="heart.png"
          />
          <Show above="md">
            <Avatar
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "400px" }}
              left={{ base: "0px", md: "450px" }}
              zIndex={{ base: 0, md: -1000 }}
              size="lg"
              src="r1.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                👍
              </AvatarBadge>
            </Avatar>
            <Avatar
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "550px" }}
              left={{ base: "0px", md: "550px" }}
              zIndex={{ base: 0, md: -1000 }}
              size="lg"
              src="r2.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                ⛵
              </AvatarBadge>
            </Avatar>
            <Avatar
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "475px" }}
              left={{ base: "0px", md: "350px" }}
              zIndex={{ base: 0, md: -1000 }}
              size="lg"
              src="r6.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                👿
              </AvatarBadge>
            </Avatar>
            <Avatar
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "345px" }}
              left={{ base: "0px", md: "315px" }}
              zIndex={{ base: 0, md: -1000 }}
              size="lg"
              src="r7.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                🍵
              </AvatarBadge>
            </Avatar>
            <Avatar
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "245px" }}
              left={{ base: "0px", md: "543px" }}
              zIndex={{ base: 0, md: -1000 }}
              size="lg"
              src="r8.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                💀
              </AvatarBadge>
            </Avatar>
            <Avatar
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "440px" }}
              right={{ base: "0px", md: "540px" }}
              zIndex={{ base: 0, md: -1000 }}
              size="lg"
              src="r3.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                🥰
              </AvatarBadge>
            </Avatar>
            <Avatar
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "250px" }}
              right={{ base: "0px", md: "570px" }}
              zIndex={{ base: 0, md: -1000 }}
              size="lg"
              src="r4.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                🙌
              </AvatarBadge>
            </Avatar>
            <Avatar
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "350px" }}
              right={{ base: "0px", md: "450px" }}
              zIndex={{ base: 0, md: -1000 }}
              size="lg"
              src="r5.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                👍
              </AvatarBadge>
            </Avatar>
            <Avatar
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "260px" }}
              right={{ base: "0px", md: "350px" }}
              zIndex={{ base: 0, md: -1000 }}
              size="lg"
              src="r8.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                💖
              </AvatarBadge>
            </Avatar>
            <Avatar
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "535px" }}
              right={{ base: "0px", md: "470px" }}
              zIndex={{ base: 0, md: -1000 }}
              size="lg"
              src="r9.png"
              border="0.1em solid black"
            >
              <AvatarBadge bg="white" boxSize="1.3em">
                🚩
              </AvatarBadge>
            </Avatar>
          </Show>
        </Box>
        <Flex mt={{ base: "-3em", md: "-5em" }} mx="auto" width="22rem">
          <Spacer />
          <Image w={{ base: "67px", md: "67px" }} src="/new-doodle.png" />
        </Flex>
        <NextLink href="https://forms.gle/j4jbtYBMprtgEyDm6">
          <Button
            width="17.5rem"
            height="4.25rem"
            bgColor="#9B51E0"
            color="white"
            variant="solid"
            size="lg"
            borderRadius="20px"
            border="4px solid black"
            fontWeight="bold"
            fontSize="1.5rem"
          >
            Join Waitlist
          </Button>
        </NextLink>
        <Image
          overflowX="hidden"
          mx="auto"
          position="absolute"
          w={{ base: "500px", md: "654px" }}
          top={{ base: "451", md: "251" }}
          right={{ base: "-260", md: "-200" }}
          src="/blob.png"
          zIndex={-1000}
        />
      </Box>
      <Center
        flexDirection="column"
        display="flex"
        position="relative"
        textAlign="left"
        maxWidth="48em"
        padding={5}
        borderRadius={10}
        m={10}
      >
        <Box>
          <Image
            overflowX="hidden"
            mx="auto"
            position="absolute"
            w={{ base: "264px", md: "264px" }}
            top="0"
            left="-390"
            src="/star.png"
            zIndex={-1000}
          />
          <Heading
            textAlign="center"
            marginBottom={10}
            id="about"
            fontSize={{ base: 25, md: 36 }}
          >
            So ... What are we?
          </Heading>
          <Text>
            We’re the app that empowers you to take charge of your friends' love
            lives! Our goal is to make matchmaking and dating a delightful and
            effortless experience for you and your inner circle.
          </Text>
          <Text>
            So, how does Sailed work? It's a breeze! Start by creating an
            account and inviting your friends. Then choose a friend to match and
            start swiping on recommended partners. Swipe right to ship someone
            with your friend and wait to see the reactions from your other
            friends. If your ship gets enough love, sail the ship!
          </Text>

          <Text>
            Sail away with us today and embark on a voyage of exciting and
            heartwarming love stories.
          </Text>
          <Heading
            textAlign="center"
            marginBottom={10}
            paddingTop={24}
            id="faq"
            fontSize={{ base: 25, md: 36 }}
          >
            FAQ
          </Heading>
          <Image
            overflowX="hidden"
            mx="auto"
            position="absolute"
            w={{ base: "225px", md: "225px" }}
            top="293"
            right="-320"
            src="/asterisk.png"
            zIndex={-1000}
          />
          <Image
            overflowY="hidden"
            position="absolute"
            w={{ base: "512px", md: "512px" }}
            bottom="0"
            left="-620"
            src="/blob3.png"
            zIndex={-1000}
          />
          <Text fontWeight={"bold"}>
            Q: I’m already in a relationship. Can I just be a matchmaker?
          </Text>
          <Text>
            Yes! You can toggle a setting in your profile that prevents you from
            being shipped with others.
          </Text>

          <Text fontWeight={"bold"}>Q: What's a ship? What's a sail?</Text>

          <Text>
            When a friend is matchmaking for another friend and they swipe right
            on a potential partner, we call it a "ship". If the ship is approved
            by enough friends, then it becomes a match, which we call a "sail".
          </Text>

          <Text fontWeight={"bold"}>
            Q: What needs to happen for a ship to be sailed?
          </Text>

          <Text>
            Once a ship is created between two people, it'll be shown to friends
            of both people. The friends can add reactions of approval or
            disapproval and also add comments. If there are enough positive
            reactions by friends of both people, the ship will be sailed!
          </Text>

          <Text fontWeight={"bold"}>
            Q: Can I message or communicate with people I’m shipped with?
          </Text>

          <Text>
            Definitely! You can message matches with our built-in chat feature.
          </Text>

          <Text fontWeight={"bold"}>
            Q: How old do I need to be to use the app?
          </Text>
          <Text>You must be 18 years or older to use the app.</Text>
        </Box>
      </Center>
      <Footer />
    </Box>
  );
};
