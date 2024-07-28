import React, { useState } from 'react';
import { db } from '../../../Config/Firebase/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, 'articles'), {
        title,
        subtitle,
        date,
        imageUrl,
        content,
      });
      // Clear the form
      setTitle('');
      setSubTitle('');
      setDate('');
      setImageUrl('');
      setContent('');
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>SubTitle</label>
        <input type="text" value={subtitle} onChange={(e) => setSubTitle(e.target.value)} required />
      </div>
      <div>
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <label>Image URL</label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
      </div>
      <div>
        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
      </div>
      <button type="submit">Create Article</button>
    </form>
  );
};

export default CreateArticle;
