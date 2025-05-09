
export interface Animal {
  id: string;
  name: string;
  latinName: string;
  category: string;
  image: string;
  description: string;
  facts: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'mammals', name: 'Млекопитающие', icon: 'Cat' },
  { id: 'birds', name: 'Птицы', icon: 'Bird' },
  { id: 'reptiles', name: 'Рептилии', icon: 'Skull' },
  { id: 'fishes', name: 'Рыбы', icon: 'Fish' },
  { id: 'insects', name: 'Насекомые', icon: 'Bug' },
  { id: 'amphibians', name: 'Амфибии', icon: 'Droplets' },
];

export const animals: Animal[] = [
  {
    id: 'tiger',
    name: 'Тигр',
    latinName: 'Panthera tigris',
    category: 'mammals',
    image: 'https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    description: 'Тигр — вид хищных млекопитающих семейства кошачьих, один из четырёх представителей рода пантера, который относится к подсемейству больших кошек.',
    facts: [
      'Тигр является самой крупной и тяжёлой из диких кошек, но уступает по размеру льву.',
      'Тигры — отличные пловцы и могут преодолевать вплавь широкие реки.',
      'Полосы на шкуре тигра так же индивидуальны, как отпечатки пальцев у человека.',
      'Тигры способны издавать рычание частотой до 114 децибел, которое слышно на расстоянии до 3 км.',
    ]
  },
  {
    id: 'eagle',
    name: 'Орёл',
    latinName: 'Aquila',
    category: 'birds',
    image: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    description: 'Орлы — хищные птицы семейства ястребиных. Отличаются от других представителей семейства более крупными размерами, мощным телосложением, более коротким хвостом и крупным клювом.',
    facts: [
      'Орлы обладают исключительно острым зрением, которое в 4-8 раз превосходит человеческое.',
      'Орлы строят гнёзда на большой высоте и используют их в течение многих лет.',
      'Самка орла обычно крупнее самца на 25%.',
      'Некоторые виды орлов могут жить до 70 лет.',
    ]
  },
  {
    id: 'crocodile',
    name: 'Крокодил',
    latinName: 'Crocodylidae',
    category: 'reptiles',
    image: 'https://images.unsplash.com/photo-1609343033347-54eff5638e2c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    description: 'Крокодилы — отряд водных пресмыкающихся, вместе с аллигаторами и кайманами образующий группу крокодилов. Это крупные хищники, обитающие в тропических регионах Африки, Азии, Америки и Австралии.',
    facts: [
      'Челюсти крокодила развивают давление до 1,5 тонн, самое мощное в мире животных.',
      'Крокодилы не потеют, поэтому регулируют температуру тела с помощью открытой пасти.',
      'У крокодилов третье веко, которое защищает глаза под водой.',
      'Крокодилы могут обходиться без пищи несколько месяцев.',
    ]
  },
  {
    id: 'dolphin',
    name: 'Дельфин',
    latinName: 'Delphinus',
    category: 'mammals',
    image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    description: 'Дельфины — водные млекопитающие отряда китообразных, подотряда зубатых китов. Отличаются высоким интеллектом, дружелюбным характером и развитой социальной структурой.',
    facts: [
      'Дельфины спят только одним полушарием мозга, чтобы продолжать дышать.',
      'Дельфины используют эхолокацию для навигации и поиска пищи.',
      'Каждый дельфин имеет уникальный свист, которым представляется сородичам — аналог имени.',
      'Дельфины могут развивать скорость до 40 км/ч.',
    ]
  },
  {
    id: 'butterfly',
    name: 'Бабочка',
    latinName: 'Lepidoptera',
    category: 'insects',
    image: 'https://images.unsplash.com/photo-1559291001-693fb9166cba?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    description: 'Бабочки — насекомые с двумя парами крыльев, покрытых чешуйками. Являются одними из самых удивительных представителей мира насекомых благодаря своей красоте и уникальному жизненному циклу.',
    facts: [
      'Бабочки могут видеть ультрафиолетовые цвета, недоступные человеческому глазу.',
      'Бабочки ощущают вкус лапками, а не ртом.',
      'За свою жизнь бабочка проходит полное превращение от яйца до гусеницы, затем куколки и наконец взрослой особи.',
      'Бабочка монарх может мигрировать на расстояние более 4000 км.',
    ]
  },
  {
    id: 'frog',
    name: 'Лягушка',
    latinName: 'Anura',
    category: 'amphibians',
    image: 'https://images.unsplash.com/photo-1551189014-fe516aed0e9e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    description: 'Лягушки — земноводные из отряда бесхвостых. Обитают практически на всех континентах, кроме Антарктиды. Характеризуются коротким туловищем, отсутствием хвоста и длинными задними конечностями.',
    facts: [
      'Лягушки могут дышать через кожу и легкие одновременно.',
      'Некоторые виды лягушек могут замерзать зимой и оживать весной.',
      'Самая маленькая лягушка в мире размером менее 1 см.',
      'Яд некоторых видов лягушек используется в медицине как обезболивающее.',
    ]
  },
];

export const getRandomAnimal = (): Animal => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};

export const getAnimalById = (id: string): Animal | undefined => {
  return animals.find(animal => animal.id === id);
};

export const getAnimalsByCategory = (categoryId: string): Animal[] => {
  return animals.filter(animal => animal.category === categoryId);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const searchAnimals = (query: string): Animal[] => {
  const lowercaseQuery = query.toLowerCase();
  return animals.filter(animal => 
    animal.name.toLowerCase().includes(lowercaseQuery) || 
    animal.latinName.toLowerCase().includes(lowercaseQuery) ||
    animal.description.toLowerCase().includes(lowercaseQuery)
  );
};
