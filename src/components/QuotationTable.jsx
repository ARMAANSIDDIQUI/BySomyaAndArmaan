import React from "react";

export default function QuotationTable() {
  return (
    <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-2xl overflow-hidden mt-8 border border-white/20">
      <h2 className="text-2xl font-bold text-center py-4 border-b border-white/10">
        📄 Project Quotation
      </h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="uppercase text-sm tracking-wider text-indigo-300">
            <th className="text-left px-4 py-3">Item</th>
            <th className="text-left px-4 py-3">Details</th>
            <th className="text-left px-4 py-3">Rate / Estimate</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-white/10 odd:bg-white/5 even:bg-transparent hover:bg-white/10 transition">
            <td className="px-4 py-3">Base Rate</td>
            <td className="px-4 py-3">Up to 3 iterations</td>
            <td className="px-4 py-3">₹250/hour</td>
          </tr>
          <tr className="border-t border-white/10 odd:bg-white/5 even:bg-transparent hover:bg-white/10 transition">
            <td className="px-4 py-3">Additional Iterations</td>
            <td className="px-4 py-3">After 3 iterations</td>
            <td className="px-4 py-3">₹200 per iteration</td>
          </tr>
          <tr className="border-t border-white/10 odd:bg-white/5 even:bg-transparent hover:bg-white/10 transition">
            <td className="px-4 py-3">Estimated Hours (Static Scope)</td>
            <td className="px-4 py-3">Fixed features, no interactivity</td>
            <td className="px-4 py-3">15–20 hours</td>
          </tr>
          <tr className="border-t border-white/10 odd:bg-white/5 even:bg-transparent hover:bg-white/10 transition">
            <td className="px-4 py-3">Estimated Hours (Dynamic/Interactive)</td>
            <td className="px-4 py-3">Depending on complexity</td>
            <td className="px-4 py-3">35–40 hours</td>
          </tr>
          <tr className="border-t border-white/10 odd:bg-white/5 even:bg-transparent hover:bg-white/10 transition">
            <td className="px-4 py-3">Maintenance</td>
            <td className="px-4 py-3">Up to 2 requests within a year</td>
            <td className="px-4 py-3">₹1000</td>
          </tr>
          <tr className="border-t border-white/10 odd:bg-white/5 even:bg-transparent hover:bg-white/10 transition">
            <td className="px-4 py-3">Additional Maintenance</td>
            <td className="px-4 py-3">After 2 requests</td>
            <td className="px-4 py-3">₹1000 per iteration</td>
          </tr>
          <tr className="border-t border-white/10 odd:bg-white/5 even:bg-transparent hover:bg-white/10 transition">
            <td className="px-4 py-3">Domain & Deployment</td>
            <td className="px-4 py-3">Charges as per actual costs</td>
            <td className="px-4 py-3">Variable</td>
          </tr>
        </tbody>

      </table>
      <div className="p-4 text-indigo-200 text-sm border-t border-white/10">
        <p>
          <strong>Note:</strong> All estimates are approximate and subject to revision based on detailed project scope.
        </p>
        <p className="mt-1">Let me know if you’d like to proceed or need any clarification.</p>
      </div>
    </div>
  );
}
