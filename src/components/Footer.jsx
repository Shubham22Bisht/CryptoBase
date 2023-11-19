import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Crypto news made Simple , Trust us may be you can become the next
            milliniore
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src='https://imageio.forbes.com/specials-images/imageserve/60bb3f4ca093144d03f3536c/Elon-Musk--Tesla--bitcoin--bitcoin-price--dogecoin--dogecoin-price--image/960x0.jpg?height=485&width=711&fit=bounds'/>
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
