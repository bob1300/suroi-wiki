import fs from "fs/promises";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const HEAD = await fs.readFile(".git/modules/vendor/suroi/HEAD", "utf8");

  return (
    <main>
      <div className="prose prose-invert">
        <h1>Suroi Autogenerated Wiki</h1>
        <div className="flex justify-center">
          <Image
            src="/img/suroi.svg"
            alt="Suroi Battle Royale"
            width={750 / 2}
            height={300 / 2}
          />
        </div>
        <div className="p-2 rounded-lg bg-secondary">
          <p>
            <b>Note:</b> This wiki is unofficial and community run!
          </p>
        </div>
        <p>
          Welcome to the Suroi Autogenerated Wiki! This wiki provides basic
          statistics about items{" "}
          <a href="https://suroi.io" target="_blank">
            suroi.io
          </a>
          . This wiki is open-source and community run. Feel free to contribute
          at{" "}
          <a href="https://github.com/Compositr/suroiautowiki" target="_blank">
            the GitHub repo
          </a>
          .
        </p>
        <p>
          Based off <span className="font-mono">vendor/suroi</span> commit{" "}
          <span className="font-mono">{HEAD}</span>
        </p>
        <h2>Notable Pages</h2>
        <p>
          <i>More coming soon™</i>
        </p>
        <ul>
          <li>
            <Link href="/weapons">List of Weapons</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}