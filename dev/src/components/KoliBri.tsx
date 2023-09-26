import { translate } from '@docusaurus/Translate';
import { KolAbbr } from '@public-ui/react';
import React, { FunctionComponent } from 'react';

export const KoliBri: FunctionComponent = () => {
	return (
		<KolAbbr
			_label={translate({
				id: 'custom.component-library-for-the-accessibility',
				message: 'Komponentenbibliothek für die Barrierefreiheit',
			})}
		>
			KoliBri
		</KolAbbr>
	);
};

export default KoliBri;
