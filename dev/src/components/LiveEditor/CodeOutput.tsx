import React, { useMemo } from 'react';
import { TagName } from './types';
import Editor from '@monaco-editor/react';

type Props = {
	tag: TagName;
	params: Record<string, string | number | boolean>;
};

export function CodeOutput(props: Props) {
	const { tag, params } = props;
	let paramList = '';
	const slots = useMemo(() => {
		let result = '';
		Object.entries(params)
			.filter((tuple) => tuple[0].startsWith('slot-'))
			.forEach((tuple) => {
				const content = tuple[1] as string;
				const name = tuple[0].split('-')[1];
				if (content) {
					if (content.match(/^<.*?>/)?.length) {
						const index = content.indexOf('>');
						result += content.substring(0, index) + ` slot="${name}"` + content.substring(index);
					} else result += `<div slot="${name}">${content}</div>`;
				}
			});
		return result;
	}, [params]);

	for (const [key, value] of Object.entries(params).filter((tuple) => !tuple[0].startsWith('slot-'))) {
		if (value) {
			let paramString = '';
			switch (typeof value) {
				case 'string':
					paramString = ` ${key}="${value}"`;
					break;
				case 'number':
					paramString = ` ${key}="${value.toString()}"`;
					break;
				case 'boolean':
					paramString = value ? ` ${key}` : '';
					break;
				case 'object':
					paramString = ` ${key}="${JSON.stringify(value)}"`;
					break;
				default:
					paramString = `Never give up hope, one day everything will be fixed.`;
			}

			paramList += paramString;
		}
	}

	return (
		<div className="h-48 rounded-md overflow-hidden">
			<Editor
				defaultLanguage="html"
				options={{
					fontSize: 16,
					lineNumbers: 'on',
					readOnly: true,
				}}
				value={`<kol-${tag}${paramList}>${slots}</kol-${tag}>`}
				height="500px"
				theme="vs-dark"
			></Editor>
		</div>
	);
}