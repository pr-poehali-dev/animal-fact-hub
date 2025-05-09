
import { useParams, Link } from "react-router-dom";
import { getCategoryById, getAnimalsByCategory } from "@/data/animals";
import AnimalCard from "@/components/AnimalCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CategoryPage = () => {
  const { id } = useParams();
  const category = getCategoryById(id || "");
  const animals = getAnimalsByCategory(id || "");

  if (!category) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-playfair font-bold mb-4">Категория не найдена</h2>
        <Button asChild>
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <Link to="/" className="flex items-center gap-2 text-primary hover:underline">
          <Icon name="ChevronLeft" size={16} />
          На главную
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary/10 p-3 rounded-full">
          <Icon name={category.icon} size={32} className="text-primary" />
        </div>
        <h1 className="font-playfair font-bold text-3xl">{category.name}</h1>
      </div>

      {animals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {animals.map((animal) => (
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
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600">В этой категории пока нет животных</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
