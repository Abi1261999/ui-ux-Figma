import heroPortrait from '../assets/pdf-image-1.png';
import portfolioProject from '../assets/projects/project-source-5.png';
import fashionMobileProject from '../assets/projects/project-source-3.png';
import realEstateProject from '../assets/projects/project-source-6.png';
import managementProject from '../assets/projects/project-source-2.png';
import fashionShopProject from '../assets/projects/project-source-4.png';
import petProject from '../assets/projects/project-source-1.png';

export const images = {
  profile: heroPortrait,
  service:
    'https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?auto=format&fit=crop&w=900&q=80',
  testimonial:
    'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80',
};

export const navigationItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#contact' },
  { label: 'Contact', href: '#contact' },
];

export const projects = [
  {
    number: '01',
    title: 'Portflio',
    tags: ['UI-UX Designer', 'Product Design'],
    image: portfolioProject,
    imageAlt: 'Portfolio website design screens',
  },
  {
    number: '02',
    title: 'fashion App',
    tags: ['UI-UX Designer', 'Product Design'],
    image: fashionMobileProject,
    imageAlt: 'Fashion mobile app design screens',
  },
  {
    number: '03',
    title: 'Real State web',
    tags: ['UI-UX Designer', 'Product Design'],
    image: realEstateProject,
    imageAlt: 'Real estate website dashboard design',
  },
  {
    number: '03',
    title: 'Mangement Web',
    tags: ['Ui Design', 'Prototyping'],
    image: managementProject,
    imageAlt: 'Management web app dashboard design',
  },
  {
    number: '04',
    title: 'fashion App',
    tags: ['UI-UX Designer', 'Product Design'],
    image: fashionShopProject,
    imageAlt: 'Fashion ecommerce website design',
  },
  {
    number: '06',
    title: 'Pet App',
    tags: ['UI-UX Designer', 'Product Design'],
    image: petProject,
    imageAlt: 'Pet app and website selected work screens',
  },
];

export const skills = [
  { label: 'Figma', color: '#ff7262' },
  { label: 'Xd', color: '#ff61f6' },
  { label: 'Ae', color: '#9f7aea' },
  { label: 'Ps', color: '#31a8ff' },
  { label: 'Html5', color: '#f16529' },
  { label: 'Css3', color: '#2965f1' },
];

export const services = [
  'User Experience (UX)',
  'Research And Development',
  'User Experience (UX)',
  'Website Optimization',
  'User Interface (UI) Design',
];
