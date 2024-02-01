'use client';
import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function ShopLoadingSkeleton() {
    return (
        <div className='-z-40'>
            <SkeletonTheme color="#e0e0e0" highlightColor="#d1d5db">
                <div className="mb-4">
                    <Skeleton height={192} width={320} />
                    <h1 className="flex flex-col gap-3 py-3">
                        <Skeleton count={2} height={35} width={320} />
                    </h1>
                </div>
            </SkeletonTheme>
        </div>
    );
}
