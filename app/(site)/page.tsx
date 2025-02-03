import { Cred } from "./components/Cred";

import data from "@/data.json"

export default function Home() {
  return (
    <section>
      <div className="flex flex-row gap-4">
        <div className="w-3/4 flex flex-col gap-12">
          {data.map((item) => (
            <Cred
              key={item.id}
              label={item.label}
              user={item.user}
              profileImage={item.profileImage}
              createdDate={item.createdDate}
              title={item.title}
            />
          ))}
        </div>
        <div className="w-full">
          안녕
        </div>
      </div>
    </section>
  );
}
