import Link from "next/link";
import { notFound } from "next/navigation";
import { DetailHeading } from "../../detail-heading";
import { PageMain } from "../../page-main";
import { SiteHeader } from "../../site-shell";
import { articles, categories } from "../articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

async function getArticle(params) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return article;
}

export async function generateMetadata({ params }) {
  const article = await getArticle(params);
  return { title: article.title, description: article.excerpt };
}

export default async function BlogDetailPage({ params }) {
  const article = await getArticle(params);
  const related = articles.filter((item) => item.slug !== article.slug);

  return (
    <>
      <SiteHeader title="Blog Detail" parent={{ href: "/blog", label: "Blog" }} />
      <PageMain className="container py-5">
        <div className="row g-5">
          <article className="col-lg-8">
            <div className="mb-5" data-section-reveal="stagger">
              <img className="img-fluid w-100 rounded mb-5" src={article.image} alt="" />
              <p className="text-primary fw-bold text-uppercase mb-2">{article.category}</p>
              <h2 className="mb-4">{article.title}</h2>
              <p className="lead">{article.excerpt}</p>
              {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <section className="bg-light rounded p-4 p-lg-5" data-section-reveal="scale" aria-label="Comments">
              <DetailHeading>Leave a Comment</DetailHeading>
              <p className="mb-0">Comments are currently closed.</p>
            </section>
          </article>
          <aside className="col-lg-4">
            <div className="mb-5" data-section-reveal="split">
              <form action="/blog" role="search" aria-label="Search blog posts">
                <label className="visually-hidden" htmlFor="detail-search">Search blog posts</label>
                <div className="input-group">
                  <input id="detail-search" type="search" name="q" className="form-control p-3" placeholder="Keyword" />
                  <button className="btn btn-primary px-4" type="submit" aria-label="Search">
                    <i className="bi bi-search" aria-hidden="true" />
                  </button>
                </div>
              </form>
            </div>
            <div className="mb-5" data-section-reveal="stagger">
              <DetailHeading>Categories</DetailHeading>
              <nav className="link-animated d-flex flex-column gap-2" aria-label="Blog categories">
                {categories.map((category) => (
                  <Link className="h5 bg-light rounded py-2 px-3 mb-0" href={{ pathname: "/blog", query: { category } }} key={category}>
                    <i className="bi bi-arrow-right me-2" aria-hidden="true" />{category}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="mb-5" data-section-reveal="stagger">
              <DetailHeading>Recent Posts</DetailHeading>
              <div className="d-grid gap-3">
                {related.map((item) => (
                  <Link href={`/blog/${item.slug}`} key={item.slug} className="d-flex align-items-stretch bg-light rounded overflow-hidden">
                    <img src={item.image} alt="" width="96" height="80" className="detail-thumbnail" loading="lazy" />
                    <span className="h5 align-self-center p-3 mb-0">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link className="btn btn-primary" href="/blog">All Blog Posts</Link>
          </aside>
        </div>
      </PageMain>
    </>
  );
}
