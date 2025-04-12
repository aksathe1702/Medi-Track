import React from "react";

const AllAppointmentsPage = ({ appointments }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Appointments</h1>
      {appointments && appointments.length > 0 ? (
        <div className="grid gap-4">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="border p-4 rounded-xl shadow-sm bg-white"
            >
              <p className="text-lg font-semibold">
                Dr. {appointment.doctorId?.firstName} {appointment.doctorId?.lastName}
              </p>
              <p className="text-sm text-gray-600">Time: {appointment.time}</p>
              <p className="text-sm text-gray-500">
                Patient: {appointment.patientId?.firstName} {appointment.patientId?.lastName}
              </p>
              {/* Add more fields if needed */}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No appointments found.</p>
      )}
    </div>
  );
};

export default AllAppointmentsPage;
