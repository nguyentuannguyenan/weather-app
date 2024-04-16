'use client'

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text }  from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-blue-400 p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto bg-white rounded">

        <Text className="text-6xl font-bold text-center mb-10 text-blue-800">How's The Weather</Text>
        <Subtitle className="text-xl text-center text-blue-300">Powered by OpenAI, Nextjs, Tailwind CSS, Tremor and more</Subtitle>
        <Subtitle className="text-xl text-center text-blue-300">Developed by Nguyen Tuan Nguyen An</Subtitle>

        <Divider className="my-10"/>

        <Card className="bg-gradient-to-br from-blue-800 to-blue-300">
          <CityPicker/>
        </Card>

      </Card>
    </div>
  );
}
