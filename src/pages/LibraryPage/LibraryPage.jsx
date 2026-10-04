import { useMemo, useState } from "react";
import { BookIcon } from "../../assets/svg";
import { PageTitle } from "../../components/UI";
import { libraryTitle } from "../../data/pageTitles";
import { useLanguage } from "../../utils/LanguageContext";
import libraryData from "./libaryData";
import "./LibraryPage.scss";

const copy = {
  en: {
    eyebrow: "Parish collection",
    introduction: `This library is a collection of recommended English-language books exploring the Orthodox Christian faith from many perspectives, including theology, spiritual life, Church history, worship, prayer, the lives of the saints, and more. The list was thoughtfully compiled by one of our parishioners as a resource for anyone wishing to learn more about the faith and deepen their understanding of Orthodox Christianity.`,
    searchLabel: "Search the library",
    searchPlaceholder: "Search by author, title, or subject",
    clearSearch: "Clear search",
    books: "books",
    oneBook: "book",
    showing: "Showing",
    categories: "categories",
    noResultsTitle: "No books found",
    noResultsText: "Try a different author, title, or subject.",
  },
  bg: {
    eyebrow: "Енорийска колекция",
    introduction: `Тази библиотека съдържа препоръчани книги на английски език, посветени на различни аспекти на православната вяра – богословие, духовен живот, църковна история, богослужение, молитва, жития на светци и други. Списъкът е внимателно съставен от един от нашите енориаши като полезен източник за всеки, който желае да научи повече за вярата и да задълбочи познанията си за Православието.`,
    searchLabel: "Търсене в библиотеката",
    searchPlaceholder: "Търсене по автор, заглавие или тема",
    clearSearch: "Изчистване на търсенето",
    books: "книги",
    oneBook: "книга",
    showing: "Показани",
    categories: "категории",
    noResultsTitle: "Няма намерени книги",
    noResultsText: "Опитайте с друг автор, заглавие или тема.",
  },
};

function LibraryPage() {
  const language = useLanguage();
  const content = copy[language];
  const [query, setQuery] = useState("");
  const [openCategories, setOpenCategories] = useState(
    () => new Set([libraryData.categories[0].name]),
  );

  const normalizedQuery = query.trim().toLocaleLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) {
      return libraryData.categories;
    }

    return libraryData.categories
      .map((category) => {
        const categoryMatches = category.name
          .toLocaleLowerCase()
          .includes(normalizedQuery);
        const books = categoryMatches
          ? category.books
          : category.books.filter((book) =>
              book.toLocaleLowerCase().includes(normalizedQuery),
            );

        return { ...category, books };
      })
      .filter((category) => category.books.length > 0);
  }, [normalizedQuery]);

  const visibleBookCount = filteredCategories.reduce(
    (total, category) => total + category.books.length,
    0,
  );

  const toggleCategory = (categoryName) => {
    setOpenCategories((currentCategories) => {
      const nextCategories = new Set(currentCategories);

      if (nextCategories.has(categoryName)) {
        nextCategories.delete(categoryName);
      } else {
        nextCategories.add(categoryName);
      }

      return nextCategories;
    });
  };

  const bookCountLabel = (count) =>
    count === 1 ? content.oneBook : content.books;

  return (
    <main className="library-page">
      <PageTitle title={libraryTitle[language]} />

      <div className="library-page__content">
        <header className="library-page__intro">
          <div className="library-page__intro-heading">
            <div className="library-page__book-icon" aria-hidden="true">
              <BookIcon />
            </div>
            <p className="library-page__eyebrow">{content.eyebrow}</p>
          </div>
          <p className="library-page__introduction">{content.introduction}</p>
        </header>

        <section
          className="library-page__search-panel"
          aria-label={content.searchLabel}
        >
          <label
            className="library-page__search-label"
            htmlFor="library-search"
          >
            {content.searchLabel}
          </label>
          <div className="library-page__search-control">
            <input
              id="library-search"
              className="library-page__search-input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={content.searchPlaceholder}
            />
            {query && (
              <button
                className="library-page__clear-search"
                type="button"
                onClick={() => setQuery("")}
                aria-label={content.clearSearch}
              >
                &times;
              </button>
            )}
          </div>
          <p className="library-page__result-count" aria-live="polite">
            {normalizedQuery && `${content.showing} `}
            {visibleBookCount} {bookCountLabel(visibleBookCount)}
            {!normalizedQuery &&
              ` · ${libraryData.categories.length} ${content.categories}`}
          </p>
        </section>

        <div className="library-page__categories">
          {filteredCategories.map((category) => {
            const categoryIndex = libraryData.categories.findIndex(
              ({ name }) => name === category.name,
            );
            const categoryId = `library-category-${categoryIndex}`;
            const isOpen =
              Boolean(normalizedQuery) || openCategories.has(category.name);

            return (
              <section className="library-page__category" key={category.name}>
                <button
                  className="library-page__category-toggle"
                  type="button"
                  onClick={() => toggleCategory(category.name)}
                  aria-expanded={isOpen}
                  aria-controls={categoryId}
                  disabled={Boolean(normalizedQuery)}
                >
                  <span className="library-page__category-name">
                    {category.name}
                  </span>
                  <span className="library-page__category-meta">
                    {category.books.length}{" "}
                    {bookCountLabel(category.books.length)}
                    <span
                      className="library-page__category-symbol"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </span>
                </button>

                {isOpen && (
                  <ol className="library-page__book-list" id={categoryId}>
                    {category.books.map((book, index) => (
                      <li
                        className="library-page__book"
                        key={`${category.name}-${book}`}
                      >
                        <span className="library-page__book-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p>{book}</p>
                      </li>
                    ))}
                  </ol>
                )}
              </section>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="library-page__empty" role="status">
              <h2>{content.noResultsTitle}</h2>
              <p>{content.noResultsText}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default LibraryPage;
