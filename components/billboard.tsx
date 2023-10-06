import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard = ({ data }: BillboardProps) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden mt-16">
      <div
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
          backgroundPosition: "center center",
        }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      ></div>
    </div>
  );
};

export default Billboard;
