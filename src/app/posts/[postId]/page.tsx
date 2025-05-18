import { Suspense } from 'react';
import SinglePostPageContent from './SinglePostPageContent';

export default function SinglePostPageWrapper() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading Post ...</div>}>
      <SinglePostPageContent />
    </Suspense>
  );
}
