import axios from "axios"
import { useQuery } from "react-query"


function getBoxColor(id: number) {
    return axios.get(`http://localhost:8080/boxColor/${id}`).then((res) => res.data)
}

export function useGetBoxColor(id: number) {

    return useQuery(
        ["repoData", id],
        () => getBoxColor(id),
        {
            onError: () => {
                alert("failed to load box color")
            }
        }
    )
}

