import { useEffect, useState } from "react"

const useReview =() =>{

    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        const url = `review.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return [reviews, setReviews]
}
export default useReview