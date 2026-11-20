import { PageMain } from "../page-main";
import { SiteHeader } from "../site-shell";
import { BlogList } from "./blog-list";

export const metadata = { title: "Blog" };

export default async function BlogPage({ searchParams }) {
  const { q, category } = await searchParams;
  const initialKeyword = typeof q === "string" ? q : "";
  const initialCategory = typeof category === "string" ? category : "";

  return (
    <>
      <SiteHeader title="Blog" />
      <PageMain className="container py-5">
        <BlogList key={JSON.stringify([initialKeyword, initialCategory])} initialKeyword={initialKeyword} initialCategory={initialCategory} />
      </PageMain>
    </>
  );
}
