import BusinessForm from "../components/BusinessForm";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        AI Business Builder
      </h1>
      <BusinessForm />
    </div>
  );
}
