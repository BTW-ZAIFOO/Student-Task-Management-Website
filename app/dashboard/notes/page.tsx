'use client';
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { IoAdd, IoTrash, IoDownload, IoClose, IoDocuments } from 'react-icons/io5';

interface Note {
  id: string;
  subject: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newNote, setNewNote] = useState({ subject: '', title: '', content: '' });

  useEffect(() => {
    const saved = localStorage.getItem('studentNotes');
    if (saved) {
      setNotes(JSON.parse(saved));
    } else {
      const defaultNotes: Note[] = [
        {
          id: '1',
          subject: 'Mathematics',
          title: 'Calculus Chapter 5 Notes',
          content: 'Derivative rules and applications. Power rule, product rule, quotient rule...',
          createdAt: '2026-05-18',
        },
        {
          id: '2',
          subject: 'Physics',
          title: 'Electromagnetism Basics',
          content: 'Electric fields and forces. Coulombs law, electric potential...',
          createdAt: '2026-05-17',
        },
        {
          id: '3',
          subject: 'Chemistry',
          title: 'Chemical Bonding',
          content: 'Ionic and covalent bonds. Electronegativity, bond energy...',
          createdAt: '2026-05-16',
        },
      ];
      setNotes(defaultNotes);
      localStorage.setItem('studentNotes', JSON.stringify(defaultNotes));
    }
  }, []);

  const saveNotes = (data: Note[]) => {
    setNotes(data);
    localStorage.setItem('studentNotes', JSON.stringify(data));
  };

  const addNote = () => {
    if (newNote.subject && newNote.title && newNote.content) {
      const updated = [
        ...notes,
        {
          id: Date.now().toString(),
          subject: newNote.subject,
          title: newNote.title,
          content: newNote.content,
          createdAt: new Date().toISOString().split('T')[0],
        },
      ];
      saveNotes(updated);
      setNewNote({ subject: '', title: '', content: '' });
      setIsAdding(false);
    }
  };

  const deleteNote = (id: string) => {
    const updated = notes.filter((n) => n.id !== id);
    saveNotes(updated);
  };

  const downloadNote = (note: Note) => {
    const text = `${note.title}\n\nSubject: ${note.subject}\nDate: ${note.createdAt}\n\n${note.content}`;
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', `${note.title}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const subjects = Array.from(new Set(notes.map((n) => n.subject)));

  return (
    <PageLayout>
      <div className="min-h-screen bg-white dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Study Notes</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Organize and manage your study materials</p>
            </div>
            <button
              onClick={() => setIsAdding(!isAdding)}
              className="px-4 py-2 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <IoAdd className="w-4 h-4" />
              New Note
            </button>
          </div>

          {/* Add Note Form */}
          {isAdding && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 p-6 mb-6 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Create New Note</h2>
                <button
                  onClick={() => setIsAdding(false)}
                  className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <IoClose className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Enter subject name"
                    value={newNote.subject}
                    onChange={(e) => setNewNote({ ...newNote, subject: e.target.value })}
                    className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Note Title</label>
                  <input
                    type="text"
                    placeholder="Title for your note"
                    value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                    className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Content</label>
                  <textarea
                    placeholder="Write your note here..."
                    value={newNote.content}
                    onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={addNote}
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Save Note
                  </button>
                  <button
                    onClick={() => setIsAdding(false)}
                    className="flex-1 px-4 py-2 bg-gray-300 dark:bg-slate-700 hover:bg-gray-400 dark:hover:bg-slate-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Notes by Subject */}
          {subjects.length > 0 ? (
            subjects.map((subject) => (
              <div key={subject} className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <IoDocuments className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  {subject}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {notes
                    .filter((n) => n.subject === subject)
                    .map((note) => (
                      <div
                        key={note.id}
                        className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-gray-200 dark:border-slate-700 p-5 transition-all hover:shadow-lg"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">{note.title}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {new Date(note.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 ml-3">
                            <button
                              onClick={() => downloadNote(note)}
                              className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                              title="Download note"
                            >
                              <IoDownload className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteNote(note.id)}
                              className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                              title="Delete note"
                            >
                              <IoTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-4 bg-gray-50 dark:bg-slate-900 p-3 rounded-lg">
                          {note.content}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <IoDocuments className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">No notes yet</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Create your first note to get started!</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
