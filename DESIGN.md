# Vijay TV (Smart TV UI) - Design Document

## 1. Overview
Vijay TV is a localized, TV-optimized web application built to replicate the "lean-back" experience of Google TV for the Star Vijay network. The interface is optimized for high-contrast viewing, D-pad navigation, and smooth performance on smart TV browsers.

## 2. Tech Stack
- **Framework**: React 18+ (with Vite for fast bundling)
- **Language**: TypeScript (for type safety and robust component interfaces)
- **Styling**: `styled-components` (for dynamic, theme-aware CSS-in-JS)
- **Animations**: `framer-motion` (for smooth focus transitions and banner fades)
- **Routing**: `react-router-dom` (handling Home, Reality, Serials, Live TV, and Movie Detail views)

## 3. Design Principles
### A. Theming (Kannada TV Palette)
The application uses a primary color system inspired by the Kannada flag:
- **Background**: Deep Charcoal/Dark Red (`#0d0101`) for eye comfort.
- **Focus States**: Vibrant Golden Yellow (`#FFD700`) for high visibility on low-end TV screens.
- **Primary CTAs**: Bright Red (`#FF0000`) for "Play" and "Live" buttons.

### B. Remote Navigation (D-Pad)
Since smart TVs lack mouse cursors, the entire UI is controlled via a custom `useRemoteNavigation` hook.
- **Focus Management**: Uses standard DOM focus with `tabIndex={0}`.
- **Spatial Navigation**: Maps arrow keys (Up, Down, Left, Right) to logical focus shifts.
- **Banners**: Focusing a movie card automatically updates the Hero banner background and description.

## 4. Component Architecture
- `NavBar`: Fixed top navigation with blurred glass-morphism background.
- `Hero`: Large, cinematic banner showing the currently focused movie/show.
- `Row`: Horizontal scrolling list of show cards.
- `Card`: Interactive thumbnails with hover/focus animations.
- `MovieDetail`: Dedicated video playback view with native HTML5 Controls.

## 5. Security Measures
- **Content Security Policy**: Restricting resources to trusted Vijay/Star domains.
- **Sanitized Data**: All mock data is treated as untrusted to prevent XSS.
- **HTTPS Enforcement**: Compulsory for video streaming and service worker (PWA) operation.

## 6. PWA & Deployment
The app is configured as a Progressive Web App (PWA) to allow "Installation" on TV home screens, providing an "App-like" launch experience from the browser.
