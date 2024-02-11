export type IconSize = LooseAutocomplete<'sm' | 'xs'>;

type LooseAutocomplete<T extends string> = T | Omit<string, T>;

export interface IconProps {
    size: IconSize;
}