
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Icon name="Paw" size={24} className="text-primary" />
            <span className="font-playfair font-bold text-xl">Animal Fact Hub</span>
          </div>

          <div className="flex gap-6 mb-4 md:mb-0">
            <Link to="/about" className="hover:text-primary transition-colors">О сайте</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Контакты</Link>
          </div>

          <div className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Animal Fact Hub. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
