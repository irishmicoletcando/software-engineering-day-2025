'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const REGISTRATION_URLS = {
  "May 5, 2025": "https://forms.gle/rnyG7764FVhMuufc9",
  "May 6, 2025": "https://forms.gle/X1cyqqq2nDkp4i7Q9",
  "May 8, 2025": "https://forms.gle/QBtwLyo168NhVdFA7",
} as const;

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-accent-black/95 backdrop-blur-lg border border-shining-yellow/20 text-white max-w-[90%] md:max-w-lg mx-auto p-4 md:p-6">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-xl md:text-2xl font-bold text-center px-2">
            <span className="bg-gradient-to-r from-shining-yellow to-bright-orange bg-clip-text text-transparent">
              Choose Your Session Date
            </span>
          </DialogTitle>
          <p className="text-sm text-gray-400 text-center">
            Select a date to register for the event
          </p>
        </DialogHeader>

        <div className="space-y-3 py-4">
          {Object.entries(REGISTRATION_URLS).map(([date, url], index) => (
            <motion.div
              key={date}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full p-3 md:p-4 rounded-lg border border-dull-yellow/20 hover:border-shining-yellow bg-sea-green/5 hover:bg-gray/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="p-1.5 md:p-2 rounded-full bg-light-sea-green/10 group-hover:bg-light-sea-green/20 transition-colors">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-shining-yellow" />
                    </div>
                    <span className="text-base md:text-lg text-gray-200 group-hover:text-white transition-colors">
                      {date}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-shining-yellow transition-colors" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center text-xs md:text-sm text-gray-400 pt-2">
          Click on a date to proceed with registration
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;