# Vijay TV Smart TV Interface

A production-ready, TV-optimized web application built with React, Vite, and TypeScript. This interface replicates the Google TV experience but is uniquely rebranded for **Star Vijay** with a **Kannada flag-inspired** (Red and Golden Yellow) color palette.

## 🚀 Features
- **TV-Optimized UI**: High-contrast, glassmorphic design for lean-back viewing.
- **Remote Navigation**: Full support for D-pad/arrow-key navigation using a custom `useRemoteNavigation` hook.
- **Localized Content**: Featuring popular shows like *Bigg Boss Kannada*, *Majaa Talkies*, and *Kannadathi*.
- **PWA Ready**: Can be installed on Smart TV browsers for a native app feel.
- **Video Playback**: Integrated video detail views with sample playback capability.

---

## 🛠️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 1. Clone the Repository
```bash
git clone git@github.com:vijay-hs/VijayTV.git
cd VijayTV
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

---

## 🧪 Testing & Verification

### Manual UI Testing
- **Navigation**: Use the **Arrow Keys** (Up, Down, Left, Right) to move focus between show cards and navigation tabs.
- **Selection**: Press **Enter** to select a show and navigate to its detail view.
- **Playback**: Click the **Play** button on the Hero banner or a show card to start the sample video.

### Build & Preview
To test the production build locally:
```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```
The production preview typically runs at `http://localhost:4173`.

### Security Audit
You can re-run the security audit at any time:
```bash
npm audit
```

---

## 📄 Documentation
- [DESIGN.md](./DESIGN.md): Detailed architectural overview and design tokens.
- [SECURITY.md](./SECURITY.md): Security review and remediation report.
