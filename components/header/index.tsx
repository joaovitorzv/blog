import { useEffect, useState } from "react";
import Link from "next/link";

import { useToggle } from "../../utils/useToggle";
import styles from "./Header.module.css";
import { PostsLangFilterContext } from "../../hooks/FilterContext";

const Header = () => {
  const [socialHidden, setSocialHidden] = useToggle();
  const [pinned, setPinned] = useState(false);
  const [navOffsetTop, setNavOffsetTop] = useState(66);

  useEffect(() => {
    const nav = document.getElementById("navigation");
    setNavOffsetTop(nav ? nav.offsetTop : 66);

    const handlePin = () => {
      if (window.pageYOffset >= navOffsetTop) return setPinned(true);
      if (window.pageYOffset <= navOffsetTop) return setPinned(false);
    };

    document.addEventListener("scroll", handlePin);
    return () => document.removeEventListener("scroll", handlePin);
  }, [navOffsetTop]);

  return (
    <PostsLangFilterContext.Consumer>
      {({ selectedLangFilter, changeLangFilter }) => (
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1>
              {"() =>  "}
              <button className={styles.hideLinksBtn} onClick={setSocialHidden}>
                @joaovitorzv
              </button>{" "}
              blog.
            </h1>
          </div>
          <nav id="navigation" className={pinned ? styles.pinnedNav : ""}>
            <div className={styles.navContent}>
              <div className={styles.links}>
                <Link href="/">
                  <a>Home</a>
                </Link>
                <div
                  className={
                    socialHidden ? styles.externalLink : styles.hiddenLink
                  }
                >
                  <a
                    className={styles.link}
                    href="https://www.github.com/joaovitorzv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <svg
                    fill="#374151"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="14px"
                    height="18px"
                  >
                    <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" />
                  </svg>
                </div>

                <div
                  className={
                    socialHidden ? styles.externalLink : styles.hiddenLink
                  }
                >
                  <a
                    className={styles.link}
                    href="https://www.linkedin.com/in/jo%C3%A3o-vitor-veras-165045186/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <svg
                    fill="#374151"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="14px"
                    height="18px"
                  >
                    <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" />
                  </svg>
                </div>
              </div>
              <div>
                <select
                  name="langs"
                  defaultValue={selectedLangFilter}
                  onChange={(e) => {
                    changeLangFilter(e.target.value);
                    document.documentElement.lang =
                      e.target.value === "all" ? "en" : e.target.value;
                  }}
                >
                  <option value="all">All languages</option>
                  <option value="en-US">English</option>
                  <option value="pt-BR">Português</option>
                </select>
              </div>
            </div>
          </nav>
        </header>
      )}
    </PostsLangFilterContext.Consumer>
  );
};

export default Header;
