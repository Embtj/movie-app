import React from 'react'

export default function MovieCardSkeleton() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-poster skeleton-shimmer"></div>
      <div className="skeleton-title skeleton-shimmer"></div>
      <div className="skeleton-year skeleton-shimmer"></div>
    </div>
  )
}
