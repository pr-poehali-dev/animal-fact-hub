
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AnimalCardProps {
  id: string;
  name: string;
  image: string;
  fact: string;
  compact?: boolean;
}

const AnimalCard = ({ id, name, image, fact, compact = false }: AnimalCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <CardContent className="py-4 flex-grow">
        <h3 className="font-playfair font-bold text-xl mb-2">{name}</h3>
        {!compact && <p className="text-gray-700 line-clamp-3">{fact}</p>}
        {compact && <p className="text-gray-700 line-clamp-1">{fact}</p>}
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link to={`/animal/${id}`}>Узнать больше</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AnimalCard;
