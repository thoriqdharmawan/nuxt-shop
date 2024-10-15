# 🛍️ Nuxt Shop App

This is a simple shop application built using **Nuxt 3**. It includes the following features:

- 🛒 **Product Listing**: View a list of available products.
- 📄 **Product Detail**: View detailed information about a specific product.

<p align="center">
  <img src="https://github.com/user-attachments/assets/ce6ffbdb-8439-45f9-98f6-e490318ce668" alt="screenshot2" width="45%" style="margin-right: 12px;"  />
  <img src="https://github.com/user-attachments/assets/0beecea4-2d9f-4c43-a643-a8ad94241103" alt="screenshot1" width="45%" />
</p>

## 🌟 Features

- **Nuxt 3** for modern web development
- **Tailwind CSS** for a beautiful and responsive design
- **Prettier** for consistent code formatting

## 📦 Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/thoriqdharmawan/nuxt-shop
cd nuxt-app
npm install
```

Create a .env file in the root of your project and add your API keys for [Currency Api](https://app.currencyapi.com/):

```
CURRENCY_API_KEY=your_currency_api_key
```

Make sure you have Node.js and npm installed on your machine. You can verify this by running:

```bash
node -v
npm -v
```

## 🚀 Development

To start the development server, run:

```bash
npm run dev
```

This will launch the application on [http://localhost:3000](http://localhost:3000), where you can interact with the product listing and product detail features.

## 🏗️ Building for Production

To build the project for production, use the following command:

```bash
npm run build
```

This will generate the necessary files to deploy your application.

## 🔍 Previewing the App

After building the project, you can preview the production build locally by running:

```bash
npm run preview
```

## 🎨 Tailwind CSS Integration

This project uses **Tailwind CSS** for styling. Tailwind is configured via the `@nuxtjs/tailwindcss` module.

If you need to customize Tailwind, you can modify the `tailwind.config.js` file according to your needs. Tailwind helps to easily create a responsive and clean UI for the product listing and detail views.

## 🧹 Code Formatting

The project uses **Prettier** with the Tailwind CSS plugin to ensure consistent code formatting. The configuration for Prettier is included in the `package.json` file.

To format your code, run:

```bash
npx prettier --write .
```

## 🗂️ Project Structure

- `pages/`: Contains the main pages for product listing and product details.
- `components/`: Contains Vue components used in the project.
- `assets/`: Static assets such as images or icons.
- `layouts/`: Define layouts used across different pages.
- `store/`: Manage the global state if needed for product data.

## 📜 Dependencies

- **Nuxt 3**: Framework for building Vue applications.
- **Vue**: Frontend framework used for building the application.
- **Vue Router**: For managing routing between product list and detail pages.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Prettier**: Code formatting tool.

## 📜 Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run generate`: Generate static files (optional for static site generation).
- `npm run preview`: Preview the production build locally.
- `npm run postinstall`: Run Nuxt's prepare command after installation.

## 🔗 Repository

You can find the repository here: [Nuxt Shop GitHub](https://github.com/thoriqdharmawan/nuxt-shop)
