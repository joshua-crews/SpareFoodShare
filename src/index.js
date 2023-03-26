import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {} from "./index.css";
import Layout from "./jsx/Layout";
import PrivateRouteLogin from "./jsx/components/PrivateRouteLogin";
import PrivateRouteProfile from "./jsx/components/PrivateRouteProfile";
import {AuthProvider} from "./jsx/AuthContext";

import Welcome from "./jsx/welcome/Welcome";
import Browse from "./jsx/browse/Browse";
import Login from "./jsx/login/Login";
import Item from "./jsx/item/Item";
import Upload from "./jsx/upload/Upload";
import MyProfile from "./jsx/MyProfile/MyProfile";
import MyOrders from "./jsx/MyOrders/MyOrders";
import MyItems from './jsx/MyItems/MyItems';

export default function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <AuthProvider>
                            <Layout />
                        </AuthProvider>
                    }>
                        <Route index element={<Welcome />} />
                        <Route path="browse" element={<Browse />} />
                        <Route path="login" element={
                                <PrivateRouteLogin>
                                    <Login />
                                </PrivateRouteLogin>
                            }
                        />
                        <Route path="item/:item_id" element={<Item />} />
                        <Route path="profile/upload" element={
                                <PrivateRouteProfile>
                                    <Upload />
                                </PrivateRouteProfile>
                            }
                        />
                        <Route path="profile" element={
                                <PrivateRouteProfile>
                                        <MyProfile />
                                </PrivateRouteProfile>
                            }
                        />
                        <Route path="profile/orders" element={
                                <PrivateRouteProfile>
                                        <MyOrders />
                                </PrivateRouteProfile>
                            }
                        />
                        <Route path="profile/myitems" element={
                                <PrivateRouteProfile>
                                        <MyItems />
                                </PrivateRouteProfile>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
