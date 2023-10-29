import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../pages/LoginPage";
import MainPage from "../pages/MainPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainPage />} />
        </Route>
    )
)

export { router };