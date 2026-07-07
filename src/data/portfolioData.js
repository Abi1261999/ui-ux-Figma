import heroPortrait from '../assets/pdf-image-1.png';
import portfolioProject from '../assets/projects/frame17/frame17-source-3.png';
import fashionMobileProject from '../assets/projects/frame17/frame17-source-2.png';
import realEstateProject from '../assets/projects/frame17/frame17-source-1.png';
import managementProject from '../assets/projects/frame19/frame19-source-3.png';
import fashionShopProject from '../assets/projects/frame19/frame19-source-2.png';
import petProject from '../assets/projects/frame19/frame19-source-1.png';
import figmaIcon from '../assets/skills/figma-icon.png';
import xdIcon from '../assets/skills/xd-icon.png';
import afterEffectsIcon from '../assets/skills/after-effects-icon.png';
import photoshopIcon from '../assets/skills/photoshop-icon.png';
import html5Icon from '../assets/skills/html5-icon.png';
import css3Icon from '../assets/skills/css3-icon.png';
import serviceImage from '../assets/services/services-image-source-1.png';

export const images = {
  profile: heroPortrait,
  service: serviceImage,
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
  { label: 'figma', icon: figmaIcon },
  { label: 'Xd', icon: xdIcon },
  { label: 'Af effects', icon: afterEffectsIcon },
  { label: 'Photoshop', icon: photoshopIcon },
  { label: 'html5', icon: html5Icon },
  { label: 'Css3', icon: css3Icon },
];

export const services = [
  {
    title: 'User Experience (UX)',
    description:
      'A dedicated UI/UX designer passionate about creating captivating digital experiences. With a keen eye for detail and a love for problem-solving,',
    bullets: ['Persona', 'Persona', 'Persona', 'Persona'],
  },
  {
    title: 'Front-End Development',
  },
  {
    title: 'User Experience (UX)',
  },
  {
    title: 'Website Optimization',
  },
  {
    title: 'User Interface (UI) Design',
  },
];
