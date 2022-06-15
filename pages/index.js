import Main from "../components/main/Main";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useContext } from "react";
import { useAppContext } from "../context/state";
import { getAllStories } from "./lib/api";

export default function Home({ stories }) {
  const ctx = useContext(useAppContext);
  console.log(stories);

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const stories = (await getAllStories()) || [];

  return {
    props: { stories },
  };
}
