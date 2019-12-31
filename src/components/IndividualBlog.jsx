import React from 'react';
import { urlFor } from '../hoc/UrlFor';

import '../assets/css/Blog.css';

const IndividualBlog = (props) => {
  const {
    title,
    author: { name, twitter } = {},
    mainImage: {
      asset: { url }
    } = {},
    categories = {},
    bodyRaw,
    slug: { current } = {},
    publishedAt
  } = props;

  const publishedDate = publishedAt.replace(/-/g, "/");
  const formatedPublishedDate = publishedDate.split("T");

  return (
    <section className="blog">
      <img className="blog-mainImg" src={url} alt={current} />
      <div className="blog-title-container">
        <h1>{title}</h1>
        <div>
          <span>Author: <a href={twitter} target="_blank">@{name}</a></span>
          {categories.map(({ title }) => <span key={title}>{title}</span>)}
          <span> Publication date: {formatedPublishedDate[0]}</span>
        </div>
      </div>
      <div className="blog-content">
        {
          bodyRaw.map(({ _key, _type, asset, children, style, level, listItem }) => {
            switch (_type) {
              case "image":
                return (
                  <div key={_key}>
                    <img src={urlFor(asset._ref)} alt={asset._ref} />
                  </div>
                );
              case "block":
                if (listItem) {
                  return (
                    <ul key={_key}>
                      <li>{children.map(({ _key, text }) => (
                        text
                      ))}</li>
                    </ul>
                  )
                }

                return (
                  <p key={_key}>
                    {
                      children.map(({ _key, text }) => {
                        return text;
                      })
                    }
                  </p>
                );
              default:
                return <h1>No hay contenido en el blog</h1>;
            }
          })
        }
      </div>
    </section>
  );
};

export default IndividualBlog;