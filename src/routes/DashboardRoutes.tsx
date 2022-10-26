import { Routes, Route } from "react-router-dom";
import { AlbumScreen } from "../albums/views/AlbumScreen";
import { PostsScreen } from "../posts/views/PostsScreen";
import { UserView } from "../users/views/UserView";
import { HeaderApp } from "../components/HeaderApp";

export const DashboardRoutes = () => {
  return (
    <>
      <div className="container-fluid responsive col-xs-12">
        <HeaderApp />
        <Routes>
          <Route path="/" element={<UserView />} />
          <Route path="/albumns" element={<AlbumScreen />} />
          <Route path="/post" element={<PostsScreen />} />
        </Routes>
      </div>
    </>
  );
};