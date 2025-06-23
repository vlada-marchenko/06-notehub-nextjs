
import { fetchNotes } from '../../lib/api'
import css from '../../app/page.module.css'
import dynamic from 'next/dynamic'

const NotesClient = dynamic(() => import('./Notes.client'))

const NotesPage = async () => {
  const initialSearch = ''
  const initialPage = 1

  const response = await fetchNotes({ search: initialSearch, page: initialPage, perPage: 10 })
  return (
    <div className={css.app}>
      <NotesClient initialNotes={response.notes} initialPage={initialPage} initialSearch={initialSearch}/>
    </div>
  )
  
}
export default NotesPage