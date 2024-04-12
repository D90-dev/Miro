import React from "react";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";
import "./Tabs.scss";

export default function TabsWithSlots({ titles, content }) {
  return (
    <Tabs defaultValue={1}>
      <TabsList>
        {titles.map((title, index) => (
          <Tab key={index} value={index + 1}>
            {title}
          </Tab>
        ))}
      </TabsList>
      {content.map((item, index) => (
        <TabPanel key={index} value={index + 1}>
          <div>{item}</div>
        </TabPanel>
      ))}
    </Tabs>
  );
}
