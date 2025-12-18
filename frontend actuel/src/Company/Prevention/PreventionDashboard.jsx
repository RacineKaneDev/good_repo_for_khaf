import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const data = [
  { name: 'Jan', prevented: 40, failed: 24, intervention: 10 },
  { name: 'Feb', prevented: 30, failed: 13, intervention: 15 },
  { name: 'Mar', prevented: 20, failed: 58, intervention: 5 },
  { name: 'Apr', prevented: 27, failed: 39, intervention: 8 },
  { name: 'May', prevented: 18, failed: 48, intervention: 12 },
  { name: 'Jun', prevented: 23, failed: 38, intervention: 9 },
  { name: 'Jul', prevented: 34, failed: 43, intervention: 14 },
];

const PreventionDashboard = () => {
  return (
    <div className="space-y-8 p-5">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
          <h2 className="text-gray-500 text-sm font-medium uppercase">Départs Stoppés</h2>
          <p className="text-3xl font-bold text-green-700 mt-2">192</p>
          <span className="text-green-500 text-xs font-semibold">+12% depuis le mois dernier</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
          <h2 className="text-gray-500 text-sm font-medium uppercase">Départs Non Stoppés</h2>
          <p className="text-3xl font-bold text-red-700 mt-2">263</p>
           <span className="text-red-500 text-xs font-semibold">+5% depuis le mois dernier</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
           <h2 className="text-gray-500 text-sm font-medium uppercase">Interventions en Cours</h2>
           <p className="text-3xl font-bold text-blue-700 mt-2">73</p>
           <span className="text-blue-500 text-xs font-semibold">Aktif maintenant</span>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4 text-gray-700">Tendances des Préventions</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="prevented" stroke="#059669" name="Stoppés" strokeWidth={2} />
                <Line type="monotone" dataKey="failed" stroke="#dc2626" name="Non Stoppés" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
           <h3 className="text-lg font-bold mb-4 text-gray-700">Analyse Mensuelle</h3>
           <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={data}>
                 <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="name" />
                 <YAxis />
                 <Tooltip />
                 <Legend />
                 <Bar dataKey="intervention" fill="#2563eb" name="Interventions" />
                 <Bar dataKey="prevented" fill="#059669" name="Réussis" />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>
      </div>
    </div>
  );
}

export default PreventionDashboard