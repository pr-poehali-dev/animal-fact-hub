
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface CategoryCardProps {
  id: string;
  name: string;
  icon: string;
}

const CategoryCard = ({ id, name, icon }: CategoryCardProps) => {
  return (
    <Link to={`/category/${id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-primary/5 h-full">
        <CardContent className="flex items-center gap-3 p-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Icon name={icon} size={24} className="text-primary" />
          </div>
          <h3 className="font-medium text-lg">{name}</h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
