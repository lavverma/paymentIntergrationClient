import React from 'react'
import Card from "./Card"
import {Box , Stack} from "@chakra-ui/react"
import axios from "axios"

const Home = () =>{
    const checkOutHandler = async (amount) =>{
   
        const {data : {key}} = await axios.get("https://paymentintergration.onrender.com/getKey")

     const {data : {order}} = await axios.post("https://paymentintergration.onrender.com/payment" , {
        amount
     })
     const options = {
        key : key,
        amount: order.amount, 
        currency: "INR",
        name: "Lav verma",
        description: "Test Transaction",
        image: "https://avatars.githubusercontent.com/u/104074131?s=400&u=4b3299f2794eb623331f43b02207bdb5c2559cd7&v=4",
        order_id: order.id,
        callback_url: "https://paymentintergration.onrender.com/paymentVerification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9999999999"
        },
        notes: {
            address: "Razorpay Corporate Office"
        },
        theme: {
            color: "#2D78F0"
        }
    };
    const rzp1 = new window.Razorpay(options);
        rzp1.open()
    }
  return (
    <Box>
        <Stack h={"100vh"} justifyContent="center" alignItems="center" direction={["column" , "row"]}>
            <Card amount={200000} img={"https://helios-i.mashable.com/imagery/articles/074VLAod0Vrh62ei0oj0QgR/hero-image.fill.size_1248x702.v1623375190.png"} checkOutHandler={checkOutHandler}/>
            <Card amount={30000} img={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-pink-202203?wid=940&hei=1112&fmt=png-alpha&.v=1645066399526"} checkOutHandler={checkOutHandler}/>
        </Stack>
    </Box>
  )
}

export default Home