import { buttonTemplate, imageTemplate, textTemplate, iFrameTemplate } from "./contentTemplates";

export interface blogTemplate {
    title: string;
    imgURL: string;
    date: string;
    description: string;
    content: Array<textTemplate | buttonTemplate | imageTemplate | iFrameTemplate>
}