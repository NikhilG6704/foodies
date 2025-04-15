"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to fetch meal data, pease try again later</p>
    </main>
  );
}
