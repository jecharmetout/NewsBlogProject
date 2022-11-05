import React from "react";
import styles from "./App.module.css";

import { TabsNames } from "./Utils";
import Button, { ButtonType } from "./Components/Button";
import Tabs from "./Components/Tabs";
import Switch from "./Components/Switch";

const App = () => {
  const activeTab = TabsNames.Articles;
  const tabs = [
    {
      key: TabsNames.Articles,
      title: "Articles",
      disabled: false
    },
    {
      key: TabsNames.Disabled,
      title: "Disabled",
      disabled: true
    },
    {
      key: TabsNames.News,
      title: "News",
      disabled: false
    }
  ];
  return (
    <div className={styles.container}>
      <div className={styles.containerBtn}>
        <Button title={"Primary"} type={ButtonType.Primary} />
        <Button title={"Secondary"} type={ButtonType.Secondary} />
        <Button title={"Primary"} type={ButtonType.Secondary} disabled={true} />
        <Button
          title={"Secondary"}
          type={ButtonType.Secondary}
          disabled={true}
        />
      </div>
      <div className={styles.containerTabs}>
        <Tabs tabs={tabs} onClick={() => {}} activeTab={activeTab} />
      </div>
      <div className={styles.containerSwitch}>
        <Switch disabled={true} title={"Dark theme"}/>
        <Switch disabled={false} title={"Dark theme"}/>
        <Switch disabled={true} title={"Dark theme"}/>
      </div>
    </div>
  );
};

export default App;
