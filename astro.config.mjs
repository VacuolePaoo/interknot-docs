import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.绳网.top',
	integrations: [
		starlight({
			disable404Route: false,
			title: 'IK-Docs',
			favicon: '/favicon.svg',
			social: {
				github: 'https://github.com/share121/inter-knot',
				discord: 'https://disboard.org/zh-cn/server/1273078781241987134',
			},
			sidebar: [
				{
					label: '使用指南',
					autogenerate: { directory: 'guides' },
				},
				{
					label: '社区规范',
					autogenerate: { directory: 'community' },
				}
			],
			customCss: [
				'./src/css/vp.css',
			],
		}),
	],
});
