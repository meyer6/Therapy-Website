import { buttonTemplate, contactPage, textTemplate } from "./contentTemplates";

export interface imageAndTextModule {
    type: 'module1a' | 'module1b' | 'module2a' | 'module2b' | 'imageModule';
    backgroundColour: string;
    imgURL: string;
    content: Array<textTemplate | buttonTemplate | contactPage >
}
export interface textModule {
    type: 'module3a' | 'module3b' | 'module3c' | 'module3d';
    backgroundColour: string;
    content1: Array<textTemplate | buttonTemplate | contactPage >;
    content2: Array<textTemplate | buttonTemplate | contactPage >;
    content3: Array<textTemplate | buttonTemplate | contactPage >
}
export interface imageGridModule {
    type: 'imageGrid';
    backgroundColour: string;
    images: Array<string>;
}
export interface landingModule {
    type: 'landingModule';
    backgroundImg: string;
    content: Array<textTemplate | buttonTemplate>;
}