import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "../../components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste &amp; share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Foodies is a platform where users can easily upload, share, and
            explore recipes from around the world. Simply create an account,
            post your favorite dishes, and engage with a vibrant community of
            fellow food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Foodies?</h2>
          <p>
            Foodies isn&apos;t just a recipe app — it&apos;s a community.
            Whether you&apos;re a home cook or a professional chef, Foodies
            helps you connect, get inspired, and discover flavors from different
            cultures. Join to share your passion and learn something new every
            day.
          </p>
        </section>
      </main>
    </>
  );
}
