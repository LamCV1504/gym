"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FitnessGoals } from "./FitnessGoal";
import { PersonalInfo } from "./PersonalInfo";
// import { Membership } from "./Membership"; // future

export function ProfileTabs() {
  return (
    <Tabs defaultValue="info">
      {/* Tab header */}
      <TabsList className="grid grid-cols-4">
        <TabsTrigger value="info">Info</TabsTrigger>
        <TabsTrigger value="goals">Goals</TabsTrigger>
        <TabsTrigger value="Feeds">Feeds</TabsTrigger>
        <TabsTrigger value="Photos">Photos</TabsTrigger>

        {/* <TabsTrigger value="membership">Membership</TabsTrigger> */}
      </TabsList>

      {/* Tab content */}
      <TabsContent value="info">
        <PersonalInfo />
      </TabsContent>

      <TabsContent value="goals">
        <FitnessGoals />
      </TabsContent>

      <TabsContent value="Feeds">{/* <FitnessGoals /> */}</TabsContent>

      {/* Future */}
      {/* 
      <TabsContent value="membership" >
  >
        <Membership />
      </TabsContent> 
      */}
    </Tabs>
  );
}
