import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9bac6f62"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=9bac6f62"; const createRoot = __vite__cjsImport1_reactDom_client["createRoot"];
import "/src/index.css";
import App from "/src/App.jsx";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=9bac6f62";
import Login from "/src/authentication/Login.jsx";
import SignUp from "/src/authentication/Signup.jsx";
import Home from "/src/components/Home.jsx";
import Dashboard from "/src/components/Dashboard.jsx?t=1739872172002";
const router = createBrowserRouter([
    {
        path: "/",
        element: /*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
            fileName: "C:/Users/VICTUS/Desktop/Task-Management/frontend/src/main.jsx",
            lineNumber: 13,
            columnNumber: 14
        }, this),
        children: [
            {
                path: "/login",
                element: /*#__PURE__*/ _jsxDEV(Login, {}, void 0, false, {
                    fileName: "C:/Users/VICTUS/Desktop/Task-Management/frontend/src/main.jsx",
                    lineNumber: 17,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/register",
                element: /*#__PURE__*/ _jsxDEV(SignUp, {}, void 0, false, {
                    fileName: "C:/Users/VICTUS/Desktop/Task-Management/frontend/src/main.jsx",
                    lineNumber: 21,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/",
                element: /*#__PURE__*/ _jsxDEV(Home, {}, void 0, false, {
                    fileName: "C:/Users/VICTUS/Desktop/Task-Management/frontend/src/main.jsx",
                    lineNumber: 25,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/dashboard",
                element: /*#__PURE__*/ _jsxDEV(Dashboard, {}, void 0, false, {
                    fileName: "C:/Users/VICTUS/Desktop/Task-Management/frontend/src/main.jsx",
                    lineNumber: 29,
                    columnNumber: 18
                }, this)
            }
        ]
    }
]);
createRoot(document.getElementById("root")).render(/*#__PURE__*/ _jsxDEV(RouterProvider, {
    router: router
}, void 0, false, {
    fileName: "C:/Users/VICTUS/Desktop/Task-Management/frontend/src/main.jsx",
    lineNumber: 35,
    columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLmpzeFwiO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3NlclJvdXRlciwgUm91dGVyUHJvdmlkZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uL0xvZ2luLmpzeFwiO1xuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi9hdXRoZW50aWNhdGlvbi9TaWdudXAuanN4XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9jb21wb25lbnRzL0hvbWUuanN4XCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzeFwiO1xuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKFtcbiAge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIGVsZW1lbnQ6IDxBcHAgLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvbG9naW5cIixcbiAgICAgICAgZWxlbWVudDogPExvZ2luIC8+LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvcmVnaXN0ZXJcIixcbiAgICAgICAgZWxlbWVudDogPFNpZ25VcCAvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBlbGVtZW50OiA8SG9tZSAvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2Rhc2hib2FyZFwiLFxuICAgICAgICBlbGVtZW50OiA8RGFzaGJvYXJkIC8+LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXSk7XG5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKFxuICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG4pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVJvb3QiLCJBcHAiLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiUm91dGVyUHJvdmlkZXIiLCJMb2dpbiIsIlNpZ25VcCIsIkhvbWUiLCJEYXNoYm9hcmQiLCJyb3V0ZXIiLCJwYXRoIiwiZWxlbWVudCIsImNoaWxkcmVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVNBLFVBQVUsUUFBUSxtQkFBbUI7QUFDOUMsT0FBTyxjQUFjO0FBQ3JCLE9BQU9DLFNBQVMsWUFBWTtBQUM1QixTQUFTQyxtQkFBbUIsRUFBRUMsY0FBYyxRQUFRLG1CQUFtQjtBQUN2RSxPQUFPQyxXQUFXLDZCQUE2QjtBQUMvQyxPQUFPQyxZQUFZLDhCQUE4QjtBQUNqRCxPQUFPQyxVQUFVLHdCQUF3QjtBQUN6QyxPQUFPQyxlQUFlLDZCQUE2QjtBQUVuRCxNQUFNQyxTQUFTTixvQkFBb0I7SUFDakM7UUFDRU8sTUFBTTtRQUNOQyx1QkFBUyxRQUFDVDs7Ozs7UUFDVlUsVUFBVTtZQUNSO2dCQUNFRixNQUFNO2dCQUNOQyx1QkFBUyxRQUFDTjs7Ozs7WUFDWjtZQUNBO2dCQUNFSyxNQUFNO2dCQUNOQyx1QkFBUyxRQUFDTDs7Ozs7WUFDWjtZQUNBO2dCQUNFSSxNQUFNO2dCQUNOQyx1QkFBUyxRQUFDSjs7Ozs7WUFDWjtZQUNBO2dCQUNFRyxNQUFNO2dCQUNOQyx1QkFBUyxRQUFDSDs7Ozs7WUFDWjtTQUNEO0lBQ0g7Q0FDRDtBQUNEUCxXQUFXWSxTQUFTQyxjQUFjLENBQUMsU0FBU0MsTUFBTSxlQUNoRCxRQUFDWDtJQUFlSyxRQUFRQSJ9