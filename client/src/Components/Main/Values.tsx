import { coreValues } from "@/Constants/data";

const Values = () => {
  return (
    <div className="layout py-10 space-y-10 ">
      <h1 className="text-4xl text-center text-green-800 font-bold">
        Our Core Values
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
        {coreValues.map((value) => (
          <div
            key={value.title}
            className=" space-y-4 bg-secondary p-4 rounded-md"
          >
            <div className="h-11 w-11 center rounded-md bg-green-800 text-yellow-400">
              <value.icon className="flex-shrink-0" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">{value.title}</h2>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
