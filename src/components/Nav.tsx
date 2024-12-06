function Nav() {
  return (
    <nav>
      <ul className="flex justfiy-end w-full gap-4">
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
  );
}

export default Nav;
