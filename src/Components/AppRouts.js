import React, { lazy, Suspense } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
const Home = lazy(()=> import("./Home"))
const Dashboard = lazy(()=>import("./Dashboard"))
const Tournament = lazy(() => import('./Tournament'));
const Stadium = lazy(() => import('./Stadium'));
const StadiumForm = lazy(() => import('./StadiumForm'));
const AddTournament = lazy(() => import('./AddTournament'));
const PackagesTable = lazy(() => import('./PackagesTable'));
const AddPackages = lazy(() => import('./AddPackages'));
const TeamsTable = lazy(() => import('./TeamsTable'));
const TeamsForm = lazy(() => import('./TeamsForm'));
const AttractionsTable = lazy(() => import('./AttractionsTable'));
const AttractionsForm = lazy(() => import('./AttractionsForm'));
const Hotels = lazy(() => import('./Hotels'));
const AddHotel = lazy(() => import('./AddHotel'));
// import FlightsTable from './FlightsTable';
// import FlightstableForm from './FlightstableForm';
const IntercityTable = lazy(() => import('./IntercityTable'));
const TransportForm = lazy(() => import('./TransportForm'));
const CricbusterToursTable = lazy(() => import('./CricbusterToursTable'));
const CricbusterToursForm = lazy(() => import('./CricbusterToursForm'));
const ManageContent = lazy(() => import('./ManageContent'));
const AddBanner = lazy(() => import('./AddBanner'));
const AddNewMatchTable = lazy(() => import('./AddNewMatchTable'));
const AddDoubleHeader = lazy(() => import('./AddDoubleHeader'));
const LandingPageForm = lazy(() => import('./LandingPageForm'));
const Login = lazy(()=>import("./Login"))
const ResetPasswordForm = lazy(() => import('./ResetPasswordForm'));
const InquiryTable = lazy(() => import('./InquiryTable'));
const InquiryForm = lazy(() => import('./InquiryForm'));
const OrdersTable = lazy(() => import('./OrdersTable'));
const OrdersForm = lazy(() => import('./OrdersForm'));
const AddNewMatchForm = lazy(() => import('./AddNewMatchForm'));
const PackagesPreviewForm = lazy(() => import('./PackagesPreviewForm'));
const Profile = lazy(() => import('./Profile'));
const NoPage = lazy(() => import('../NoPage'));
const LandingPageTable = lazy(() => import('./LandingPageTable'));
const Loader = lazy(()=> import("../Loader"));

const router = createBrowserRouter([
  {
    path: "/",
    element:
      (window.location.pathname === "/" ? <Navigate to={"/Login"} /> : <Suspense fallback={<Loader/>}> <Home/> </Suspense> ),
    children: [
      {
        path: "dashboard",
        element: (<Suspense fallback={ <Loader/> }> <Dashboard/> </Suspense>),
        index: true
      },
      {
        path: "InquiryList",
        element: (<Suspense fallback={ <Loader/> }> <InquiryTable /> </Suspense>),
      },
      {
        path: "InquiryForm",
        element: (<Suspense fallback={ <Loader/> }> <InquiryForm /> </Suspense>),
      },
      {
        path: "packages",
        element: (<Suspense fallback={ <Loader/> }> <PackagesTable /> </Suspense>),
      },
      {
        path: "PackagesForm",
        element: (<Suspense fallback={ <Loader/> }> <AddPackages /> </Suspense>),
      },
      {
        path: "PackagesViewForm",
        element: (<Suspense fallback={ <Loader/> }> <PackagesPreviewForm /> </Suspense>),
      },
      {
        path: "tournaments",
        element: (<Suspense fallback={ <Loader/> }> <Tournament /> </Suspense>),
      },
      {
        path: "TournamentForm",
        element: (<Suspense fallback={ <Loader/> }> <AddTournament /> </Suspense>),
      },
      {
        path: "stadiums",
        element: (<Suspense fallback={ <Loader/> }> <Stadium /> </Suspense>),
      },
      {
        path: "stadiumform",
        element: (<Suspense fallback={ <Loader/> }> <StadiumForm /> </Suspense>),
      },
      {
        path: "teamstable",
        element: (<Suspense fallback={ <Loader/> }> <TeamsTable /> </Suspense>),
      },
      {
        path: "TeamsForm",
        element: (<Suspense fallback={ <Loader/> }> <TeamsForm /> </Suspense>),
      },
      {
        path: "attractionsTable",
        element: (<Suspense fallback={ <Loader/> }> <AttractionsTable /> </Suspense>),
      },
      {
        path: "attractionsform",
        element: (<Suspense fallback={ <Loader/> }> <AttractionsForm /> </Suspense>),
      },
      {
        path: "HotelsTable",
        element: (<Suspense fallback={ <Loader/> }> <Hotels /> </Suspense>),
      },
      {
        path: "HotelsForm",
        element: (<Suspense fallback={ <Loader/> }> <AddHotel /> </Suspense>),
      },
      // {
      //   path:"Flightstable",
      //   element:<FlightsTable/>
      // },
      // {
      //   path:"FlightstableForm",
      //   element:<FlightstableForm/>
      // },
      {
        path: "intercity",
        element:  (<Suspense fallback={ <Loader/> }> <IntercityTable /> </Suspense>),
      },
      {
        path: "intercityform",
        element: (<Suspense fallback={ <Loader/> }> <TransportForm /> </Suspense>),
      },
      {
        path: "crickbusterTours",
        element: (<Suspense fallback={ <Loader/> }> <CricbusterToursTable /> </Suspense>),
      },
      {
        path: "CrickbusterTourForm",
        element: (<Suspense fallback={ <Loader/> }> <CricbusterToursForm /> </Suspense>),
      },
      {
        path: "Managecontent",
        element: (<Suspense fallback={ <Loader/> }> <ManageContent /> </Suspense>),
      },
      {
        path: "landingpageform",
        element: (<Suspense fallback={ <Loader/> }> <LandingPageForm /> </Suspense>),
      },
      {
        path: "bannertable",
        element: (<Suspense fallback={ <Loader/> }> <LandingPageTable /> </Suspense>),
      },
      {
        path: "Addbanner",
        element: (<Suspense fallback={ <Loader/> }> <AddBanner /> </Suspense>),
      },
      {
        path: "Adddoubleheader",
        element: (<Suspense fallback={ <Loader/> }> <AddDoubleHeader /> </Suspense>),
      },
      {
        path: "AddnewmatchTable",
        element: (<Suspense fallback={ <Loader/> }> <AddNewMatchTable /></Suspense>),
      },
      {
        path: "Addnewmatchform",
        element: (<Suspense fallback={ <Loader/> }> <AddNewMatchForm /></Suspense>),
      },
      {
        path: "OrdersList",
        element: (<Suspense fallback={ <Loader/> }> <OrdersTable /> </Suspense>),
      },
      {
        path: "OrdersForm",
        element: (<Suspense fallback={ <Loader/> }> <OrdersForm /> </Suspense>),
      },
      {
        path: "profile",
        element: (<Suspense fallback={ <Loader/> }> <Profile /> </Suspense>),
      },
    ],
  },
  {
    path: "Login",
    element: (<Suspense fallback={<Loader/>}> <Login/></Suspense>),
  },
  {
    path: "Forgotpassword",
    element: (<Suspense fallback={<Loader/>}> <ResetPasswordForm /> </Suspense>),
  },
  {
    path: "*",
    element: (<Suspense fallback={<Loader/>}> <NoPage /> </Suspense>),
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
