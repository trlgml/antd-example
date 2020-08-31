import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Demo = lazy(() => import(/* webpackChunkName: "Demo" */ "@/page/Demo"));
const Kebiao = lazy(() => import(/* webpackChunkName: "Demo" */ "@/page/Kebiao"));
const Paletee = lazy(() => import(/* webpackChunkName: "Demo" */ "@/page/Paletee"));
const Selfvideo = lazy(() => import(/* webpackChunkName: "Demo" */ "@/page/Selfvideo"));
const Anim = lazy(() => import(/* webpackChunkName: "Anim" */ "@/page/Anim"));
const Home = lazy(() => import(/* webpackChunkName: "Home" */ "@/page"));
const NoMatch = lazy(() => import(/* webpackChunkName: "404" */ "@/page/404"));

const routers = [
  { path: "/", component: Home },
  { path: "/Demo", component: Demo },
  { path: "/Paletee", component: Paletee },
  { path: "/Selfvideo", component: Selfvideo },
  { path: "/Kebiao", component: Kebiao },
  { path: "/Anim", component: Anim },
  { path: "/404", component: NoMatch },
]

const BasicRoute = () => (
  <Router>
    <Suspense fallback={<div> Loading </div>}>
      <Switch>
        {routers.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              exact
              component={item.component}
            // render={(props) =>
            //   !item.auth ? (
            //     <item.component {...props} />
            //   ) : isLogin ? (
            //     <item.component {...props} />
            //   ) : (
            //         <Redirect to="/login" />
            //       )
            // }
            />
          );
        })}
        <Route component={NoMatch} />
      </Switch>
    </Suspense>
  </Router>
);


export default BasicRoute;
