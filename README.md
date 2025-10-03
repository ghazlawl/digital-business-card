# Digital Business Card

A modern, interactive digital business card built with Next.js, featuring downloadable vCard generation, QR code sharing, and responsive design.

## ✨ Features

- **📱 Responsive Design** - Works seamlessly on all devices.
- **📄 vCard Download** - One-click contact saving with proper vCard (.vcf) format.
- **📲 QR Code Sharing** - Shareable QR code for easy contact distribution.
- **🎨 Modern UI** - Clean, professional design with smooth animations.
- **⚡ Fast Performance** - Optimized with Next.js App Router.
- **🔗 Social Links** - Direct links to LinkedIn, GitHub, and Twitter.
- **📞 Direct Actions** - Clickable phone and email links.
- **🌐 SEO Optimized** - Proper meta tags and structured data.

## 🚀 Live Demo

View my digital business card: [https://ghazlawl.dev](https://ghazlawl.dev)

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.4](https://nextjs.org/) w/ App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.x](https://tailwindcss.com/) + SCSS Modules
- **Icons**: [FontAwesome](https://fontawesome.com/)
- **QR Code**: [qrcode](https://www.npmjs.com/package/qrcode)
- **vCard**: [vcard-creator](https://www.npmjs.com/package/vcard-creator)
- **Fonts**: Roboto (Next.js optimized)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/ghazlawl/digital-business-card.git
   cd digital-business-card
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Link.tsx
│   │   ├── QRCode.tsx
│   │   ├── SocialNetwork.tsx
│   │   └── Tile.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── page.module.scss
public/
├── favicons/
└── images/
```

## 🎨 Customization

### Personal Information

Edit the contact information in `src/app/page.tsx`:

```tsx
// Update personal details
<h1>Your Name</h1>
<p>Your Job Title</p>
<p>Your Location</p>

// Update contact info
<Tile href="tel:yourphone" icon={faPhone}>
  Your Phone Number
</Tile>
<Tile href="mailto:youremail" icon={faEnvelope}>
  Your Email
</Tile>
```

### vCard Information

Update the vCard generation function with your details:

```tsx
const downloadVCard = () => {
  const myVCard = new VCard();

  myVCard
    .addName("LastName", "FirstName")
    .addCompany("Your Company")
    .addJobtitle("Your Job Title")
    .addEmail("your@email.com")
    .addPhoneNumber("your-phone");
  // ... additional fields
};
```

### Styling

- **Colors**: Modify Tailwind classes or update `page.module.scss`
- **Fonts**: Change font imports in `layout.tsx`
- **Layout**: Adjust component structure in `page.tsx`
- **Background**: Replace background image in `public/images/`

### Social Links

Update social media links in the SocialNetwork components:

```tsx
<SocialNetwork href="https://linkedin.com/in/yourprofile" icon={faLinkedin} />
```

## 📱 Components

### Button

Primary action button that supports both onClick handlers and href links.

```tsx
// As button with onClick
<Button onClick={handleClick}>Action</Button>

// As link with href
<Button href="https://example.com">Link</Button>
```

### QRCode

Generates QR codes for sharing the business card URL.

```tsx
<QRCode value="https://your-url.com" size={120} className="mb-4" />
```

### Tile

Contact information display with icons and click actions.

```tsx
<Tile href="tel:1234567890" icon={faPhone} label="Phone">
  (123) 456-7890
</Tile>
```

### SocialNetwork

Social media link buttons with FontAwesome icons.

```tsx
<SocialNetwork href="https://github.com/username" icon={faGithub} />
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**

   ```bash
   npm install -g vercel
   vercel
   ```

2. **Configure domain** (optional)
   - Add custom domain in Vercel dashboard
   - Update DNS settings

### Other Platforms

The project works on any platform that supports Next.js:

- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 🔧 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## 📝 License

This project is open source and available under the [MIT License](https://mit-license.org/).

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS. Hosted on Vercel.**
