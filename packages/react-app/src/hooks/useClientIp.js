import publicIp from "public-ip";
import { useCallback, useEffect, useState } from 'react'

const useClientIP = () => {
    const [ ip, setIP] = useState()
   
    const fetchIPaddress = useCallback(async () => {
        setIP(await publicIp.v4());
        //=> '46.5.21.123'
    
        console.log(await publicIp.v4());
        //=> 'fe80::200:f8ff:fe21:67cf'
    })

    useEffect(() => {
        fetchIPaddress()
       
    }, [])

    return ip
}

export default useClientIP
