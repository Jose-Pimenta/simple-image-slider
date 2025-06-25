# Simple Image Slider

A simple and customizable image slider built with React and Create React App. Navigate through images with previous/next controls and autoplay functionality.

## Features

- Navigate between slides with previous/next arrows
- Responsive design for all screen sizes

## Technologies

- React
- CSS (plain CSS modules)
- Create React App

## Project Structure

```
simple-image-slider/
├── public/
│   ├── index.html
│   └── images/
│       ├── slide1.jpg
│       ├── slide2.jpg
│       └── ...
├── src/
│   ├── components/
│   │   └── ImageSlider/
│   │       ├── ImageSlider.jsx
│   │       └── ImageSlider.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm

### Installation

```bash
git clone https://github.com/Jose-Pimenta/simple-image-slider.git
cd simple-image-slider
npm install
```

### Development

Start the development server:

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000`.

### Build

To create a production build:

```bash
npm run build
npm install -g serve
serve -s build
```

## Customization

- Add or replace images in the `public/images` directory.
- Adjust autoplay interval or disable autoplay by modifying the component props in `ImageSlider.jsx`.
- Customize styles by editing `ImageSlider.css` and `App.css`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
