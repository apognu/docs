import { z } from 'astro/zod';

import coreFeaturesData from '../data/core-features.json';
import releasesData from '../data/releases.json';
import { load } from './data';

const card = z.strictObject({
	title: z.string().min(1),
	description: z.string().min(1),
	icon: z.string().regex(/^[a-z0-9-]+:[a-z0-9-]+$/, 'must be an Iconify name like "ph:robot-duotone"'),
	href: z.string().regex(/^(\/|https?:\/\/)/, 'must be a site path or an absolute URL').optional(),
});

const coreFeatures = z.array(
	z.strictObject({
		label: z.string().min(1),
		columns: z.int().min(1).max(4).default(2),
		items: z.array(card).min(1),
	})
);

const releases = z.array(card.extend({ isNew: z.boolean().default(false) }));

export type Card = z.infer<typeof card>;

export const CORE_FEATURES = load('core-features.json', coreFeatures, coreFeaturesData);
export const RELEASES = load('releases.json', releases, releasesData);
