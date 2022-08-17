import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { BranchList } from "./branch/BranchList";
import { BranchCreate } from "./branch/BranchCreate";
import { BranchEdit } from "./branch/BranchEdit";
import { BranchShow } from "./branch/BranchShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { FiList } from "./fi/FiList";
import { FiCreate } from "./fi/FiCreate";
import { FiEdit } from "./fi/FiEdit";
import { FiShow } from "./fi/FiShow";
import { TestingList } from "./testing/TestingList";
import { TestingCreate } from "./testing/TestingCreate";
import { TestingEdit } from "./testing/TestingEdit";
import { TestingShow } from "./testing/TestingShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"amplication-feature"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Branch"
          list={BranchList}
          edit={BranchEdit}
          create={BranchCreate}
          show={BranchShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Fi"
          list={FiList}
          edit={FiEdit}
          create={FiCreate}
          show={FiShow}
        />
        <Resource
          name="Testing"
          list={TestingList}
          edit={TestingEdit}
          create={TestingCreate}
          show={TestingShow}
        />
      </Admin>
    </div>
  );
};

export default App;
