import React from 'react';
import { HardDrive, WifiOff } from 'lucide-react';

interface OfflineBadgeProps {
  isDownloaded: boolean;
  size?: string;
  className?: string;
}

export const OfflineBadge: React.FC<OfflineBadgeProps> = ({
  isDownloaded,
  size,
  className = '',
}) => {
  if (isDownloaded) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E5EFE7] text-[#245B45] border border-[#245B45]/20 ${className}`}
        title="Ready for offline learning on this shared village device"
      >
        <HardDrive className="w-3 h-3 text-[#245B45]" />
        <span>Offline Ready</span>
        {size && <span className="text-[10px] opacity-75 font-normal">({size})</span>}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200 ${className}`}
      title="Requires connection to download to local device"
    >
      <WifiOff className="w-3 h-3 text-amber-600" />
      <span>Needs Sync</span>
    </span>
  );
};
