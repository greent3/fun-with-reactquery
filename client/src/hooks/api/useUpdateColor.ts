import axios from "axios"
import { useMutation, useQueryClient } from "react-query"


function updateColor(id: number, newColor: string) {
    return axios.put(`http://localhost:8080/boxColor/${id}`, { color: newColor })
        .then((res) => res.data)
}

function useUpdateColor() {
    const queryClient = useQueryClient()
    return useMutation(
        ({ id, newColor }: { id: number, newColor: string }) => updateColor(id, newColor),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["repoData"])
                console.log("Successfully Updated Color")
            },
            onError: (err) => {
                console.log(err)
                alert("Error updating color")
            }
        }
    )
}

export { useUpdateColor }