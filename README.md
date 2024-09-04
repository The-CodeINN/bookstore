# Book Search Application

## Overview

This web application allows users to search for books using the Google Books API. It provides a user-friendly interface for discovering books based on keywords, displaying search results in an appealing manner, and offering detailed information about each book.

## Features

- **Search Functionality**: Users can enter keywords to search for books.
- **Visual Results**: Search results display book title, author, publication date, and cover image.
- **Detailed View**: Clicking on a book provides more details, including description and publisher information.
- **Infinite Scrolling**: Implements infinite scrolling for seamless browsing of search results.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- React.js with TypeScript
- React Query for state management and data fetching
- Tailwind CSS for styling
- Google Books API for book data

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/The-CodeINN/bookstore.git
   ```

2. Navigate to the project directory:

   ```
   cd bookstore
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the development server:

   ```
   npm run dev
   ```

2. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── BookCard.tsx
│   ├── BookList.tsx
│   ├── LoadMoreButton.tsx
│   └── SearchBar.tsx
├── pages/
│   ├── HomePage.tsx
│   └── BookDetailPage.tsx
├── services/
│   └── googleBooksApi.ts
├── types/
│   └── index.ts
├── libs/
│   └── queryProvider.ts
└── App.tsx
```

## Key Components

- `BookCard`: Displays individual book information in a card format.
- `BookList`: Renders the list of books and handles infinite scrolling.
- `SearchBar`: Allows users to input search queries.
- `LoadMoreButton`: Triggers loading of more search results.

## API Integration

The application uses the Google Books API to fetch book data. API calls are managed in the `googleBooksApi.ts` file, utilizing React Query for efficient data fetching and caching.

## Styling

Tailwind CSS is used for styling, providing a responsive and modern design. Custom styles are applied where necessary to enhance the visual appeal.

## Error Handling

Basic error handling is implemented for API requests, with user-friendly error messages displayed when issues occur.

## Future Improvements

- Implement unit tests using Jest and React Testing Library.
- Add filters for advanced search options (e.g., by genre, publication year).
- Integrate with a backend to allow users to save favorite books.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

---

Made with ❤️ by [TheCodeInn](https://thecodeinn.vercel.app/)
