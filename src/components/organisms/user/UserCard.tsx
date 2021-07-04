import { memo, VFC } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
    id: number;
    imageUrl: string;
    userName: string;
    fullName: String;
    onClick: (id: number) => void;
}

export const UserCard: VFC<Props> = memo((props) => {
    const { id, imageUrl, userName, fullName, onClick } = props;
    return (
        <Box
        w="260px"
        h="260px"
        bg="wh"
        borderRadius="10px"
        shadow="md"
        p={4}
        _hover={{ cursor: "pointer", opacity: 0.8 }}
        onClick={() => onClick(id)}
       >
           <Stack textAlign="center">
                <Image
                    src={imageUrl}
                    borderRadius="full"
                    boxSize="160px"
                    alt={userName}
                    m="auto"
                />
                <Text fontSize="lg" fontWeight="bold">{userName}</Text>
                <Text fontSize="sm" color="gray">{fullName}</Text>
           </Stack>
       </Box>
    );
});