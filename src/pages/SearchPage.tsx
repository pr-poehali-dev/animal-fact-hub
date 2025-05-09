
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { searchAnimals } from "@/data/animals";
import AnimalCard from "@/components/AnimalCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const searchResults = searchAnimals(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div>
      <div className="mb-6">
        <Link to="/" className="flex items-center gap-2 text-primary hover:underline">
          <Icon name="ChevronLeft" size={16} />
          На главную
        </Link>
      </div>

      <h1 className="font-playfair font-bold text-3xl mb-6">
        {query ? `Результаты поиска: ${query}` : "Поиск"}
      </h1>

      {query && (
        <div className="mb-6">
          <p className="text-gray-600">
            {results.length > 0
              ? `Найдено ${results.length} результатов`
              : "Ничего не найдено"}
          </p>
        </div>
      )}

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((animal) => (
            <AnimalCard
              key={animal.id}
              id={animal.id}
              name={animal.name}
              image={animal.image}
              fact={animal.description}
            />
          ))}
        </div>
      ) : (
        query && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <Icon name="Search" size={48} className="mx-auto mb-4 text-gray-300" />
            <p className="text-gray-600 mb-4">
              По запросу "{query}" ничего не найдено
            </p>
            <Button asChild>
              <Link to="/">Вернуться на главную</Link>
            </Button>
          </div>
        )
      )}

      {!query && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Icon name="Search" size={48} className="mx-auto mb-4 text-gray-300" />
          <p className="text-gray-600">
            Введите поисковый запрос в поле поиска выше
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
