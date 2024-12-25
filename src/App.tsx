import { FullNoteDisplay } from './components/FullNoteDisplay'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Notes } from './components/Notes'
import { Trash } from './components/Trash'
import { useNotes } from './hooks/useNotes'
import { Section } from './models/Section'

export default function App () {
  const { fullNote, section } = useNotes()

  const sections: { [key in Section]: JSX.Element } = {
    notes: <Notes />,
    trash: <Trash />
  }

  return (
    <>
      {fullNote && <FullNoteDisplay noteToDisplay={fullNote} />}

      <Header />
      <Menu />
      {sections[section]}
    </>
  )
}
