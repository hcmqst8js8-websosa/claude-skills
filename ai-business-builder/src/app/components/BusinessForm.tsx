"use client";

import { useState } from "react";
import axios from "axios";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface FormState {
  name: string;
  description: string;
}

export default function BusinessForm() {
  const [form, setForm] = useState<FormState>({ name: "", description: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      await axios.post("/api/create-business", form);
      setStatus("success");
      setMessage("Business created successfully!");
      setForm({ name: "", description: "" });
    } catch (err) {
      setStatus("error");
      const errorMessage =
        axios.isAxiosError(err) && err.response?.data?.error
          ? err.response.data.error
          : "Something went wrong. Please try again.";
      setMessage(errorMessage);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 max-w-lg space-y-5"
    >
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Create a New Business
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Fill in the details below to get started.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Business Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Acme Corp"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            value={form.description}
            onChange={handleChange}
            placeholder="Describe what this business does..."
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
          />
        </div>
      </div>

      {message && (
        <div
          className={`flex items-center gap-2 text-sm rounded-lg px-3 py-2 ${
            status === "success"
              ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
              : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {status === "success" ? (
            <CheckCircle className="w-4 h-4 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0" />
          )}
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-medium transition-colors"
      >
        {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
        {status === "loading" ? "Creating..." : "Create Business"}
      </button>
    </form>
  );
}
