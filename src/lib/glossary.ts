import { z } from 'astro/zod';

import glossaryData from '../data/glossary.json';
import { load } from './data';

const glossary = z
	.array(z.strictObject({ term: z.string().min(1), definition: z.string().min(1) }))
	.refine((entries) => new Set(entries.map((e) => e.term.toLowerCase())).size === entries.length, 'terms must be unique');

const GLOSSARY = new Map(load('glossary.json', glossary, glossaryData).map((e) => [e.term.toLowerCase(), e]));

export function lookup(term: string, page: string) {
	const entry = GLOSSARY.get(term.trim().toLowerCase());

	if (!entry) {
		throw new Error(`<Glossary>: unknown term "${term}" on ${page}. Known terms: ${[...GLOSSARY.values()].map((e) => e.term).join(', ')}`);
	}

	return entry;
}
