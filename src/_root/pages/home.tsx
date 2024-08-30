import { ErrorBoundary } from "react-error-boundary";
import BooksSection from "../../components/pages/booksSection";
import HeroSection from "../../components/pages/hero";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ErrorBoundary
        onError={(error, stack) => {
          console.error(error);
          console.error(stack);
        }}
        FallbackComponent={() => (
          <div
            className="flex"
          >
            <h1>Something went wrong</h1>
          </div>
        )}
      >
        <BooksSection />
      </ErrorBoundary>
    </main>
  );
};

export default Home;
