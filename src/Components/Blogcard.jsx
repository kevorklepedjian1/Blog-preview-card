// BlogCard.js
import React from 'react';
import img1 from '../../assets/images/illustration-article.svg'
import img2 from '../../assets/images/image-avatar.webp'

const BlogCard = () => {
  return (
    <>
    <section className="container">
      <div>
        <img src={img1} alt="" />
      </div>

      <div>
        <h2>Learning</h2>

        <p className="published-at">Published 21 Dec 2023</p>

        <h1>HTML & CSS foundations</h1>

        <p>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>

        <ul>
          <li><img src={img2}alt="" /></li>
          <li>Greg Hooper</li>
        </ul>
      </div>

      
    </section><div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://tsbsankara.netlify.app">Thomas Sankara</a>.
      </div>
      </>
  );
};

export default BlogCard;
