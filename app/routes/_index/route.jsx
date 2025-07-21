// import { redirect } from "@remix-run/node";
// import { Form, useLoaderData } from "@remix-run/react";
// import { login } from "../../shopify.server";
// import styles from "./styles.module.css";

// export const loader = async ({ request }) => {
//   const url = new URL(request.url);

//   if (url.searchParams.get("shop")) {
//     throw redirect(`/app?${url.searchParams.toString()}`);
//   }

//   return { showForm: Boolean(login) };
// };

// export default function App() {
//   const { showForm } = useLoaderData();

//   return (
//     <div className={styles.index}>
//       <div className={styles.content}>
//         <h1 className={styles.heading}>A short heading about [your app]</h1>
//         <p className={styles.text}>
//           A tagline about [your app] that describes your value proposition.
//         </p>
//         {showForm && (
//           <Form className={styles.form} method="post" action="/auth/login">
//             <label className={styles.label}>
//               <span>Shop domain</span>
//               <input className={styles.input} type="text" name="shop" />
//               <span>e.g: my-shop-domain.myshopify.com</span>
//             </label>
//             <button className={styles.button} type="submit">
//               Log in
//             </button>
//           </Form>
//         )}
//         <ul className={styles.list}>
//           <li>
//             <strong>Product feature</strong>. Some detail about your feature and
//             its benefit to your customer.
//           </li>
//           <li>
//             <strong>Product feature</strong>. Some detail about your feature and
//             its benefit to your customer.
//           </li>
//           <li>
//             <strong>Product feature</strong>. Some detail about your feature and
//             its benefit to your customer.
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }



import { redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { login } from "../../shopify.server";
import styles from "./styles.module.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return { showForm: Boolean(login) };
};

export default function App() {
  const { showForm } = useLoaderData();

  return (
    <div className={styles.index}>
      {/* Full-screen background image */}
      <img src="/bg-sapp.jpg" alt="Background" className={styles.bgImg} />
      <div className={styles.centerContainer}>
        <div className={styles.glassCard}>
          <h1 className={styles.heroHeading}>
            <span className={styles.heroAccent}>Tinytography</span>
          </h1>
          <p className={styles.heroTagline}>
            Effortless photo print sales. Import, sync, and sell your custom
            photo prints. Automate fulfillment and grow your business with ease.
          </p>
          <ul className={styles.featureList}>
            <li>
              <span className={styles.featureIcon}>📦</span>One-click product
              sync
            </li>
            <li>
              <span className={styles.featureIcon}>⚡</span>Automated order
              fulfillment
            </li>
            <li>
              <span className={styles.featureIcon}>🖼️</span>Showcase your unique
              prints
            </li>
          </ul>
          <div className={styles.loginSection}>
            <h2 className={styles.cardTitle}>Log in to your shop</h2>
            {showForm && (
              <Form className={styles.form} method="post" action="/auth/login">
                <label className={styles.label}>
                  <span>Shop domain</span>
                  <input className={styles.input} type="text" name="shop" />
                  <span>e.g: my-shop-domain.myshopify.com</span>
                </label>
                <button className={styles.button} type="submit">
                  Log in
                </button>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
