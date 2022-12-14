import { Heading ,Box , VStack, Text } from '@chakra-ui/react'
import React from 'react'
import {useSearchParams} from "react-router-dom";

function PaymentSuccess() {
  const search = useSearchParams()[0];
  const referenceKey = search.get('reference');

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