import React from "react";
import "./Dashboard.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ForgotPass from "./Auth/ForgotPass";
import SaveNow from "./SaveNow/SaveNow";
import MyPlans from "./MyPlans/MyPlans";
import Withdraw from "./Withdraw/Withdraw";
import Challenge from "./Challenge/Challenge";
import JoinChallenge from "./JoinChallenge";
import { Provider } from "react-redux";
import store from "../js/store";
import Profile from "./Profile/Profile";
import PlanDetail from "./MyPlans/PlanDetail";
import CreatePlan from "./CreatePlan/CreatePlan";
import PlanForm from "./PlanForm/PlanForm";
import ViewPlan from "./ViewPlan/ViewPlan";
import CreatePlanForm from "./CreatePlanForm/CreatePlanForm";
import LoginAlt from "./Auth/LoginAlt";
import RegisterAlt from "./Auth/RegisterAlt";
import ForgotPassAlt from "./Auth/ForgotPassAlt";
import CreateRegular from "./CreateRegular/CreateRegular";
import EditFixed from "./EditFixed/EditFixed";
import ViewLifePlan from "./ViewLifePlan/ViewLifePlan";
import ViewFixedPlan from "./ViewFixedPlan/ViewFixedPlan";
import EditLife from "./EditLife/EditLife";
import Registered from "./Auth/Registered";
import CreateChallenge from "./CreateChallenge/CreateChallenge";
import MutualFunds from "./MutualFunds/MutualFunds";
import ViewMutualFunds from "./MutualFunds/ViewMutualFunds";
import BuyFund from "./BuyFund/BuyFund";
import BuyFundForm from "./BuyFundForm/BuyFundForm";

function Index() {
  
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/login2" component={Login} />
        <Route path="/dashboard/login" component={LoginAlt} />
        <Route path="/dashboard/register2" component={Register} />
        <Route path="/dashboard/register" component={RegisterAlt} />
        <Route path="/dashboard/registered" component={Registered} />
        <Route path="/dashboard/profile" component={Profile} />
        <Route path="/dashboard/forgot2" component={ForgotPass} />
        <Route path="/dashboard/forgot" component={ForgotPassAlt} />
        <Route path="/dashboard/save" component={SaveNow} />
        <Route path="/dashboard/plans" component={MyPlans} />
        <Route path="/dashboard/funds" component={MutualFunds} />
        <Route path="/dashboard/view-fund" component={ViewMutualFunds} />
        <Route path="/dashboard/create" component={CreatePlan} />
        <Route path="/dashboard/buy-fund" component={BuyFund} />
        <Route path="/dashboard/buy" component={BuyFundForm} />
        <Route path="/dashboard/create-fixed" component={CreatePlanForm} />
        <Route path="/dashboard/create-regular-savings" component={CreateRegular} />
        <Route path="/dashboard/create-challenge" component={CreateChallenge} />
        <Route path="/dashboard/edit/fixeds/:id" component={EditFixed} />
        <Route path="/dashboard/edit/lives/:id" component={EditLife} />
        <Route path="/dashboard/view" component={ViewPlan} />
        <Route path="/dashboard/plan/lifes/:id" component={ViewLifePlan} />
        <Route path="/dashboard/plan/fixeds/:id" component={ViewFixedPlan} />
        <Route path="/dashboard/withdraw" component={Withdraw} />
        <Route path="/dashboard/challenge" component={Challenge} />
        <Route path="/dashboard/join-challenge" component={JoinChallenge} />
      </Router>
    </Provider>
  );
}

export default Index;
