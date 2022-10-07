import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>comma - About</title>
        <meta name="title" content="comma - About" />
        <meta
          name="description"
          content="comma - About"
        />
      </Head>
      <span className="flex justify-center items-center mb-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
        About Page
      </span>
    </div>
  );
}

