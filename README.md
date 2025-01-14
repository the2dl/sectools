# Security Tools Hub Template

A modern, responsive React template for creating a security tools landing page. This template provides a clean interface to showcase and organize various security tools, complete with authentication and dark mode support.

## Features

- 🔐 Simple token-based authentication
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🔍 Tool categorization and filtering
- 💅 Modern UI with Shadcn/UI components
- 🎨 Clean and professional design

## Getting Started

1. Clone this repository
2. Install dependencies:
```bash
npm install
# or
yarn install
```
3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Authentication

The template includes a simple token-based authentication system. The default access token is `SecTools`. You can modify this in the `App.tsx` file by changing the `ACCESS_TOKEN` constant.

## Customizing Tools

Tools are defined in `src/data/tools.ts`. Each tool entry includes:
- `id`: Unique identifier
- `name`: Tool name
- `description`: Brief description
- `url`: Link to the tool
- `category`: Tool category (Network, Web, Forensics, Cryptography, Other)
- `icon`: Icon identifier

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Lucide Icons

## License

MIT License - Feel free to use this template for your own security tools landing page.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
