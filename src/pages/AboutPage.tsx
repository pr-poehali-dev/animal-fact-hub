
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <Link to="/" className="flex items-center gap-2 text-primary hover:underline">
          <Icon name="ChevronLeft" size={16} />
          На главную
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="font-playfair font-bold text-3xl mb-2">О сайте</h1>
        <p className="text-gray-600">Узнайте больше о проекте Animal Fact Hub</p>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="font-playfair font-bold text-xl mb-4">Наша миссия</h2>
          <p className="text-gray-700 mb-4">
            Animal Fact Hub создан с целью предоставить интересную и образовательную информацию о животных со всего мира. Наша миссия — пробудить интерес к биологическому разнообразию планеты и способствовать распространению знаний о природе.
          </p>
          <p className="text-gray-700">
            Мы стремимся собрать обширную коллекцию фактов о различных видах животных, от широко известных до редких и необычных, чтобы помочь нашим посетителям узнать больше об удивительном мире фауны.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="font-playfair font-bold text-xl mb-4">Наши материалы</h2>
          <p className="text-gray-700 mb-4">
            Все факты на нашем сайте тщательно отбираются и проверяются. Мы сотрудничаем с биологами, зоологами и любителями природы, чтобы предоставить вам достоверную и актуальную информацию.
          </p>
          <p className="text-gray-700">
            Фотографии животных взяты из открытых источников с соблюдением авторских прав. Мы стараемся использовать только качественные изображения, которые наилучшим образом представляют каждый вид.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="font-playfair font-bold text-xl mb-4">Планы развития</h2>
          <p className="text-gray-700 mb-4">
            Мы постоянно работаем над расширением нашей базы данных животных и улучшением функциональности сайта. В будущем мы планируем:
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <Icon name="Check" className="text-primary mt-1 shrink-0" size={16} />
              <span>Добавить подробные описания для всех категорий животных</span>
            </li>
            <li className="flex gap-2">
              <Icon name="Check" className="text-primary mt-1 shrink-0" size={16} />
              <span>Создать интерактивные карты ареалов обитания</span>
            </li>
            <li className="flex gap-2">
              <Icon name="Check" className="text-primary mt-1 shrink-0" size={16} />
              <span>Добавить раздел с видеоматериалами</span>
            </li>
            <li className="flex gap-2">
              <Icon name="Check" className="text-primary mt-1 shrink-0" size={16} />
              <span>Разработать мобильное приложение</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
