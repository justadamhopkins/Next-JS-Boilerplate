'use client';

import { Hydrate, HydrateProps } from '@tanstack/react-query';

function HydrateUi(props: HydrateProps) {
  return <Hydrate {...props} />;
}

export default HydrateUi;
