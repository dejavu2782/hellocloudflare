# Hello Cloudflare React Project

This project is a simple React application that displays the phrase "Hello Cloudflare" with dynamic animations and visually appealing styles.

## Project Structure

```
hello-cloudflare-react
├── public
│   └── index.html          # Main HTML file serving as the entry point
├── src
│   ├── main.tsx           # Entry point of the React application
│   ├── App.tsx            # Main App component
│   ├── components
│   │   └── HelloCloudflare.tsx # Component displaying "Hello Cloudflare"
│   ├── styles
│   │   └── globals.css     # Global CSS styles
│   ├── hooks
│   │   └── useAnimation.ts  # Custom hook for animation logic
│   └── types
│       └── index.d.ts      # TypeScript types and interfaces
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
├── vite.config.ts          # Vite configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd hello-cloudflare-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to see the application in action.

## Usage

The application will display the phrase "Hello Cloudflare" with animations. You can modify the `HelloCloudflare` component in `src/components/HelloCloudflare.tsx` to customize the display and animations further.

## License

This project is licensed under the MIT License.