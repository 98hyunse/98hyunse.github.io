'use client';

import { Badge } from '@/components/ui/badge';

export function PublicationBadge({ status }: { status: string }) {
  const tone = status === 'Under revision' ? 'revision' : status === 'On-going' ? 'ongoing' : status === 'Accepted' ? 'accepted' : 'published';
  return <Badge variant="outline" className={`publication-status status-${tone}`}>{status}</Badge>;
}
