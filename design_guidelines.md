# K.Y Catering Service - Design Guidelines

## Design Approach
**Reference-Based:** Drawing inspiration from premium food service platforms (Swiggy, Zomato premium restaurants) and traditional South Indian hospitality aesthetics, creating a warm, appetizing, and trust-building experience that celebrates authentic banana leaf dining culture.

## Core Design Principles
- **Cultural Authenticity:** Banana leaf motifs and traditional South Indian visual language throughout
- **Premium Yet Approachable:** High-class service presentation with warm, welcoming tone
- **Visual Appetite Appeal:** Food-forward imagery that makes visitors hungry
- **Trust & Accessibility:** Prominent contact methods and social proof

## Typography
- **Headings:** Poppins Bold (Google Fonts) - clean, modern, professional
- **Body Text:** Inter Regular - excellent readability for service descriptions
- **Tamil Text:** Noto Sans Tamil - for tagline and cultural authenticity
- **Hierarchy:** H1 (3xl-4xl), H2 (2xl-3xl), H3 (xl-2xl), Body (base-lg)

## Layout System
**Tailwind Spacing:** Primary units of 4, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Component spacing: gap-8 between cards, gap-4 within components
- Container: max-w-7xl with px-4 to px-8 padding

## Page Structure

### Hero Section (Full viewport height)
- Large hero image: Banana leaf meal spread (appetizing, high-quality food photography)
- Overlay: Subtle dark gradient (opacity-60) for text readability
- Centered content with business name, Tamil tagline, primary CTA
- Floating contact buttons (WhatsApp + Call) with blur backdrop
- Chef illustration incorporated subtly

### Services Section (2-column on desktop)
- Contract Catering card with icon, description, bullet points of offerings
- Labour Supply card with details about skilled staff provision
- Each card features small banana leaf accent image

### Menu Showcase (3-column grid on desktop, masonry-style)
- Featured dishes on banana leaf presentation
- Each card: Image, dish name, brief description
- Categories: Traditional meals, special occasions, corporate catering options

### Image Gallery (4-column grid transforming to 2 on tablet, 1 on mobile)
- 8-12 high-quality images showing:
  - Banana leaf meal setups
  - Catering events
  - Food preparations
  - Happy customers dining
  - Traditional presentations

### About Section (Single column, centered, max-w-4xl)
- Company story emphasizing high-class service and experience
- Specialties and unique selling points
- Trust indicators: years of service, customer satisfaction

### Contact Section (2-column: Form + Info)
- Left: Contact form (Name, Phone, Event Type, Message)
- Right: Contact details card with address, phone numbers, WhatsApp button
- Embedded location map reference

### Footer
- Quick links, social media, business hours
- Newsletter signup for catering updates
- Trust badges: "Hygienic," "Timely Service," "Authentic Taste"

## Component Library

### Cards
- Rounded corners (rounded-lg to rounded-xl)
- Subtle shadows (shadow-md to shadow-lg)
- Hover lift effect (transform scale)
- Background: Subtle banana leaf texture overlay on white

### Buttons
**Primary CTA:** Bold, prominent with brand accent color
**WhatsApp/Call Buttons:** Floating, blurred background, icon + text
**Form Submit:** Full-width, high contrast

### Navigation
- Sticky header with logo, menu links, contact button
- Mobile: Hamburger menu with smooth slide-in
- Logo area includes small banana leaf icon accent

### Icons
- **Library:** Heroicons (via CDN)
- Usage: Service features, contact methods, social proof indicators

## Images Strategy

### Required Images (9 total):
1. **Hero:** Full-spread banana leaf meal (vibrant, appetizing) - LARGE
2. **Banana Leaf Background Textures:** 2-3 subtle variations for section backgrounds
3. **Service Cards:** 2 supporting images for catering categories
4. **Menu Items:** 3-4 dishes on banana leaf
5. **Gallery:** 6-8 event/food presentation photos
6. **Chef Illustration:** Custom or sourced cartoon chef character

### Image Treatment:
- Bright, warm color grading for food photography
- Consistent cropping and aspect ratios
- Banana leaf textures: subtle opacity (10-20%) as section backgrounds
- High-quality, compressed for web performance

## Visual Accents
- Banana leaf SVG borders/dividers between sections
- Subtle leaf patterns in background (low opacity)
- Brand colors integrated through buttons, highlights, icons
- Warm color temperature throughout (yellows, greens, earthy tones)

## Special Features
- **WhatsApp Integration:** Persistent floating button (bottom-right)
- **Click-to-Call:** Phone number buttons throughout
- **Smooth Scrolling:** Natural, digestible content flow
- **Social Proof:** Customer count, testimonial snippets if available

## Responsive Behavior
- Mobile: Single column, stacked sections, thumb-friendly touch targets
- Tablet: 2-column grids where appropriate
- Desktop: Full multi-column layouts, wider hero images

**Design Philosophy:** Create an immersive banana leaf dining experience digitally - visitors should feel the warmth of South Indian hospitality and the authenticity of traditional catering before they even make contact.