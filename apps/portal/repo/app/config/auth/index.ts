
export const providers = ['google', 'github', 'm3plus', 'email'] as const;

export type Providers = (typeof providers)[number];

export const publicPages: string[] = [];
