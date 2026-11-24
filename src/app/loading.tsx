export default function Loading() {
  return (
    <main
      className="journal-loading"
      role="status"
      aria-live="polite"
      aria-label="The Lagos Journal is loading"
    >
      <div className="journal-loading__content">
        <h1 className="journal-loading__title">
          The Lagos Journal
        </h1>

        <div
          className="journal-loading__indicator"
          aria-hidden="true"
        >
          <span />
        </div>

        <p className="journal-loading__tagline">
          Lagos Real Estate Investment in Focus
        </p>
      </div>
    </main>
  );
}
