import { pageTemplate } from './pageTemplate';
import { buttonTemplate, imageTemplate, textTemplate } from "./contentTemplates";
import { heading1, heading2, heading3, normalText, thinText, button } from '../websiteData/textDefaults';

export interface blogTemplate {
    title: string;
    imgURL: string;
    date: string;
    description: string;
    content: Array<textTemplate | buttonTemplate | imageTemplate>
}