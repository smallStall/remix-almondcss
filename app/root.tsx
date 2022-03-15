import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

import almondStylesUrl from "~/styles/almond.css";
import resetStylesUrl from "~/styles/reset.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: resetStylesUrl,
    },
    {
      rel: "stylesheet",
      href: almondStylesUrl,
    }
    
  ];
};

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
