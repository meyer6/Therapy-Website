import { buttonTemplate, contactPage, textTemplate } from "./contentTemplates";

export interface imageAndTextModule {
    type: 'module1a' | 'module1b' | 'module2a' | 'module2b' | 'imageModule';
    backgroundColour: string;
    imgURL: string;
    text: Array<textTemplate | buttonTemplate | contactPage >
}
export interface textModule {
    type: 'module3a' | 'module3b' | 'module3c' | 'module3d';
    backgroundColour: string;
    text1: Array<textTemplate | buttonTemplate | contactPage >;
    text2: Array<textTemplate | buttonTemplate | contactPage >;
    text3: Array<textTemplate | buttonTemplate | contactPage >
}
export interface imageGridModule {
    type: 'imageGrid';
    backgroundColour: string;
    images: Array<string>;
}
export interface landingModule {
    type: 'landingModule';
    backgroundImg: string;
    text: Array<textTemplate | buttonTemplate>;
}