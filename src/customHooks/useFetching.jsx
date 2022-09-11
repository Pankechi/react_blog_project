import { useState } from "react"

export const useFetching = (callback) => {
  const [IsLoading, setIsLoading] = useState(false);
  const [IsError, setIsError] = useState('')

  const fetching = async () => {
    try {
      setIsLoading(true)
      await callback()
    } 
    
    catch (error) {
      setIsError(error.message)
    }

    finally{
      setIsLoading(false)  
    }
  }

  return [fetching, IsLoading, IsError]

}