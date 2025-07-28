export default function Footer() {
  return (
    <footer className="bg-dark py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1 text-light">
          &copy; {new Date().getFullYear()} MySite. Tutti i diritti riservati.
        </p>
        <p className="text-secondary text-light small">
          Made with ❤️ by Classe #146
        </p>
      </div>
    </footer>
  );
}
