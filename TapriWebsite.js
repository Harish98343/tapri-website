import React from "react";

export default function TapriWebsite() {
  return (
    <div>
      <header style={{ background: "#ffe082", padding: "1rem" }}>
        <img src="/logo.jpg" alt="Tapri Logo" style={{ height: "40px" }} />
        <h1>Tapri – The Tea House</h1>
        <nav>
          <a href="#">Home</a> | <a href="#">Menu</a> | <a href="#">About Us</a>
        </nav>
      </header>
      <main style={{ padding: "1rem" }}>
        <h2>Welcome to Tapri</h2>
        <p>A cozy tea spot in Hyderabad serving warmth in every cup.</p>

        <h3>Menu</h3>
        <ul>
          <li>Masala Chai – Spiced tea with milk</li>
          <li>Lemon Tea – Refreshing and tangy</li>
          <li>Samosa – Crispy & savory snack</li>
        </ul>

        <h3>About Us</h3>
        <p>Tapri was founded with a love for authentic chai and heartfelt conversations.</p>

        <h3>Photo Gallery</h3>
        <div>
          <img src="/gallery1.jpg" alt="" width="100" />
          <img src="/gallery2.jpg" alt="" width="100" />
          <img src="/gallery3.jpg" alt="" width="100" />
          <img src="/gallery4.jpg" alt="" width="100" />
        </div>

        <h3>Customer Reviews</h3>
        <blockquote>“Best chai in town! Love the vibe here.” – Priya S.</blockquote>
        <blockquote>“A must-visit for every tea lover in Hyderabad!” – Arjun M.</blockquote>
      </main>
      <footer style={{ background: "#ffe082", padding: "1rem", marginTop: "2rem" }}>
        <p>© 2025 Tapri – The Tea House. All rights reserved.</p>
      </footer>
    </div>
  );
}