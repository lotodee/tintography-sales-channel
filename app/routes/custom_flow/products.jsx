// app/custom_flow/products.jsx
import React, { useState, useEffect } from "react";

export default function ProductsPage() {
  const params = new URLSearchParams(window.location.search);
  const shop = params.get("shop");
  const [prods, setProds] = useState([]),
    [msg, setMsg] = useState(""),
    [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🚀 Load products for", shop);
    fetch(`/api/custom/fetch_products?shop=${shop}`)
      .then((r) => r.json())
      .then((d) => {
        console.log(`🛍 Got ${d.products.length}`);
        setProds(d.products);
        setLoading(false);
      });
  }, [shop]);

  const onImport = async (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    console.log("📤 Import SKUs:", f.getAll("sku"));
    setMsg("Importing…");
    await fetch(`/api/custom/import_products?shop=${shop}`, {
      method: "POST",
      body: f,
    });
    console.log("✅ Import done");
    setMsg("Import complete!");
  };

  if (loading) return <p>Loading…</p>;
  return (
    <div
      style={{
        padding: 20,
        maxWidth: 800,
        margin: "auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1>🔗 Tinytography Products</h1>
      {msg && <p>{msg}</p>}
      <form onSubmit={onImport}>
        <label>
          <input
            type="checkbox"
            onChange={(e) =>
              document
                .querySelectorAll("input[name='sku']")
                .forEach((cb) => (cb.checked = e.target.checked))
            }
          />{" "}
          Select All
        </label>
        {prods.map((p) => (
          <div
            key={p.sku}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              margin: 10,
              borderRadius: 4,
            }}
          >
            <label>
              <input type="checkbox" name="sku" value={p.sku} defaultChecked />{" "}
              {p.title} — ${p.price}
            </label>
            <div>
              <input
                name={`${p.sku}-title`}
                defaultValue={p.title}
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <input
                name={`${p.sku}-price`}
                defaultValue={p.price}
                style={{ width: 120 }}
              />
            </div>
            <div>
              <textarea
                name={`${p.sku}-desc`}
                defaultValue={p.description}
                style={{ width: "100%", height: 80 }}
              />
            </div>
          </div>
        ))}
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            background: "#007ace",
            color: "#fff",
            border: "none",
            borderRadius: 4,
          }}
        >
          Import Selected
        </button>
      </form>
    </div>
  );
}
