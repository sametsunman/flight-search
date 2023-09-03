import React from "react";
import Skeleton from '@mui/material/Skeleton';

function SkeletonPage() {
  return (
    <div className="card-body">
      <div
        className="h-100"
        style={{ alignItems: "center" }}
      >
         <div className="d-flex justify-content-center">
          <div style={{ margin: '16px' }}>
            <Skeleton variant="rectangular" width={500} height={50} />
          </div>
          <div style={{ margin: '16px' }}>
            <Skeleton variant="rectangular" width={500} height={50} />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div style={{ margin: '16px' }}>
            <Skeleton variant="rectangular" width={500} height={200} />
          </div>
          <div style={{ margin: '16px' }}>
            <Skeleton variant="rectangular" width={500} height={200} />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div style={{ margin: '16px' }}>
            <Skeleton variant="rectangular" width={500} height={200} />
          </div>
          <div style={{ margin: '16px' }}>
            <Skeleton variant="rectangular" width={500} height={200} />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
          <div style={{ margin: '16px' }}>
            <Skeleton variant="rectangular" width={500} height={200} />
          </div>
          <div style={{ margin: '16px' }}>
            <Skeleton variant="rectangular" width={500} height={200} />
          </div>
        </div>
    </div>
  );
}

export default SkeletonPage;
