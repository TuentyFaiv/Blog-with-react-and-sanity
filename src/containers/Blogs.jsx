import React from 'react';
import { Link } from 'react-router-dom';
import { withBlogs } from '../hoc/withBlogs';

import '../assets/css/Blogs.css';

const sectionBlogs = ({ data: { blogs = [] } } = {}) => (
  <section className="blogs">
    <div className="blogs-grid">
      {
        blogs.map(({ loading, error, _id, title, mainImage: { asset: { url } } = {} }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error!</p>

          return (
            <div key={_id}>
              <Link to={`/blog/${_id}`}>
                <img src={url} alt={url} />
                <h3>{title}</h3>
              </Link>
            </div>
          );
        })
      }
    </div>
  </section>
);

const Blogs = withBlogs(sectionBlogs);

export default Blogs;