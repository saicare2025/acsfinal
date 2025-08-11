import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck,
  Search,
  Gavel,
  Clock,
  FileSearch,
  Fingerprint
} from 'lucide-react';

const HelpSection = () => {
  const services = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Removing Incorrect Defaults",
      description: "We identify and dispute inaccurate default listings that unfairly impact your credit score."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Disputing Invalid Inquiries",
      description: "We challenge unauthorized credit checks that shouldn't appear on your report."
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: "Court Judgments",
      description: "We help resolve legal judgments that may be incorrectly reported or outdated."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Worst Repayment History Disputes",
      description: "We address problematic repayment histories that may contain errors."
    },
    {
      icon: <FileSearch className="w-8 h-8" />,
      title: "Detailed Credit Report Analysis",
      description: "Our experts thoroughly examine your report for all possible improvements."
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Fixing Identity Theft on Credit File",
      description: "We help restore your credit after identity theft incidents."
    }
  ];

  return (
    <section id='howcanhelp' className="lg:py-16 ">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
           How we <span className="bg-gradient-to-r from-blue to-blue-400 bg-clip-text text-transparent">can help you</span>
          </h2>
          <p className="text-lg text-gray-600">
            We know how credit history works and apply our expertise to your situation so that it can accurately manifest your ability to pay back and manage your finances. We will offer you the best services on the best way to obtain funding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-blue-100 rounded-xl shadow-sm overflow-hidden border border-blue-200 hover:shadow-md transition-all"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue/10 rounded-lg text-blue">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 pl-16">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;