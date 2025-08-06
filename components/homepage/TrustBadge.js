import React from 'react'
import { Shield, Award, Users, CheckCircle } from "lucide-react";

const TrustBadge = () => {
  return (
    <section className="bg-white py-8 border-b border-gray-200">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
        <div className="flex items-center space-x-2">
          <Shield className="w-6 h-6 text-green-600" />
          <span className="font-medium">Licensed & Regulated</span>
        </div>
        <div className="flex items-center space-x-2">
          <Award className="w-6 h-6 text-blue" />
          <span className="font-medium">Award Winning 2022-2024</span>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="w-6 h-6 text-purple-600" />
          <span className="font-medium">1000+ Happy Clients</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-6 h-6 text-green-600" />
          <span className="font-medium">No Win No Fee</span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TrustBadge
