import { useEffect, useState } from "react"

const useOnline = ()=> {
    const [status, useStatus] = useState(false)

    useEffect(()=>{

        const handleOnline =()=>{
            useStatus(false)
         }
        const handleOffline =()=>{
            useStatus(true)
         }
        window.addEventListener("online", handleOnline )
        window.addEventListener("offline", handleOffline)

         return ()=>{
            window.removeEventListener("online", handleOnline )
            window.removeEventListener("offline", handleOffline)

         }

    },[])
    



    return status

}
export default useOnline