import Link from "next/link";
import navigation from "../styles/components/Layout.module.scss";

export default function Navigation({ children }) {
  return (
    <div className={navigation.container}>
      <div className={navigation.navigation}>
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}
