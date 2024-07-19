import React, { useState } from 'react';
import api from '../services/api';
import TopBar from '../components/TopBar';

const NoteAdd = () => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const confirmed = window.confirm('Are you sure you want to save?');
        if (!confirmed) return;

        try {
            const response = await api.post('/api/notes/list/', note);
            if (response.status === 201) {
                alert('Note created!');
                clearForm();
            } else {
                alert('Failed to create note.');
            }
        } catch (error) {
            alert('An error occurred: ' + error.message);
        }
    };

    const clearForm = () => {
        setNote({
            title: '',
            content: ''
        });
    };

    return (
        <div>
            <TopBar />
                <div className="container">
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="form-control"
                                required
                                value={note.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Content:</label>
                            <textarea
                                id="content"
                                name="content"
                                className="form-control"
                                required
                                value={note.content}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-4 mb-0">
                            <input type="submit" value="Submit" className="col-md-12 btn btn-dark" />
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default NoteAdd;
