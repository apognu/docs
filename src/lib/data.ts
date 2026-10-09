import { z } from 'astro/zod';

export function load<T extends z.ZodType>(file: string, schema: T, data: unknown): z.infer<T> {
	const result = schema.safeParse(data);

	if (!result.success) {
		throw new Error(`Invalid data in src/data/${file}:\n${z.prettifyError(result.error)}`);
	}

	return result.data;
}
