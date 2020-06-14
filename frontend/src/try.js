import {useEffect , useState} from 'react' ;
import axios from 'axios' ;

export default function Books(pageNumber) {

    const [loading , setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [books, setbooks] = useState([])
    const [hasMore, sethasMore] = useState(false)

    useEffect(() => {

        setLoading(true);
        setError(false);

        axios({
            method: "GET",
            url: `http://localhost:9000/books`,
            params: {page: pageNumber}
        }).then(res => {
            //console.log(res.data)
            setbooks(prevBooks => {
                return [...prevBooks, ...res.data]
            })
            sethasMore(res.data.length > 0);
            setLoading(false);
        }).catch(e => {
            console.log(e);
            return
        })
        return 
    }, [pageNumber])

    return {loading ,error, books, hasMore}
}