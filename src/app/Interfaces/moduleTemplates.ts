import { buttonTemplate, contactPage, imageTemplate, textTemplate, iFrameTemplate } from "./contentTemplates";

export interface imageAndTextModule {
    type: 'module1a' | 'module1b' | 'module2a' | 'module2b' | 'imageModule';
    backgroundColour: string;
    imgURL: string;
    content: Array<textTemplate | buttonTemplate | imageTemplate | iFrameTemplate | contactPage>
}
export interface textModule {
    type: 'module3a' | 'module3b' | 'module3c' | 'module3d';
    backgroundColour: string;
    content1: Array<textTemplate | buttonTemplate | imageTemplate | iFrameTemplate | contactPage>;
    content2: Array<textTemplate | buttonTemplate | imageTemplate | iFrameTemplate | contactPage>;
    content3: Array<textTemplate | buttonTemplate | imageTemplate | iFrameTemplate | contactPage>
}
export interface imagesModule {
    type: 'imageGrid';
    backgroundColour: string;
    images: Array<string>;
}

export interface carouselModule {
    type: 'carousel';
    backgroundColour: string;
    modules: Array<textModule | imageAndTextModule>;
}

export interface landingModule {
    type: 'landingModule';
    backgroundImg: string;
    content: Array<textTemplate | buttonTemplate>;
}