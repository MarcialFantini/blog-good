import styles from "./page.module.css";
import HeaderHome from "@/components/Header";
import RowBlog from "@/components/RowBlog";
import { TopCategories } from "@/components/TopCategories";
import { TrendingCategories } from "@/components/TrendingCategories";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderHome></HeaderHome>
      <RowBlog
        url={"http://localhost:5000/api/v1/blogs/last"}
        titleCategory="LATEST ARTICLES"
      ></RowBlog>
      <TopCategories></TopCategories>
      <TrendingCategories></TrendingCategories>
    </main>
  );
}
