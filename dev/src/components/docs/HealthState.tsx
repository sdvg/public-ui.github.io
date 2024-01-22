import { KolTable } from '@public-ui/react';
import React, { FC } from 'react';
import { dangerouslySetInnerHTML, getPackageName } from '../../shares/utils';

type Props = {
	lang: 'de' | 'en';
	version: '1' | '2';
};

const DATA_V1 = [
	{
		scope: '@public-ui',
		name: 'components',
	},
	{
		scope: '@public-ui',
		name: 'core',
	},
	{
		scope: '@public-ui',
		name: 'schema',
	},
	{
		scope: '@public-ui',
		name: 'themes',
	},
	{
		scope: '@public-ui',
		name: 'angular-v17',
	},
	{
		scope: '@public-ui',
		name: 'angular-v16',
	},
	{
		scope: '@public-ui',
		name: 'angular-v15',
	},
	{
		scope: '@public-ui',
		name: 'angular-v14',
	},
	{
		scope: '@public-ui',
		name: 'angular-v13',
	},
	{
		scope: '@public-ui',
		name: 'angular-v12',
	},
	{
		scope: '@public-ui',
		name: 'angular-v11',
	},
	{
		scope: '@public-ui',
		name: 'preact',
	},
	{
		scope: '@public-ui',
		name: 'react',
	},
	{
		scope: '@public-ui',
		name: 'solid',
	},
	{
		scope: '@public-ui',
		name: 'vue',
	},
	{
		scope: '@public-ui',
		name: 'hydrate',
	},
];
const DATA_V2 = [
	{
		scope: '@public-ui',
		name: 'components',
	},
	{
		scope: '@public-ui',
		name: 'schema',
	},
	{
		scope: '@public-ui',
		name: 'themes',
	},
	{
		scope: '@public-ui',
		name: 'theme-default',
	},
	{
		scope: '@public-ui',
		name: 'angular-v17',
	},
	{
		scope: '@public-ui',
		name: 'angular-v16',
	},
	{
		scope: '@public-ui',
		name: 'angular-v15',
	},
	{
		scope: '@public-ui',
		name: 'angular-v14',
	},
	{
		scope: '@public-ui',
		name: 'angular-v13',
	},
	{
		scope: '@public-ui',
		name: 'angular-v12',
	},
	{
		scope: '@public-ui',
		name: 'angular-v11',
	},
	{
		scope: '@public-ui',
		name: 'preact',
	},
	{
		scope: '@public-ui',
		name: 'react',
	},
	{
		scope: '@public-ui',
		name: 'react-standalone',
	},
	{
		scope: '@public-ui',
		name: 'solid',
	},
	{
		scope: '@public-ui',
		name: 'vue',
	},
	{
		scope: '@public-ui',
		name: 'hydrate',
	},
];

export const HealthStateTable: FC<Props> = ({ lang, version }) => {
	if (lang === 'en') {
		return (
			<KolTable
				className="col-12"
				_label="List of status values for the packages"
				_minWidth="95em"
				_headers={{
					horizontal: [
						[
							{
								label: 'Package',
								key: 'name',
								render: (_el, _cell, tupel) => `${getPackageName(tupel.scope, tupel.name)}`,
								width: '15em',
							},
							{
								label: 'Version',
								key: 'name',
								textAlign: 'center',
								render: (el, _cell, tupel) =>
									dangerouslySetInnerHTML(
										el,
										`<kol-link _href="https://www.npmjs.com/package/${getPackageName(
											tupel.scope,
											tupel.name
										)}" _target="npmjs">
			<img alt="" src="https://img.shields.io/npm/v/${getPackageName(tupel.scope, tupel.name)}" />
		</kol-link>`
									),
							},
							{
								label: 'Downloads',
								key: 'name',
								textAlign: 'center',

								render: (el, _cell, tupel) =>
									dangerouslySetInnerHTML(
										el,
										`<kol-link _href="https://npmcharts.com/compare/${getPackageName(
											tupel.scope,
											tupel.name
										)}" _target="npmcharts">
			<img alt="" src="https://img.shields.io/npm/dt/${getPackageName(tupel.scope, tupel.name)}.svg" />
		</kol-link>`
									),
							},
							{
								label: 'Quality',
								key: 'name',
								textAlign: 'center',
								render: (el, _cell, tupel) =>
									dangerouslySetInnerHTML(
										el,
										`<img alt="" src="https://packagequality.com/shield/create-kolibri.svg" />`
									),
							},
							{
								label: 'Install size',
								key: 'name',
								textAlign: 'center',
								render: (el, _cell, tupel) =>
									dangerouslySetInnerHTML(
										el,
										`<kol-link _href="https://packagephobia.com/result?p=${getPackageName(
											tupel.scope,
											tupel.name
										)}" _target="packagephobia">
			<img alt="" src="https://packagephobia.now.sh/badge?p=${getPackageName(tupel.scope, tupel.name)}" />
		</kol-link>`
									),
							},
							{
								label: 'Dependencies',
								key: 'name',
								textAlign: 'center',
								render: (el, _cell, tupel) =>
									dangerouslySetInnerHTML(
										el,
										`<kol-link _href="https://libraries.io/npm/${getPackageName(
											tupel.scope,
											tupel.name,
											'%2F'
										)}" _target="libraries">
			<img alt="" src="https://img.shields.io/librariesio/release/npm/${getPackageName(tupel.scope, tupel.name)}" />
		</kol-link>`
									),
							},
							{
								label: 'Health',
								key: 'name',
								render: (el, _cell, tupel) =>
									dangerouslySetInnerHTML(
										el,
										`<kol-link _href="https://snyk.io/advisor/npm-package/${getPackageName(
											tupel.scope,
											tupel.name
										)}" _target="snyk">
			<img alt="" src="https://snyk.io/advisor/npm-package/${getPackageName(tupel.scope, tupel.name)}/badge.svg" />
		</kol-link>`
									),
							},
							{
								label: 'Vulnerabilities*',
								key: 'name',
								textAlign: 'center',
								render: (el, _cell, tupel) =>
									dangerouslySetInnerHTML(
										el,
										`<kol-link _href="https://snyk.io/advisor/npm-package/${getPackageName(
											tupel.scope,
											tupel.name,
											'%2F'
										)}" _target="snyk">
			<img alt="" src="https://snyk.io/test/npm/${getPackageName(tupel.scope, tupel.name)}/badge.svg" />
		</kol-link>`
									),
							},
						],
					],
				}}
				_data={version === '1' ? DATA_V1 : DATA_V2}
			></KolTable>
		);
	} else {
		return (
			<KolTable
				className="col-12"
				_label="Liste von Statuswerte zu den Paketen"
				_minWidth="95em"
				_headers={{
					horizontal: [
						[
							{
								label: 'Package',
								key: 'name',
								render: (_el, _cell, tupel) => `${getPackageName(tupel.scope, tupel.name)}`,
								width: '15em',
							},
							{
								label: 'Version',
								key: 'name',
								textAlign: 'center',
								render: (el, _cell, tupel) =>
									dangerouslySetInnerHTML(
										el,
										`<kol-link _href="https://www.npmjs.com/package/${getPackageName(
											tupel.scope,
											tupel.name
										)}" _target="npmjs" _label="">
		<img alt="" slot="expert" src="https://img.shields.io/npm/v/${getPackageName(tupel.scope, tupel.name)}" />
	</kol-link>`
									),
							},
							{
								label: 'Downloads',
								key: 'name',
								textAlign: 'center',
								render: (el, _cell, tupel) =>
									dangerouslySetInnerHTML(
										el,
										`<kol-link _href="https://npmcharts.com/compare/${getPackageName(
											tupel.scope,
											tupel.name
										)}" _target="npmcharts" _label="">
		<img alt="" slot="expert" src="https://img.shields.io/npm/dt/${getPackageName(tupel.scope, tupel.name)}.svg" />
	</kol-link>`
									),
							},
							{
								label: 'Quality',
								key: 'name',
								textAlign: 'center',
								render: (el) =>
									dangerouslySetInnerHTML(
										el,
										`<img alt="" slot="expert" src="https://packagequality.com/shield/create-kolibri.svg" />`
									),
							},
							{
								label: 'Install size',
								key: 'name',
								textAlign: 'center',
								render: (el, _cell, tupel) =>
									dangerouslySetInnerHTML(
										el,
										`<kol-link _href="https://packagephobia.com/result?p=${getPackageName(
											tupel.scope,
											tupel.name
										)}" _target="packagephobia" _label="">
		<img alt="" slot="expert" src="https://packagephobia.now.sh/badge?p=${getPackageName(tupel.scope, tupel.name)}" />
	</kol-link>`
									),
							},
							{
								label: 'Dependencies',
								key: 'name',
								textAlign: 'center',
								render: (el, _cell, tupel) =>
									dangerouslySetInnerHTML(
										el,
										`<kol-link _href="https://libraries.io/npm/${getPackageName(
											tupel.scope,
											tupel.name,
											'%2F'
										)}" _target="libraries" _label="">
		<img alt="" slot="expert" src="https://img.shields.io/librariesio/release/npm/${getPackageName(
			tupel.scope,
			tupel.name
		)}" />
	</kol-link>`
									),
							},
							{
								label: 'Health',
								key: 'name',
								render: (el, _cell, tupel) =>
									dangerouslySetInnerHTML(
										el,
										`<kol-link _href="https://snyk.io/advisor/npm-package/${getPackageName(
											tupel.scope,
											tupel.name
										)}" _target="snyk" _label="">
		<img alt="" slot="expert" src="https://snyk.io/advisor/npm-package/${getPackageName(
			tupel.scope,
			tupel.name
		)}/badge.svg" />
	</kol-link>`
									),
							},
							{
								label: 'Vulnerabilities*',
								key: 'name',
								textAlign: 'center',
								render: (el, _cell, tupel) =>
									dangerouslySetInnerHTML(
										el,
										`<kol-link _href="https://snyk.io/advisor/npm-package/${getPackageName(
											tupel.scope,
											tupel.name,
											'%2F'
										)}" _target="snyk" _label="">
		<img alt="" slot="expert" src="https://snyk.io/test/npm/${getPackageName(tupel.scope, tupel.name)}/badge.svg" />
	</kol-link>`
									),
							},
						],
					],
				}}
				_data={version === '1' ? DATA_V1 : DATA_V2}
			></KolTable>
		);
	}
};
