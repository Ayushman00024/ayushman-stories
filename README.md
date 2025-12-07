# Ayushman's Stories Website

A React.js website to showcase written stories.

## Getting Started

1. Install dependencies:
```
npm install
```

2. Start the development server:
```
npm start
```

The website will open at http://localhost:3000

## Adding Your Stories

Edit the file `src/data/stories.js` to add your stories. Each story should have:
- id: unique number
- title: story title
- excerpt: short preview text
- date: publication date
- content: full story text (use \n\n for paragraph breaks)

## Building for Production

```
npm run build
```

This creates an optimized production build in the `build` folder.
