import { Avatar, Box, Button, Center, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';

function Profile() {
    const {
        data: { _id, imageURL, firstName, email },
    } = useSelector((store) => store.auth);
    const handleLogout = async () => {
        try {
            localStorage.removeItem("email");

            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    const handleMail = () => {
        window.location.href = "mailto:deysubham999@gmail.com";
    }
    return (
        <Box>
            <Center w={"90%"} h={"60%"} >
                <Box

                    height={"100%"}
                    w={"100%"}
                    rounded={"lg"}
                    // p={6}
                    textAlign={"center"}
                >
                    <Avatar
                        size={["sm", "md", "xl"]}
                        src={imageURL}
                        alt={"Avatar Alt"}
                        // mb={4}
                        pos={"relative"}
                        _after={{
                            content: '""',
                            w: 4,
                            h: 4,
                            bg: "green.300",
                            border: "2px solid white",
                            rounded: "full",
                            pos: "absolute",
                            bottom: 0,
                            right: 3,
                        }}
                    />
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                        {firstName}
                    </Heading>
                    <Text fontWeight={600} color={"gray.500"} >
                        {email}
                    </Text>
                    <Stack mt={8} direction={'row'} spacing={4}>
                        <Button
                            bg={"#32AEB0"}
                            size="lg"
                            onClick={() => navigate("/cart")}
                            flex={1}
                            color={"white"}
                            fontSize={'sm'}
                            rounded={'full'}
                            _focus={{
                                bg: '#32AEB0',
                            }}>
                            My Cart
                        </Button>

                        <Button
                            onClick={handleMail}
                            size="lg"
                            flex={1}
                            fontSize={'md'}
                            rounded={'full'}
                            bg={'#32AEB0'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: '#32AEB0',
                            }}
                            _focus={{
                                bg: '#32AEB0',
                            }}>
                            Contact
                        </Button>
                        <Button
                            size="lg"
                            flex={1}
                            fontSize={'md'}
                            rounded={'full'}
                            onClick={handleLogout}
                            bg={'#32AEB0'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'blue.500',
                            }}
                            _focus={{
                                bg: 'blue.500',
                            }}>
                            Log Out
                        </Button>
                    </Stack>
                </Box>
            </Center>
        </Box>
    )
}

export default Profile