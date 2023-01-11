import { useEffect } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query"

const queryClient = new QueryClient();


const Result = () => {
    const { data, status } = useQuery("result", async () => {
        return (await fetch("/api/result")).json()
    })

    if (status === 'loading') {
        return <h1>Loading</h1>
    }
    if (status === 'error') {
        return <h1>Error</h1>
    }
    return (
        data.map(p =>
            <div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} />
                <p>{p.id}. Votes {p.votes}</p>
            </div>
        )
    )
}

export default function PokeResult() {

    return (
        <QueryClientProvider client={queryClient}>
            <Result />
        </QueryClientProvider>
    )
}