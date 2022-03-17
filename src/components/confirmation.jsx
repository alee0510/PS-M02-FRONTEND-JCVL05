import React from 'react'
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogBody, AlertDialogHeader, AlertDialogFooter, Button } from '@chakra-ui/react'

export default function Confirmation (props) {
    return (
        <AlertDialog
            isOpen={props.isOpen}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        { props.title }
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button onClick={props.onButtonCancel}>
                            Cancel
                        </Button>
                        <Button onClick={props.onButtonConfirm} colorScheme='red' ml={3}>
                            Confirm
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}