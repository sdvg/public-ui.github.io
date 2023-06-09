import React, { FC } from 'react';

const DEPRECATED = new Map<string, Set<string>>();
DEPRECATED.set('_hide-button', new Set(['_has-buttons']));
DEPRECATED.set('_hide-label', new Set(['_icon-only']));
DEPRECATED.set(
	'_label',
	new Set(['_aria-label', '_caption', '_heading', '_headline', '_quote (?)', '_summary', '_symbol', '_title'])
);
// DEPRECATED.set('_list', new Set(['_links']));
DEPRECATED.set('_variant', new Set(['_type<sup>*</sup>']));
DEPRECATED.set('', new Set(['_has-footer', '_height', '_icon-align', '_part', '_show-dropdown']));

export const PropertiesDeprecated: FC = () => {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>New Property</th>
						<th>Deprecated Properties</th>
					</tr>
				</thead>
				<tbody>
					{Array.from(DEPRECATED.keys()).map((prop) => {
						const deprecated = Array.from(DEPRECATED.get(prop) || []);
						return (
							<tr key={prop}>
								<td>{prop}</td>
								<td
									dangerouslySetInnerHTML={{
										__html: deprecated.join(', '),
									}}
								></td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<p>
				<small>
					<sup>*</sup> Betrifft nur Typen, die eigentlich Varianten meinen.
				</small>
			</p>
		</>
	);
};
