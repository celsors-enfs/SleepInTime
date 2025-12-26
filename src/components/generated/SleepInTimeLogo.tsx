import React from 'react';
export interface SleepInTimeLogoProps {
  className?: string;
  width?: number;
  height?: number;
}
export const SleepInTimeLogo: React.FC<SleepInTimeLogoProps> = ({
  className = '',
  width = 240,
  height = 60
}) => {
  return <img width={width} height={height} className={className} style={{
    width: "fit-content",
    maxWidth: "fit-content",
    height: "30px",
    minHeight: "auto"
  }} src="https://storage.googleapis.com/storage.magicpath.ai/user/347385894321393664/assets/ccc81114-f292-4037-899b-5887b1177db5.png" />;
};
export default SleepInTimeLogo;