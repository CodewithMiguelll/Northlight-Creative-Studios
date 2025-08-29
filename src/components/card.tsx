import { Check } from "lucide-react";

interface ListCardProps {
  title: string;
  details: string[];
}

export default function ListCard({ title, details }: ListCardProps) {
  return (
    <div className="w-full max-w-sm p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-3">
        {details.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-600">
            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
