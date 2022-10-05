export interface CardItemInterface {
    mediaType: string;
    posterPath: string;
    showDescription: () => void;
    title: string;
    fromHomeCard ?: string;
}