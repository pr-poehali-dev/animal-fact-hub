
import { useState, useEffect } from "react";
import { getRandomAnimal, categories } from "@/data/animals";
import AnimalCard from "@/components/AnimalCard";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HomePage = () => {
  const [randomAnimal, setRandomAnimal] = useState(getRandomAnimal());

  const handleNewRandom = () => {
    setRandomAnimal(getRandomAnimal());
  };

  // Обновлять случайное животное каждые 60 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      handleNewRandom();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-12">
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-playfair font-bold">Случайное животное</h2>
          <Button onClick={handleNewRandom} variant="outline" className="gap-2">
            <Icon name="RefreshCw" size={16} />
            Другое
          </Button>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <AnimalCard 
            id={randomAnimal.id}
            name={randomAnimal.name}
            image={randomAnimal.image}
            fact={randomAnimal.description}
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-playfair font-bold mb-6">Категории животных</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(category => (
            <CategoryCard 
              key={category.id}
              id={category.id}
              name={category.name}
              icon={category.icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
