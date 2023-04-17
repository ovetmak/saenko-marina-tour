import img1 from './images/tour-1.jpeg'
import img2 from './images/tour-2.jpeg'
import img3 from './images/tour-3.jpeg'
import img4 from './images/tour-4.jpeg'
import img5 from './images/tour-5.jpeg'
import img6 from './images/tour-6.jpeg'
import img7 from './images/tour-7.jpeg'
import img8 from './images/tour-8.jpeg'
import img9 from './images/tour-9.jpeg'
import img10 from './images/tour-10.jpeg'

import house1 from './images/house/outside2.jpeg'
import house2 from './images/house/outside3.jpeg'
import house3 from './images/house/living room.jpeg'
import house4 from './images/house/dining room.jpeg'
import house5 from './images/house/terrace.jpeg'
import house6 from './images/house/terrace 2.jpeg'
import house7 from './images/house/pool.jpeg'
import house8 from './images/house/sea view.jpeg'
import house9 from './images/house/room first floor.jpeg'
import house10 from './images/house/blue room first floor.jpeg'
import house11 from './images/house/cream room first floor.jpeg'
import house12 from './images/house/outside 4.jpeg'

const navLinks = [
  { id: 1, href: '#home', text: 'головна' },
  { id: 2, href: '#about', text: 'про мене' },
  { id: 3, href: '#services', text: 'вартість' },
  { id: 4, href: '#tours', text: 'програма' },
  { id: 5, href: '#carousel', text: 'будинок' },
]

export default navLinks

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.instagram.com/saenkomarina/',
    icon: 'fab fa-instagram',
  },
  {
    id: 2,
    href: 'https://www.facebook.com/marina.saenko.14',
    icon: 'fab fa-facebook',
  },
]

export const servicesData = [
  {
    id: 1,
    h4: 'вартість туру',
    p: '1399€ при розміщенні в двохмісній кімнаті, 1599€ при розміщенні в індивідуальній кімнаті з великим ліжком',
    icon: 'fas fa-wallet fa-fw',
  },
  {
    id: 2,
    h4: 'що входить у вартість',
    p: 'вартість туру включає: трансфер з/до аеропорту, проживання в класичному каталанському будинку з видом на море та басейном, триразове харчування, екскурсії та обовʼязково щоденні тренування :)',
    icon: 'fas fa-medal fa-fw',
  },
  {
    id: 3,
    h4: 'що НЕ входить у вартість',
    p: 'квитки до Барселони, туристичне страхування (обовʼязково)',
    icon: 'fas fa-square-xmark fa-fw',
  },
]

export const toursData = [
  {
    id: 1,
    img: img1,
    date: '9 травня, 2023',
    h4: 'Поселення. Знайомство',
    text: 'В цей день Ми з Вами нарешті зустрінемось та розмістимось в наш будинок. За вечерею дізнаємось трошки більше про Вас та смачно поїмо :) ',
    length: '1 день',
    price: '+500 kcal',
  },
  {
    id: 2,
    img: img2,
    date: '10 травня, 2023',
    h4: 'Схід сонця. Початок тренувань',
    text: 'Наш ранок розпочнемо зі сходу сонця на вершині. Після поснідаємо та трошки відпочинемо біля басейну. Після обіду прогуляємось нашим затишним містечком, а ввечері добряче потренуємось - треба ж колись починати :)',
    length: '2 день',
    price: '-500kcal',
  },
  {
    id: 3,
    img: img4,
    date: '11 травня, 2023',
    h4: 'Тренування. Відпочинок. Пробіжка',
    text: 'Щоб бути готовими до літа Ми продовжимо тренуватись в цей день, хоч і матимемо добрячу крепатуру. Але, як то кажуть "No pain, no gain". Проте і віпочивати біля басейну будемо також. Ввечері трошки пробіжимося.',
    length: '3 день',
    price: '-700kcal',
  },
  {
    id: 4,
    img: img3,
    date: '12 травня, 2023',
    h4: 'Пробіжка. Барселона. Stretching',
    text: 'Цей ранок почнемо з пробіжки біля моря. Поснідає та віправимось на екскурсію Барселоною, з гідом Олександрою, яка любить це місто навіть більше ніж я. В місті Ми обовʼязково поїмо чогось смачненького, місцевого. Ввечері трошки потягнемось.',
    length: '4 день',
    price: '-250kcal',
  },
  {
    id: 5,
    img: img5,
    date: '13 травня, 2023',
    h4: 'Погулянка в гори. Місто сюрприз. Recovery',
    text: 'Ранок почнемо енергійно - прогулянкою в гори. Після сніданку поїдемо в дивовижне місто, яке я просто обожнюю, впевнена Вам воно теж дуже сподобається. Ввчері повернемося додому і гарно відновимо наші мʼязи на Recovery',
    length: '5 день',
    price: '-1100kcal',
  },
  {
    id: 6,
    img: img6,
    date: '14 травня, 2023',
    h4: 'Пробіжка. Пляж. Вільний час',
    text: 'Легенько пробіжимося біля моря і одразу в море (що, може бути краще?). В цей день Ми будемо ніжитись на сонечку, а після обіду матимемо вільний час і проведемо його з задоволенням',
    length: '6 день',
    price: '-600kcal',
  },
  {
    id: 7,
    img: img7,
    date: '15 травня, 2023',
    h4: 'Похід в Піренеї',
    text: 'Вранці, після сніданку Ми відправимось в гірський похід, в Піренеї, піднімимось на висоту близько 2000 метрів. На горі нас чекатиме багато цікавого. Донизу повернемось на гірському потязі',
    length: '7 день',
    price: '-1500kcal',
  },
  {
    id: 8,
    img: img8,
    date: '16 травня, 2023',
    h4: 'Тренування. Шопінг. Stretching',
    text: 'Цей день буде нагородою за наші тренування, в цей день буде шопінг! Тільки перед цим потренуємось і після цього також :)',
    length: '8 день',
    price: '-700kcal',
  },
  {
    id: 9,
    img: img9,
    date: '17 травня, 2023',
    h4: 'Прогулянка біля моря. Захід сонця в Барселоні',
    text: 'Зранку прогуляємося біля моря. Поснідаємо. Проведемо час за власним бажання. А ввчері відправимося на понораму в Барселону і там зустрінемо, чи скоріше проведемо захід сонця. ',
    length: '9 день',
    price: '-300kcal',
  },
  {
    id: 10,
    img: img10,
    date: '18 травня, 2023',
    h4: 'Тренування і прощання',
    text: 'Нажаль настане цей день, коли Ми будемо з Вами обійматись і прощатись. Ви поїдете, а я буду за Вами сумувати. Я буду дуже сподіватись що Вам все сподобалось і чекатиму на Вас знову :-*',
    length: '10 день',
    price: '-300kcal',
  },
]

export const housePhotos = [
  {
    image: house1,
    caption: '',
  },
  {
    image: house2,
    caption: '',
  },
  {
    image: house3,
    caption: '',
  },
  {
    image: house4,
    caption: '',
  },
  {
    image: house5,
    caption: '',
  },
  {
    image: house6,
    caption: '',
  },
  {
    image: house7,
    caption: '',
  },
  {
    image: house8,
    caption: '',
  },
  {
    image: house9,
    caption: '',
  },
  {
    image: house10,
    caption: '',
  },
  {
    image: house11,
    caption: '',
  },
  {
    image: house12,
    caption: '',
  },
]
