import type { IconSvgProps } from "./types";

import * as React from "react";

export const RightArrowIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {

	return (
		<svg
			width={width || size}
			height={height || size}
			{...props}
			viewBox="0 0 24 24"
			style={{ msFilter: "" }}
		>
			<path fill="currentColor" d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
		</svg>
	);
};

export const DownArrowIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {

	return (
		<svg
			width={width || size}
			height={height || size}
			{...props}
			viewBox="0 0 24 24"
		>
			<path fill="currentColor" d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
		</svg>
	);
};
