import { memo, VFC, useState, ChangeEvent } from "react";
import { ModalFooter, Modal, ModalOverlay, ModalContent, Stack, ModalBody, ModalCloseButton, ModalHeader, FormLabel, Input, FormControl } from "@chakra-ui/react";

import { User } from "../../../types/api/user"
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { useEffect } from "react";

type Props = {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
    isAdmin?: boolean;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
    const { user, isOpen, onClose, isAdmin } = props;

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        setUsername(user?.username ?? '')
        setName(user?.name ?? '')
        setEmail(user?.email ?? '')
        setPhone(user?.phone ?? '')
    }, [user])

    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

    const onClickUpdate = () => alert()

    return (
        <Modal isOpen={isOpen} onClose={onClose}  autoFocus={false} motionPreset={"slideInBottom"}>
                <ModalOverlay />
                <ModalContent pb={2}>
                    <ModalHeader>ユーザー詳細</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mx={4}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>名前</FormLabel>
                                <Input value={username} onChange={onChangeUserName} isReadOnly={!isAdmin} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>フルネーム</FormLabel>
                                <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>MAIL</FormLabel>
                                <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>TEL</FormLabel>
                                <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    {isAdmin && (
                        <ModalFooter>
                            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
                        </ModalFooter>
                    )}
                </ModalContent>
            </Modal>
    );
});