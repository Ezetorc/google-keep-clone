import { create } from 'zustand'
import { NotesStore } from '../models/NotesStore'
import { Note } from '../models/Note'
import { Section } from '../models/Section'

export const getNotesStore = create<NotesStore>(set => ({
  notes: [
    {
      title: '✂️ Hair',
      content: `Mid Fade redondo, patillas rectas, flequillo arriba de las cejas, englobado, degrade compacto al 0, flequillo arriba de la frente

Me gustaría un mid fade bien englobado, con las patillas rectas y el flequillo arriba de las cejas, y la parte de atras recta.`,
      id: 0
    },
    {
      title: '🌐 Web',
      content: `FRONTEND 
✅ HTML ⭐
✅ CSS
✅ JavaScript
✅ TypeScript ⭐
✅ ReactJS ⭐
✅ Zustand
✅ TailwindCSS
✅ Astro
❌ Angular
❌ Vitest

BACKEND
✅ NodeJS
▶️ Express
❌ DenoJS
❌ MySQL
❌ Laravel
❌ PHP 

TOOLS
✅ PowerShell
✅ Visual Studio Code
🟨 GitHub
🟨 Git

NOTES
✅ Contribute in Github repositories
✅ Make some simply but incredible experience

PROJECTS
✅ Dot Dager Landing Page
✅ Alexe1 Portfolio
✅ AutoElectron
✅ Piano Game
✅ QR Generator
✅ Express API
✅ Cinematic Creator
✅ Coords Saver
✅ Andrés Posta Portfolio
✅ Practice English
▶️ ValoPack
▶️ Google Keep clone
❌ JavaScript Challenges
❌ Utility library
❌ Web Component
❌ Documentation App
❌ URL Shortener`,
      id: 1
    }
  ],
  setNotes: (newNotes: Note[]) => set({ notes: newNotes }),

  trash: [],
  setTrash: (newTrash: Note[]) => set({ trash: newTrash }),

  fullNote: null,
  setFullNote: (newFullNote: Note | null) => set({ fullNote: newFullNote }),

  section: 'notes',
  setSection: (newSection: Section) => set({ section: newSection })
}))
