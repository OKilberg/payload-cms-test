import MyComponent from "./components/Component";
import Logo from "./components/Logo";
import TestView from "./components/TestView";

// Override default ui components
export const AdminComponents = {
    beforeNavLinks: [MyComponent],
    //Nav: ,
    //afterDashboard:,
    //afterLogin: ,
    //afterNavLinks: ,
    //beforeDashboard: ,
    //beforeLogin: ,
    //beforeNavLinks: ,
    graphics: {
        //Icon: ,
        Logo: Logo,
    },
    //logout: ,
    //providers: ,
    views: {
        TestView: {
            Component: TestView,
            path:'/test-view',
            exact: true,
        }
    }
}