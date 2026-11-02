type Transaction = {
  id: string;
  plan: string;
  amount: string;
  date: string;
  status: "paid" | "pending";
};

export function TransactionHistory({ data }: { data: Transaction[] }) {
  return (
    <div className="border rounded-2xl p-5">
      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-medium">{item.plan}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>

            <div className="text-right">
              <p className="font-medium">{item.amount}</p>
              <p className="text-sm text-gray-500 bg-amber-100 p-1 text-center rounded-2xl">
                {item.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type Usage = {
  id: string;
  type: string; // gym / class
  name: string;
  date: string;
};

export function UsageHistory({ data }: { data: Usage[] }) {
  return (
    <div className="border rounded-2xl p-5">
      <h3 className="font-semibold mb-4">Usage</h3>

      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">
                {item.type} • {item.date}
              </p>
            </div>

            <span className="text-sm text-green-600">✔ Completed</span>
          </div>
        ))}
      </div>
    </div>
  );
}
