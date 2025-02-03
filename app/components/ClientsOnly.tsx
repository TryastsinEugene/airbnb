"use client"

import React, { useEffect, useState } from 'react'

interface ClientsOnlyProps {
    children: React.ReactNode
}
const ClientsOnly: React.FC<ClientsOnlyProps> = ({children}) => {
    const [hasMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    },[])

    if(!hasMounted){
        return null;
    }
  return (
    <>
        {children}
    </>
  )
}

export default ClientsOnly