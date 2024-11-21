function App() {
  return (
    <>
      <nav>
        <ul className="flex justfiy-end w-full gap-3">
          <li>
            <a href="/wish-list">Evie's Wish list</a>
          </li>
          <li>
            <a href="/food">Food</a>
          </li>
          <li>
            <a href="/clothing">Clothing</a>
          </li>
          <li>
            <a href="/homeware">Homeware</a>
          </li>
          <li>
            <a href="/family">Family list</a>
          </li>
        </ul>
      </nav>
      <h1>Christmas store wish list</h1>

      {/* loader */}
      <section className="grid-col-12">
        {}
        <div></div>
      </section>
    </>
  );
}

export default App;
