
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="Paw" size={32} className="text-primary" />
          <span className="text-2xl font-playfair font-bold text-primary">Animal Fact Hub</span>
        </Link>
        
        <nav className="flex flex-wrap gap-4 md:gap-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">Главная</Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">О сайте</Link>
          <Link to="/contact" className="font-medium hover:text-primary transition-colors">Контакты</Link>
        </nav>

        <form onSubmit={handleSearch} className="flex w-full md:w-auto">
          <Input
            type="search"
            placeholder="Поиск животных..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-r-none"
          />
          <Button type="submit" className="rounded-l-none">
            <Icon name="Search" size={18} />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
