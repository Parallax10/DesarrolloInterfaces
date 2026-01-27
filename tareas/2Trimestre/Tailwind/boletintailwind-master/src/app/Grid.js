import Card from "./Card";

export default function Grid() {
  return (
    <div className="grid grid-cols-3 gap-8 rounded-lg text-center min-h-screen bg-gray-200 p-4">
      {[...Array(9)].map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}
