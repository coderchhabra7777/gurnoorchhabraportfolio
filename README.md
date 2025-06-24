# Gurnoor Chhabra - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my professional experience, skills, projects, and achievements.

## 🚀 Features

- **Modern Design**: Clean, minimalistic design with smooth animations
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between dark and light themes with preference persistence
- **Interactive Animations**: Smooth animations using Framer Motion
- **Performance Optimized**: Fast loading with optimized assets and lazy loading
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons, Simple Icons)
- **Build Tool**: Create React App
- **Deployment**: Ready for Vercel/Netlify

## 📱 Sections

1. **Hero Section**: Animated introduction with typewriter effect
2. **About Me**: Personal introduction with stats and achievements
3. **Skills**: Technical skills with animated progress bars
4. **Experience**: Professional timeline with company details
5. **Achievements**: Coding profiles and notable accomplishments
6. **Projects**: Featured projects with detailed modals
7. **Contact**: Contact form and social links
8. **Footer**: Additional links and information

## 🎯 Key Highlights

- **Interactive Coding Profiles**: Direct links to LeetCode, CodeChef, Codeforces
- **Project Showcase**: 6 featured projects with detailed descriptions
- **Professional Experience**: Timeline of internships at Uber, CRED, and Cisco
- **Achievement Gallery**: Notable accomplishments and competition results
- **Contact Form**: Functional contact form with validation
- **Resume Download**: Direct PDF download functionality

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gurnoorchhabra/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Hero.js            # Hero section with animations
│   ├── About.js           # About me section
│   ├── Skills.js          # Skills showcase
│   ├── Experience.js      # Professional timeline
│   ├── Achievements.js    # Coding profiles & achievements
│   ├── Projects.js        # Project showcase with modals
│   ├── Contact.js         # Contact form and info
│   └── Footer.js          # Footer component
├── App.js                 # Main app component
├── index.js              # Entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue gradient
- Dark mode: Custom dark color palette
- Accent colors: Purple gradients

### Content
Update personal information in the respective component files:
- Contact details in `Contact.js` and `Footer.js`
- Professional experience in `Experience.js`
- Projects in `Projects.js`
- Skills in `Skills.js`

### Animations
Animations are powered by Framer Motion and can be customized in each component's variants object.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Dark mode is implemented with:
- Tailwind CSS dark mode classes
- Local storage persistence
- System preference detection
- Smooth transitions

## 📊 Performance Features

- Intersection Observer for scroll animations
- Lazy loading for images
- Optimized bundle size
- Smooth scrolling navigation
- Efficient re-renders with React hooks

## 🔗 Links

- **Live Demo**: [Portfolio Website](https://gurnoor-portfolio.vercel.app)
- **GitHub**: [Source Code](https://github.com/gurnoorchhabra/portfolio-website)
- **LinkedIn**: [Gurnoor Chhabra](https://linkedin.com/in/gurnoor-chhabra)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/gurnoorchhabra/portfolio-website/issues).

## 📞 Contact

Gurnoor Chhabra - [chhabragurnoor@gmail.com](mailto:chhabragurnoor@gmail.com)

Project Link: [https://github.com/gurnoorchhabra/portfolio-website](https://github.com/gurnoorchhabra/portfolio-website)

---

⭐ Star this repo if you found it helpful!
