import { Heading ,Box , VStack, Text } from '@chakra-ui/react'
import React from 'react'
import {useLocation} from "react-router-dom";

function PaymentSuccess() {
  const search = useLocation().search;
  const referenceKey = new URLSearchParams(search).get('reference');

  return (
    <Box>
        <VStack h="100vh"  justifyContent={"center"}>
            <Heading >ORDER SUCCESSFUL</Heading>
                <Text>
                     Reference No. :- {referenceKey}
                </Text>
        </VStack>
    </Box>
  )
}

export default PaymentSuccess