"use client";

import { useState } from "react";

import Link from "next/link";
import { articles, categories } from "./articles";

export function BlogList({ initialKeyword, initialCategory }) {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [category, setCategory] = useState(initialCategory);
  const query = keyword.trim().toLowerCase();
  const visible = articles.filter((article) =>
    (!category || article.category === category) &&
    [article.title, article.category, article.excerpt].some((text) => text.toLowerCase().includes(query))
  );

  return (
    <div className="row g-5">
      <div data-section-reveal="stagger" className="col-lg-8">
        <div className="row g-5" id="blog-posts">
          {visible.map((article) => (
            <article className="col-md-6" key={article.title}>
              <div className="blog-item bg-light rounded overflow-hidden h-100">
                <div className="blog-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={article.image} alt="" loading="lazy" />
                  <span className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4">{article.category}</span>
                </div>
                <div className="p-4">
                  <h2 className="h4 mb-3">{article.title}</h2>
                  <p>{article.excerpt}</p>
                  <Link className="text-uppercase" href={`/blog/${article.slug}`}>Read more<span className="visually-hidden"> about {article.title}</span> <i className="bi bi-arrow-right" aria-hidden="true" /></Link>
                </div>
              </div>
            </article>
          ))}
          {visible.length === 0 && <p role="status">No posts match your search.</p>}
        </div>
      </div>
      <aside data-section-reveal="split" className="col-lg-4">
        <div className="mb-5">
          <label className="form-label fw-bold" htmlFor="blog-search">Search blog posts</label>
          <input className="form-control p-3" id="blog-search" type="search" value={keyword} onChange={(event) => setKeyword(event.target.value)} aria-controls="blog-posts" />
        </div>
        <div className="section-title-1 section-title-sm position-relative pb-3 mb-4">
          <h2 className="h3 mb-0">Categories</h2>
        </div>
        <div className="d-grid gap-2">
          {["", ...categories].map((name) => (
            <button className={"btn text-start " + (category === name ? "btn-primary" : "btn-light")} aria-pressed={category === name} aria-controls="blog-posts" key={name} onClick={() => setCategory(name)} type="button">
              <i className="bi bi-arrow-right me-2" aria-hidden="true" />{name || "All posts"}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
