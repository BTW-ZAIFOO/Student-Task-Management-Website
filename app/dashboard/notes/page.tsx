'use client';
import { useState } from 'react';
import NavbarProCompact from '@/components/NavbarProCompact';
import { IoAdd, IoTrash, IoDownload } from 'react-icons/io5';

interface Note {
  id: string;
  subject: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      subject: 'Mathematics',
      title: 'Calculus Chapter 5 Notes',
      content: 'Derivative rules and applications...',
      createdAt: '2026-05-18',
    },
    {
      id: '2',
      subject: 'Physics',
      title: 'Electromagnetism Basics',
      content: 'Electric fields and forces...',
      createdAt: '2026-05-17',
    },
    {
      id: '3',
      subject: 'Chemistry',
      title: 'Chemical Bonding',
      content: 'Ionic and covalent bonds...',
      createdAt: '2026-05-16',
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newNote, setNewNote] = useState({ subject: '', title: '', content: '' });

  const addNote = () => {
    if (newNote.subject && newNote.title && newNote.content) {
      setNotes([
        ...notes,
        {
          id: Date.now().toString(),
          subject: newNote.subject,
          title: newNote.title,
          content: newNote.content,
          createdAt: new Date().toISOString().split('T')[0],
        },
      ]);
      setNewNote({ subject: '', title: '', content: '' });
      setIsAdding(false);
    }
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  const downloadNote = (note: Note) => {
    const text = `${note.title}\n\nSubject: ${note.subject}\n\n${note.content}`;
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
    <div className="min-h-screen bg-gray-50">
      <NavbarProCompact />

      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Study Notes</h1>
              <p className="text-xs text-gray-600 mt-1">Organize and manage your study materials</p>
            </div>
            <button
              onClick={() => setIsAdding(!isAdding)}
              className="p-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 flex items-center gap-1 text-xs"
            >
              <IoAdd className="w-4 h-4" /> New Note
            </button>
          </div>

          {/* Add Note Form */}
          {isAdding && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-sm font-bold text-gray-900 mb-4">Create New Note</h2>
              <div className="space-y-3">
                <select
                  value={newNote.subject}
                  onChange={(e) => setNewNote({ ...newNote, subject: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg"
                >
                  <option value="">Select Subject</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Note Title"
                  value={newNote.title}
                  onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg"
                />
                <textarea
                  placeholder="Note Content"
                  value={newNote.content}
                  onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg resize-none"
                />
                <div className="flex gap-2">
                  <button
                    onClick={addNote}
                    className="flex-1 px-3 py-2 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700"
                  >
                    Save Note
                  </button>
                  <button
                    onClick={() => setIsAdding(false)}
                    className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-xs rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Notes by Subject */}
          {subjects.map((subject) => (
            <div key={subject} className="mb-6">
              <h2 className="text-sm font-bold text-gray-900 mb-3">{subject}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {notes
                  .filter((n) => n.subject === subject)
                  .map((note) => (
                    <div key={note.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-xs font-semibold text-gray-900">{note.title}</p>
                          <p className="text-xs text-gray-500">{note.createdAt}</p>
                        </div>
                        <div className="flex gap-1">
                          <button
                            onClick={() => downloadNote(note)}
                            className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                          >
                            <IoDownload className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => deleteNote(note.id)}
                            className="p-1 text-red-600 hover:bg-red-50 rounded"
                          >
                            <IoTrash className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-700 line-clamp-3">{note.content}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}

          {notes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xs text-gray-500">No notes yet. Create one to get started!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
