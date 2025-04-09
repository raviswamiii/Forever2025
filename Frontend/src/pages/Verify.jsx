import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'
import axios from 'axios'

export const Verify = () => {
    const {navigate, token, setCartItems, backend_url} = useContext(ShopContext)
    const [searchParams, setSearchParams] = useSearchParams()

    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")

    const verifyPayment = async () => {
        try {
            if(!token) {
                return null
            }

            const response = await axios.post(backend_url + "/api/order/verifyStripe", {success, orderId}, {headers: {token}})

            if(response.data.success) {
                setCartItems({})
                navigate("/orders")
            } else { 
                navigate("/cart")
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[token])
  return (
    <div></div>
  )
}
