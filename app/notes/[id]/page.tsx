import { fetchNoteById } from "../../../lib/api"
import { HydrationBoundary, dehydrate, QueryClient } from "@tanstack/react-query"
import NoteDetailsClient from "./NoteDetails.client"

type Props = {
    params: Promise<{ id: number }>
}

const NoteDetails = async ({ params }: Props) => {
  const { id } = await params
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id)
  })
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NoteDetailsClient/>
        </HydrationBoundary>
    )
}

export default NoteDetails