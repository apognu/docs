import { parse } from 'yaml';

import v1 from '../../openapi/v1.yml?raw';
import v1beta from '../../openapi/v1beta.yml?raw';
import ingestion from '../../openapi/ingestion.yml?raw';

function merge(base: string, ...fragments: string[]) {
	const spec = parse(base);

	for (const fragment of fragments.map((f) => parse(f))) {
		spec.paths = { ...spec.paths, ...fragment.paths };

		for (const [kind, items] of Object.entries(fragment.components ?? {})) {
			spec.components[kind] = { ...spec.components[kind], ...(items as object) };
		}
	}

	return spec;
}

export const specs = {
	v1: { title: 'API reference (v1)', spec: merge(v1, ingestion) },
	v1beta: { title: 'Beta endpoints', spec: parse(v1beta) },
};
