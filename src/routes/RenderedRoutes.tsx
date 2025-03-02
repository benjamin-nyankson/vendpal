import { Route, Routes } from "react-router-dom";
import { routes } from "./appRoutes";
import { JSX } from "react";

export default function RenderedRoutes(): JSX.Element {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}>
          {route.children &&
            route.children?.map((child) => (
              <Route path={child.path} element={child.element} />
            ))}
          /
        </Route>
      ))}
    </Routes>
  );
}
