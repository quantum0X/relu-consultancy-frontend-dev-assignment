import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MainPage from "../pages/MainPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<PrivateRoute />} >
                <Route path="/" element={<MainPage />} exact />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
        </Route>
    )
)

export { router };