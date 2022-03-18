import React, { Suspense } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// const Demo = lazy(() => import(/* webpackChunkName: "Demo" */ "@/page/Demo"));
// const Kebiao = lazy(() => import(/* webpackChunkName: "Demo" */ "@/page/Kebiao"));
// const Paletee = lazy(() => import(/* webpackChunkName: "Demo" */ "@/page/Paletee"));
// const Selfvideo = lazy(() => import(/* webpackChunkName: "Demo" */ "@/page/Selfvideo"));
// const Selfaudio = lazy(() => import(/* webpackChunkName: "Demo" */ "@/page/Selfaudio"));
// const Drag = lazy(() => import(/* webpackChunkName: "Drag" */ "@/page/Drag"));
// const Anim = lazy(() => import(/* webpackChunkName: "Anim" */ "@/page/Anim"));
// const Home = lazy(() => import(/* webpackChunkName: "Home" */ "@/page/Home"));
// const Editor = lazy(() => import(/* webpackChunkName: "Editor" */ "@/page/Editor"));
// const Copy = lazy(() => import(/* webpackChunkName: "Im" */ "@/page/Copy"));
// const D3 = lazy(() => import(/* webpackChunkName: "D3" */ "@/page/D3"));
// const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ "@/page/NotFound"));
// const Northbound = lazy(() => import(/* webpackChunkName: "Northbound" */ "@/page/Northbound"));
// const JiNianBi = lazy(() => import(/* webpackChunkName: "JiNianBi" */ "@/page/JiNianBi"));
// const DataV = lazy(() => import(/* webpackChunkName: "DataV" */ "@/page/DataV"));
// const Test = lazy(() => import(/* webpackChunkName: "Test" */ "@/page/Test"));

// const routers = [
//   { path: "/", component: Home },
//   { path: "/Demo", component: Demo },
//   { path: "/Paletee", component: Paletee },
//   { path: "/Selfvideo", component: Selfvideo },
//   { path: "/Selfaudio", component: Selfaudio },
//   { path: "/D3", component: D3 },
//   { path: "/Kebiao", component: Kebiao },
//   { path: "/Anim", component: Anim },
//   { path: "/Editor", component: Editor },
//   { path: "/Copy", component: Copy },
//   { path: "/Drag", component: Drag },
//   { path: "/Northbound", component: Northbound },
//   { path: "/JiNianBi", component: JiNianBi },
//   { path: "/DataV", component: DataV },
//   { path: "/Test", component: Test },
//   { path: "/NotFound", component: NotFound },
// ]

const files = require.context('../page', true, /\.js$/)

let pages = {};
files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
})
let routers = [];
Object.keys(pages).forEach(item => {
  routers.push({
    path: `/${item.replace(/([A-Za-z]{0,})\/index/g, '$1')}`,
    component: pages[item]
  })
});

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
        <Redirect exact from="/" to="/home" />

        {/* <Route path='/' exact render={() => (
          <Redirect to="/home" />
        )} /> */}
      </Switch>
    </Suspense>
  </Router>
);


export default BasicRoute;
