
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAnimalById, getCategoryById } from "@/data/animals";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AnimalPage = () => {
  const { id } = useParams();
  const animal = getAnimalById(id || "");
  const category = animal ? getCategoryById(animal.category) : undefined;
  
  // Для корректного поведения при прямом открытии страницы через URL
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return <div className="flex justify-center py-12">Загрузка...</div>;
  }

  if (!animal) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-playfair font-bold mb-4">Животное не найдено</h2>
        <Button asChild>
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link 
          to={category ? `/category/${category.id}` : "/"} 
          className="flex items-center gap-2 text-primary hover:underline mb-2"
        >
          <Icon name="ChevronLeft" size={16} />
          {category ? `К категории ${category.name}` : "На главную"}
        </Link>
      </div>

      <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="aspect-video w-full">
          <img 
            src={animal.image} 
            alt={animal.name} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="font-playfair font-bold text-3xl md:text-4xl mb-2">{animal.name}</h1>
          <p className="text-gray-600 italic">{animal.latinName}</p>
        </div>

        <div>
          <h2 className="font-playfair font-bold text-xl mb-3">Описание</h2>
          <p className="text-gray-700">{animal.description}</p>
        </div>

        <div>
          <h2 className="font-playfair font-bold text-xl mb-3">Интересные факты</h2>
          <ul className="space-y-2">
            {animal.facts.map((fact, index) => (
              <li key={index} className="flex gap-2">
                <Icon name="Check" className="text-primary mt-1 shrink-0" size={16} />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center pt-4">
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Icon name="Share2" size={16} />
              Поделиться
            </Button>
            <Button variant="outline" className="gap-2">
              <Icon name="Bookmark" size={16} />
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalPage;
