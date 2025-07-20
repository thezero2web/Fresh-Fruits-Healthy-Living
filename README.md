# 🍎 Fresh Fruits & Healthy Living Website

A modern, responsive website showcasing fresh fruits, vegetables, herbs, and seeds with educational content about nutrition and healthy living.

## 🌟 Features

### 🎨 **Modern Design**
- Responsive design that works on all devices
- Beautiful gradient backgrounds and smooth animations
- Interactive cards with hover effects
- AOS (Animate On Scroll) library integration

### 🍎 **Fruits Section**
- Interactive fruit cards with local images
- Detailed nutritional information
- Seasonal availability
- Health benefits and usage tips
- Search and filter functionality

### 🌱 **Seeds & Superfoods**
- Comprehensive seed information
- Nutritional calculators
- Health benefits and usage guides
- Interactive nutrition tracking

### 🌿 **Herbs & Spices**
- Medicinal herb information
- Tea blend calculator
- Usage recommendations
- Health benefits and preparation tips

### 🥕 **Vegetables**
- Fresh vegetable showcase
- Nutritional facts and benefits
- Cooking tips and recipes
- Interactive nutrition calculator

### 🔍 **Interactive Features**
- Search functionality across all categories
- Modal dialogs for detailed information
- Contact forms with validation
- Theme toggle (light/dark mode)
- Smooth scrolling navigation

## 📁 Project Structure

```
Fruits website/
├── src/
│   ├── img/
│   │   ├── background/
│   │   ├── fruits/
│   │   ├── herbs/
│   │   ├── logo/
│   │   ├── seeds/
│   │   └── vegetable/
│   ├── index.html
│   ├── js/
│   │   ├── fruits.js
│   │   ├── herbs.js
│   │   ├── main.js
│   │   ├── seeds.js
│   │   └── vegetable.js
│   ├── pages/
│   │   ├── about.html
│   │   ├── contact.html
│   │   ├── fruits.html
│   │   ├── herbs.html
│   │   ├── minerals.html
│   │   ├── ourplan.html
│   │   ├── protein.html
│   │   ├── seeds.html
│   │   ├── vegetables.html
│   │   └── vitamin.html
│   └── style/
│       └── style.css
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript
- Git (for version control)

### Installation

1. **Clone or Download the Project**
   ```bash
   git clone https://github.com/yourusername/fruits-website.git
   cd fruits-website
   ```

2. **Open the Website**
   - Navigate to the `src` folder
   - Open `index.html` in your web browser
   - Or use a local server for better development experience

3. **Using a Local Server (Recommended)**
   ```bash
   # Using Python 3
   cd src
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server src -p 8000
   
   # Using PHP
   cd src
   php -S localhost:8000
   ```

4. **Access the Website**
   - Open your browser and go to `http://localhost:8000`

## 🖼️ Adding Images

### Supported Image Formats
- JPG/JPEG
- PNG
- WebP

### Recommended Image Specifications
- **Size**: 300x300 pixels or larger
- **Format**: JPG for photos, PNG for graphics with transparency
- **Quality**: High quality (the system will resize automatically)

### Adding Images to Categories

1. **Fruits Images**
   ```
   src/img/fruits/
   ├── apple.jpg
   ├── banana.jpg
   ├── orange.jpg
   ├── strawberry.jpg
   ├── blueberry.jpg
   └── mango.jpg
   ```

2. **Seeds Images**
   ```
   src/img/seeds/
   ├── chia.jpg
   ├── flax.jpg
   ├── pumpkin.jpg
   ├── sunflower.jpg
   ├── hemp.jpg
   └── sesame.jpg
   ```

3. **Herbs Images**
   ```
   src/img/herbs/
   ├── ginger.jpg
   ├── turmeric.jpg
   ├── mint.jpg
   ├── chamomile.jpg
   ├── cinnamon.jpg
   └── rosemary.jpg
   ```

4. **Vegetables Images**
   ```
   src/img/vegetable/
   ├── spinach.jpg
   ├── broccoli.jpg
   ├── carrots.jpg
   ├── bell-peppers.jpg
   ├── sweet-potatoes.jpg
   └── kale.jpg
   ```

### Image Fallback System
- If an image is missing, the system automatically shows an icon
- No errors occur if images are not found
- The website remains fully functional without images

## 🛠️ Customization

### Adding New Items

1. **Add to JavaScript Files**
   ```javascript
   // In fruits.js, herbs.js, seeds.js, or vegetable.js
   {
       name: 'New Item Name',
       benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
       icon: 'fas fa-icon-name',
       image: '../img/category/item-name.jpg',
       color: '#hexcolor',
       description: 'Item description'
   }
   ```

2. **Add Corresponding Image**
   - Place the image in the appropriate folder
   - Use the same filename as referenced in the JavaScript

### Styling Customization

1. **Colors**: Modify CSS variables in `src/style/style.css`
   ```css
   :root {
       --primary: #your-color;
       --secondary: #your-color;
       --accent: #your-color;
   }
   ```

2. **Layout**: Adjust grid layouts and spacing in the CSS file

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🌐 Hosting Options

### 1. GitHub Pages (Free)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/fruits-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Select "Deploy from a branch"
   - Choose "main" branch and "/src" folder
   - Click "Save"

3. **Your Website URL**
   - `https://yourusername.github.io/fruits-website/`

### 2. Netlify (Free)

1. **Deploy from GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account
   - Click "New site from Git"
   - Choose your repository
   - Set build command: (leave empty)
   - Set publish directory: `src`
   - Click "Deploy site"

2. **Custom Domain (Optional)**
   - In Netlify dashboard, go to "Domain settings"
   - Add your custom domain

### 3. Vercel (Free)

1. **Deploy from GitHub**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Click "New Project"
   - Import your repository
   - Set root directory to `src`
   - Click "Deploy"

### 4. Traditional Web Hosting

1. **Upload Files**
   - Upload all files from the `src` folder to your web hosting
   - Maintain the folder structure

2. **Domain Configuration**
   - Point your domain to your hosting provider
   - Set `index.html` as the default page

## 🔧 Development

### Local Development Server

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server src -p 8000

# Using PHP
php -S localhost:8000
```

### Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help:
- Create an issue on GitHub
- Check the documentation
- Review the code comments

## 🎯 Future Enhancements

- [ ] Add more fruits, vegetables, herbs, and seeds
- [ ] Implement user accounts and favorites
- [ ] Add recipe suggestions
- [ ] Create a mobile app
- [ ] Add multilingual support
- [ ] Implement a blog section
- [ ] Add nutritional calculators
- [ ] Create printable nutrition guides

---

**Made with ❤️ for healthy living** 