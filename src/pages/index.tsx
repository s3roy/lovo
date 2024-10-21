// pages/index.tsx
import { Box, Button, Text } from "@chakra-ui/react";
import { NextPage } from "next";

const Home: NextPage = () => {
  const handleDownload = () => {
    // Replace 'https://example.com/your-apk-file.apk' with your actual APK URL.
    const apkUrl = "https://frnd.blr1.digitaloceanspaces.com/kimo.apk";
    window.location.href = apkUrl;
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundImage="url('/homepage.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient:
          "linear(90deg, rgba(200, 22, 254, 0.51) 0%, rgba(162, 73, 0, 0.51) 99.65%)",
        zIndex: 1,
      }}
    >
      <Box position="relative" zIndex={2}>
        <Box bg="#FBFBFD1A" py={3} px={10}>
          <Text
            fontFamily="'Inspiration', cursive"
            fontSize={{ base: "50px", md: "100px" }}
            fontWeight="400"
            lineHeight={{ base: "31.75px", md: "80px" }}
            textAlign="left"
            color="#FFFFFF"
            mb="16px"
          >
            Kimo
          </Text>
        </Box>
        <Box
          mt={{ base: 50, lg: 200 }}
          mr={{ base: 0, lg: 150 }}
          px={{ base: 5, md: 20 }}
        >
          <Text
            fontFamily="'Inter', sans-serif"
            fontSize={{ base: "65px", md: "95px" }}
            fontWeight="900"
            lineHeight={{ base: "61.1px", md: "89.3px" }}
            textAlign="left"
            color="#FFFFFF"
            mb="16px"
          >
            Find Your Perfect Match Today!
          </Text>
          <Text
            fontFamily="'Inter', sans-serif"
            fontSize={{ base: "20px", md: "40px" }}
            fontWeight="200"
            lineHeight={{ base: "24.2px", md: "48.41px" }}
            textAlign="left"
            color="#FFFFFF"
            mb="32px"
          >
            Your Journey to Love Begins Here!
          </Text>
          <Button
            bgColor="#007AFF"
            color="white"
            size="lg"
            _hover={{ bgColor: "#007AFF" }}
            borderRadius="3xl"
            onClick={handleDownload}
          >
            Download Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
