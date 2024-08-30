import axios from "axios";
import queryString from "query-string";
import { Book, SearchResult } from "../types";

const apiConfig = {
  baseUrl: "https://www.googleapis.com/books/v1/volumes",
};

// GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes

export const searchBooks = async (
  query: string,
  startIndex: number = 0,
  maxResults: number = 10
): Promise<SearchResult> => {
  // Stringify the query parameters
  const params = queryString.stringify({
    q: query,
    startIndex,
    maxResults,
  });

  try {
    // Make the GET request to the Google Books API
    const response = await axios.get<SearchResult>(
      `${apiConfig.baseUrl}?${params}`
    );
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Log and rethrow the error for handling in calling functions
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const getBookDetails = async (id: string): Promise<Book> => {
  try {
    // Construct the URL with the book ID
    const response = await axios.get<Book>(`${apiConfig.baseUrl}/${id}`);

    // Return the detailed book information
    return response.data;
  } catch (error) {
    // Log and rethrow the error for handling in calling functions
    console.error("Error fetching book details:", error);
    throw error;
  }
};
