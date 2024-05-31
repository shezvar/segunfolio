// StateIndicator.tsx
import React from 'react';

interface StateIndicatorProps {
  isActive: boolean;
}

const StateIndicator: React.FC<StateIndicatorProps> = ({ isActive }) => {
  return (
    <span>
      {isActive ? (
        <div>
          {/* Custom markup for expanded state */}
          <span style={{ color: 'green' }}>▲</span> {/* Example custom markup */}
        </div>
      ) : (
        <div>
          {/* Custom markup for collapsed state */}
          <span style={{ color: 'red' }}>▼</span> {/* Example custom markup */}
        </div>
      )}
    </span>
  );
};

export default StateIndicator;
