import Head from "next/head";
import { useRouter } from "next/router";

interface IMeta {
  title: string;
  metaTitle: string;
  description: string;
  image: string;
}

const Meta = ({ title, metaTitle, description, image }: IMeta) => {
  const site = "https://christinaroise.github.io/kron-currency-converter";
  const canonicalURL = site + useRouter().pathname;

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="next-head-count" content="2" />

      {/* Open Graph / Facebook */}
      <meta name="og:type" content="website" />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={canonicalURL} />
      {image && <meta name="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
};
export default Meta;
