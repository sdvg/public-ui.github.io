import type { FC } from 'react';
import React, { Suspense, useEffect, useState, useRef, useCallback } from 'react';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import { KolBadge, KolCard, KolHeading } from '@public-ui/react';

import type { Language } from '../../shares/language';
import type { Version } from '../../shares/version';
import { COMPONENT_SYNONYMS } from '../../shares/synonyms';
import type { Component } from '../samplePreviews';
import { COMPONENT_VERSIONS } from '../samplePreviews/version';

type Props = Language & {
	version?: Version;
};

const LazyLoadComponent: FC<
	Component &
		Language & {
			path?: string;
			observer: (cb: () => void) => IntersectionObserver;
		}
> = ({ name, lang, path, loadComponent, observer }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		observer(() => setIsVisible(true)).observe(ref.current as Element);
	}, [observer]);

	const formattedComponentName = name.charAt(0).toUpperCase() + name.slice(1);

	const SampleComponent = loadComponent();
	if (!loadComponent) {
		throw new Error(`Example component for ${name} not found`);
	}
	const badges = COMPONENT_SYNONYMS?.[name];
	return (
		<div ref={ref} className="components-overview-item">
			{isVisible && (
				<Suspense fallback={<div className="skeleton"></div>}>
					<Link tabIndex={0} to={`${path ?? '/docs/next'}/components/${formattedComponentName}`} />
					<KolCard
						tabIndex={-1}
						aria-label={formattedComponentName}
						role="img"
						_level={2}
						_label={formattedComponentName}
					>
						<SampleComponent lang={lang} />
						{badges && badges?.length > 0 && (
							<div className="absolute bottom-2 p-1">
								<div className="flex flex-wrap gap-2">
									{badges?.map((label) => (
										<KolBadge key={label} _color="#dadde1" _label={label}></KolBadge>
									))}
								</div>
							</div>
						)}
					</KolCard>
				</Suspense>
			)}
		</div>
	);
};

export const ComponentList: FC<Props> = ({ lang }) => {
	const docVersion = useDocsPreferredVersion();
	const version = docVersion?.preferredVersion?.name as Version;
	const components = COMPONENT_VERSIONS?.[version ?? 'current'];
	if (components?.length <= 0) return null;
	const componentLength = components.length;
	const headline = lang === 'de' ? `Anzahl Komponenten: ${componentLength}` : `Components sum: ${componentLength}`;
	const observer = useCallback(
		(cb: () => void) =>
			new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						cb();
					}
				});
			}),
		[]
	);
	return (
		<>
			<KolHeading _label={headline} _level={3}>
				{headline}
			</KolHeading>
			<div className="components-overview">
				{components.map(({ name, loadComponent }) => (
					<LazyLoadComponent
						key={name}
						name={name}
						lang={lang}
						path={(docVersion?.preferredVersion?.path as string) ?? ''}
						loadComponent={loadComponent}
						observer={observer}
					/>
				))}
			</div>
		</>
	);
};