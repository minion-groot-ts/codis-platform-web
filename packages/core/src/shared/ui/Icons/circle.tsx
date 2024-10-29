import type { IconSvgProps } from "./types";

import * as React from "react";

export const CircleIcon: React.FC<IconSvgProps> = ({
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
			<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path>
		</svg>
	);
};