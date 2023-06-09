<h1>Airbmb - 'Airbnb' clone</h1>

<img src='/readme-media/home.jpg' /> 

Check it out here: https://airbmb-yosikari.vercel.app/

## Table of Contents

- [Project Features](#project-features)
- [Technologies Used](#technologies-used)
- [Libraries Used](#libraries-used)
- [Demo](#demo)
- [Installation](#installation)
- [Contact Me](#contact-me)
- [Gallery](#gallery)

## Project Features

- Login: Responsive login page for any device, supporting login via email, Google, or Github.
- Reservations: Comprehensive view of available guest houses and hotels, displayed conveniently on the homepage for easy browsing and selection.
- Details: In-depth information about each reservation, including description, location on a map, and host name. Users can mark reservations as favorites, select specific dates (if available), and make informed decisions about their bookings.
- Listings: Dynamic modal for easy posting of guest houses and hotels, with five simple steps for creating a listing: category selection, location, number of guests/rooms/bathrooms, image upload, and title/description/price.
- Filters: Two options for filtering search results: selecting categories via icons or using a dynamic modal with location, date, and property details filters.
- Navbar: Convenient navigation bar for easy access to favorites, reservations, properties, and login/logout functions.

## Technologies Used

<b>This project is built using the following technologies:
</b>

The app started with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app),
using tailwind css
[`npm install -D tailwindcss postcss autoprefixer`]
[`npx tailwindcss init -p`] 
https://tailwindcss.com/docs/guides/nextjs .

- TypeScript
- TailwindCSS
- Next.js
- React Hooks (useRef, useState, useEffect)
- React Custom Hooks (useCountries, useFavorite, useLoginModal, useRegisterModal, useRentModal, useSearchModal)

## Libraries Used

<b>This project is using the following libraries:
</b>

<b>Styles:</b>
- [`TailwindCSS`](https://tailwindcss.com/docs/guides/nextjs)
- [`Leaflet (Maps)`](https://leafletjs.com/)
- [`react-date-range (Calender)`](https://www.npmjs.com/package/react-date-range)

<b>Icons:</b>
- [`react-icons`](https://react-icons.github.io/react-icons/search?q=vscar)

<b>Data Base:</b>
- [`Prisma (MongoDB)`](https://www.prisma.io/docs/concepts/database-connectors/mongodb)
- [`Cloudinary`](https://cloudinary.com/)

<b>Flash notifications:</b>
- [`React hot toast`](https://react-hot-toast.com/)

## Demo

To see a live demo of the project, please visit https://airbmb-yosikari.vercel.app/

## Installation

To run the project locally, follow these steps:

1. Clone the repository: 

    `git clone https://github.com/yosikari/Airbmb.git`

2. Install dependencies: 

    `npm install`

3. Start the server: 

    `npm run dev`

**The website should be available at** http://localhost:3000/.

## Contact Me

If you have any questions or feedback about the project, please feel free to reach me out at yosikari@gmail.com.

## Gallery

### Login / Sign up
<img src='/readme-media/login.jpg' weight='600'/>

### Post your own
<img src='/readme-media/listing.jpg' weight='600'/>

### Full view
<img src='/readme-media/view.jpg' weight='600'/>

### Filter modal
<img src='/readme-media/filter-modal' weight='600'/>

### Filter category
<img src='/readme-media/filter-category.jpg' weight='600'/>

### Filter results
<img src='/readme-media/filter-res.jpg' weight='600'/>

### Favorites page
<img src='/readme-media/favorites.jpg' weight='600'/>

### Properties page
<img src='/readme-media/properties.jpg' weight='600'/>

### Reservation page
<img src='/readme-media/reservations.jpg' weight='600'/>

### Trips page
<img src='/readme-media/trips.jpg' weight='600'/>

### Mobile view
<img src='/readme-media/mobile.jpg' weight='600'/>







