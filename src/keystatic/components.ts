import { fields } from '@keystatic/core';
import { block, mark, repeating, wrapper } from '@keystatic/core/content-components';
import { Icon } from '@keystar/ui/icon';
import { bookOpenIcon } from '@keystar/ui/icon/icons/bookOpenIcon';
import { columnsIcon } from '@keystar/ui/icon/icons/columnsIcon';
import { imageIcon } from '@keystar/ui/icon/icons/imageIcon';
import { infoIcon } from '@keystar/ui/icon/icons/infoIcon';
import { panelTopIcon } from '@keystar/ui/icon/icons/panelTopIcon';
import { youtubeIcon } from '@keystar/ui/icon/icons/youtubeIcon';
import { createElement } from 'react';

// MDX components available in the Keystatic editor, mirroring the ones auto-imported in pages (see astro.config.mjs).
// Their props must match the Astro components in src/components/ and Starlight's Aside/Tabs/TabItem.

const icon = (src: typeof infoIcon) => createElement(Icon, { src });

/** Components for pages of one content folder: uploaded screenshots go to `src/assets/<folder>/`. */
export function components(folder: string) {
	return {
		Screenshot: block({
			label: 'Screenshot',
			icon: icon(imageIcon),
			schema: {
				src: fields.image({ label: 'Image', directory: `src/assets/${folder}`, publicPath: `${folder}/`, validation: { isRequired: true } }),
				caption: fields.text({ label: 'Caption' }),
				alt: fields.text({ label: 'Alternative text', description: 'For screen readers; defaults to the caption.' }),
				width: fields.text({ label: 'Display width', description: 'e.g. 500px or 75%. The full resolution stays available on zoom.' }),
				bordered: fields.checkbox({ label: 'Border' }),
			},
		}),
		Aside: wrapper({
			label: 'Callout',
			icon: icon(infoIcon),
			schema: {
				type: fields.select({
					label: 'Type',
					options: [
						{ label: 'Note', value: 'note' },
						{ label: 'Tip', value: 'tip' },
						{ label: 'Caution', value: 'caution' },
						{ label: 'Danger', value: 'danger' },
					],
					defaultValue: 'note',
				}),
				title: fields.text({ label: 'Title', description: 'Defaults to the type ("Note", "Tip"…).' }),
			},
		}),
		Tabs: repeating({
			label: 'Tabs',
			icon: icon(panelTopIcon),
			children: ['TabItem'],
			schema: {
				syncKey: fields.text({ label: 'Sync key', description: 'Tab groups sharing a key switch together.' }),
			},
		}),
		TabItem: wrapper({
			label: 'Tab',
			forSpecificLocations: true,
			schema: {
				label: fields.text({ label: 'Label', validation: { length: { min: 1 } } }),
			},
		}),
		Columns: wrapper({
			label: 'Columns',
			icon: icon(columnsIcon),
			description: 'Each block inside is a column.',
			schema: {},
		}),
		YouTube: block({
			label: 'YouTube video',
			icon: icon(youtubeIcon),
			schema: {
				id: fields.text({ label: 'Video ID', description: 'The part after "v=" in the video URL.', validation: { length: { min: 1 } } }),
				title: fields.text({ label: 'Title', validation: { length: { min: 1 } } }),
			},
		}),
		Glossary: mark({
			label: 'Glossary term',
			icon: icon(bookOpenIcon),
			tag: 'abbr',
			schema: {
				term: fields.text({ label: 'Term', description: 'Glossary entry, if different from the marked text (e.g. for a plural).' }),
			},
		}),
	};
}
