import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GymCrowd24hChart } from "./DenseChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function GymStatusCard() {
  return (
    <div className="rounded-xl ">
      <div className=" flex justify-between items-center">
        <div className="text-sm font-medium">Current Branch</div>

        <div className="text-sm font-medium">
          <Select
            value="56"
            items={[
              { value: "56", label: "56 KTH - Tan Phu" },
              { value: "1", label: "1 Thai Thi Nhan - Tan Binh" },
              { value: "2", label: "2 Nguyen Thi Dinh - District 2" },
            ]}
          >
            <SelectTrigger className="w-full max-w-48">
              <SelectValue placeholder="Select a branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="56">56 KTH - Tan Phu</SelectItem>
              <SelectItem value="1">1 Thai Thi Nhan - Tan Binh</SelectItem>
              <SelectItem value="2">2 Nguyen Thi Dinh - District 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-4">
        <GymCrowd24hChart />
      </div>
    </div>
  );
}
