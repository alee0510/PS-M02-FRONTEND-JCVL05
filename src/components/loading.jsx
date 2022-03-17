import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, Flex, Spinner, Text } from '@chakra-ui/react'

export default function Loading (props) {
    return (
        <Modal isOpen={props.onLoading}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Flex alignItems="center">
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='#319795'
                            size='xl'
                        />
                        <Text ml="15px" fontSize="2xl" fontWeight="bold" color="#319795">Loading</Text>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}